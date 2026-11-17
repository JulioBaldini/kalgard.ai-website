import type { MetadataRoute } from 'next'
import { getOpenings } from '@/lib/careers'

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: 'https://kalgard.ai',
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
    {
      url: 'https://kalgard.ai/careers',
      lastModified: new Date(),
      changeFrequency: 'weekly',
      priority: 0.8,
    },
    ...getOpenings().map((opening) => ({
      url: `https://kalgard.ai/careers/${opening.id}`,
      lastModified: new Date(),
      changeFrequency: 'weekly' as const,
      priority: 0.7,
    })),
  ]
}
