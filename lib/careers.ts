import fs from 'fs'
import path from 'path'

// Loads job openings from content/careers/*.md at build time. Each file is
// frontmatter (key: value between --- fences) plus free-form sections under
// ## headings; sections render in file order on the offer page. Files
// starting with "_" (the template) and published: false are skipped.
// See content/careers/_TEMPLATE.md for the authoring format.

export type Block =
  | { type: 'p'; text: string }
  | { type: 'h3'; text: string }
  | { type: 'ul'; items: string[] }

export type Section = { heading: string; blocks: Block[] }

export type Opening = {
  id: string
  title: string
  team: string
  location: string
  contract: string
  salary: string
  experience: string
  education: string
  workTime: string
  summary: string
  applyEmail: string
  sections: Section[]
}

const CAREERS_DIR = path.join(process.cwd(), 'content', 'careers')
const DEFAULT_APPLY_EMAIL = 'contact@kalgard.ai'

function parseFrontmatter(raw: string): { meta: Record<string, string>; body: string } {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { meta: {}, body: raw }

  const meta: Record<string, string> = {}
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim() || line.trim().startsWith('#')) continue
    const sep = line.indexOf(':')
    if (sep === -1) continue
    const key = line.slice(0, sep).trim()
    const value = line.slice(sep + 1).trim().replace(/^["']|["']$/g, '')
    meta[key] = value
  }
  return { meta, body: match[2] }
}

function parseBlocks(lines: string[]): Block[] {
  const blocks: Block[] = []
  let paragraph: string[] = []

  const flushParagraph = () => {
    if (paragraph.length) {
      blocks.push({ type: 'p', text: paragraph.join(' ').trim() })
      paragraph = []
    }
  }

  for (const line of lines) {
    const h3 = line.match(/^###\s+(.+)$/)
    const bullet = line.match(/^[-*]\s+(.+)$/)

    if (h3) {
      flushParagraph()
      blocks.push({ type: 'h3', text: h3[1].trim() })
    } else if (bullet) {
      flushParagraph()
      const last = blocks[blocks.length - 1]
      if (last?.type === 'ul') {
        last.items.push(bullet[1].trim())
      } else {
        blocks.push({ type: 'ul', items: [bullet[1].trim()] })
      }
    } else if (!line.trim()) {
      flushParagraph()
    } else {
      paragraph.push(line.trim())
    }
  }
  flushParagraph()
  return blocks
}

function parseSections(body: string): Section[] {
  const sections: Section[] = []
  let heading: string | null = null
  let buffer: string[] = []

  const flush = () => {
    if (heading) sections.push({ heading, blocks: parseBlocks(buffer) })
    buffer = []
  }

  for (const line of body.split(/\r?\n/)) {
    const h2 = line.match(/^##\s+(.+)$/)
    if (h2) {
      flush()
      heading = h2[1].trim()
    } else if (heading) {
      buffer.push(line)
    }
  }
  flush()
  return sections
}

export function getOpenings(): Opening[] {
  if (!fs.existsSync(CAREERS_DIR)) return []

  return fs
    .readdirSync(CAREERS_DIR)
    .filter((file) => file.endsWith('.md') && !file.startsWith('_'))
    .sort()
    .map((file) => {
      const raw = fs.readFileSync(path.join(CAREERS_DIR, file), 'utf8')
      const { meta, body } = parseFrontmatter(raw)

      return {
        id: file.replace(/\.md$/, ''),
        title: meta.title ?? file,
        team: meta.team ?? '',
        location: meta.location ?? '',
        contract: meta.contract ?? '',
        salary: meta.salary ?? '',
        experience: meta.experience ?? '',
        education: meta.education ?? '',
        workTime: meta.work_time ?? '',
        summary: meta.summary ?? '',
        applyEmail: meta.apply_email || DEFAULT_APPLY_EMAIL,
        sections: parseSections(body),
        published: meta.published !== 'false',
      }
    })
    .filter((o) => o.published)
    .map(({ published, ...opening }) => opening)
}
