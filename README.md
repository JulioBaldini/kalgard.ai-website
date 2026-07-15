# KALGARD Systems Website

A modern, responsive website for KALGARD Systems showcasing advanced aerial navigation technology. Built with Next.js 14, React 18, and Tailwind CSS.

## 🚀 Technology Stack

### **Frontend Framework**
- **Next.js 14.0.4** - React framework with App Router
- **React 18** - UI library
- **TypeScript** - Type-safe JavaScript

### **Styling & UI**
- **Tailwind CSS 3.3.0** - Utility-first CSS framework
- **PostCSS** - CSS processing
- **Autoprefixer** - Vendor prefix automation
- **Lucide React** - Icon library

### **Development Tools**
- **ESLint** - Code linting
- **PostCSS** - CSS processing pipeline

## 📁 Project Structure

```
website-KALGARD/
├── app/                          # Next.js App Router
│   ├── layout.tsx               # Root layout (wraps all pages)
│   ├── page.tsx                 # Home page component
│   └── globals.css              # Global styles & Tailwind imports
├── components/                   # React components
│   ├── Header.tsx               # Navigation header
│   ├── Hero.tsx                 # Hero section
│   ├── About.tsx                # About section
│   ├── Products.tsx             # Products showcase
│   ├── TechnicalShowcase.tsx    # Technical demonstrations
│   ├── Features.tsx             # Feature highlights
│   ├── Contact.tsx              # Contact form
│   └── Footer.tsx               # Site footer
├── content/                      # Markdown content
│   ├── applications.md          # Application use cases
│   └── technical-overview.md    # Technical documentation
├── public/                       # Static assets
│   ├── logos/                   # Brand assets
│   ├── media/                   # Images, videos, screenshots
│   └── resources/               # Downloadable files
├── tailwind.config.js           # Tailwind configuration
├── postcss.config.js            # PostCSS configuration
├── next.config.js               # Next.js configuration
└── package.json                 # Dependencies & scripts
```

## 🏗️ Architecture Overview

### **Next.js App Router Structure**
The website uses Next.js 14's App Router with the following key files:

- **`app/layout.tsx`** - Root layout that wraps all pages
  - Contains metadata for SEO
  - Imports global styles
  - Defines HTML structure
  - Renders `{children}` (page content)

- **`app/page.tsx`** - Home page component
  - Imports and renders all main sections
  - Defines page structure and component order

### **Component Architecture**
Components are organized by page sections:

1. **Header** - Navigation and branding
2. **Hero** - Main value proposition and call-to-action
3. **About** - Company and technology overview
4. **Products** - Product showcase with drift correction demo
5. **TechnicalShowcase** - Technical demonstrations and videos
6. **Features** - Feature grid with interactive modal
7. **Contact** - Contact form and information
8. **Footer** - Links and company information

## 🎨 Styling System

### **Tailwind CSS Configuration**
Custom configuration in `tailwind.config.js`:

```js
colors: {
  'kalgard': {
    50: '#f0fdfa',
    100: '#ccfbf1',
    200: '#99f6e4',
    300: '#5eead4',
    400: '#2dd4bf',
    500: '#14b8a6', // Main brand color
    600: '#0d9488',
    700: '#0f766e',
    800: '#115e59',
    900: '#134e4a',
  }
}
```

### **CSS Processing Pipeline**
1. **Tailwind CSS** - Utility classes and custom theme
2. **PostCSS** - CSS processing and optimization
3. **Autoprefixer** - Vendor prefix automation
4. **Custom CSS** - Animations and scrollbar styling

### **Responsive Design**
- Mobile-first approach
- Responsive breakpoints: `sm:`, `md:`, `lg:`, `xl:`
- Grid layouts that adapt to screen size
- Flexible typography scaling

## 🔧 Key Features

### **Interactive Elements**
- **Video Modal** - Embedded video player with overlay
- **Smooth Scrolling** - CSS-based smooth scroll behavior
- **Hover Effects** - Interactive hover states and transitions
- **Responsive Navigation** - Mobile-friendly navigation

### **Performance Optimizations**
- **Next.js Image Optimization** - Automatic image optimization
- **Code Splitting** - Automatic component code splitting
- **Static Generation** - Pre-rendered static pages
- **CSS Purge** - Only includes used Tailwind classes

### **SEO & Metadata**
- **Dynamic Metadata** - Page-specific meta tags
- **Open Graph** - Social media sharing optimization
- **Twitter Cards** - Twitter sharing optimization
- **Structured Data** - Search engine optimization

## 🚀 Getting Started

### **Prerequisites**
- Node.js 18+ 
- npm or yarn

### **Installation**
```bash
# Clone the repository
git clone [repository-url]
cd website-KALGARD

# Install dependencies
npm install

# Start development server
npm run dev
```

### **Available Scripts**
```bash
npm run dev      # Start development server
npm run build    # Build for production
npm run start    # Start production server
npm run lint     # Run ESLint
```

### **Development Server**
The website runs on `http://localhost:3000` by default.

## 📱 Responsive Design

The website is fully responsive with breakpoints:
- **Mobile**: < 640px
- **Tablet**: 640px - 1024px  
- **Desktop**: > 1024px

### **Responsive Features**
- Flexible grid layouts
- Mobile-optimized navigation
- Responsive typography
- Touch-friendly interactions

## 🎯 Content Management

### **Static Content**
- **Markdown Files** - Technical documentation in `/content/`
- **Component Props** - Dynamic content passed as props
- **Configuration Files** - Site-wide settings in config files

### **Asset Management**
- **Images** - Optimized and responsive images
- **Videos** - Embedded video content
- **Documents** - Downloadable resources
- **Icons** - Lucide React icon library

## 🔍 SEO & Analytics

### **Search Engine Optimization**
- Semantic HTML structure
- Meta tags and descriptions
- Open Graph and Twitter Cards
- Structured data markup
- Fast loading times

### **Performance Metrics**
- Lighthouse score optimization
- Core Web Vitals compliance
- Mobile-first indexing
- Accessibility compliance

## 🛠️ Customization

### **Adding New Components**
1. Create component file in `/components/`
2. Import in `app/page.tsx`
3. Add to page structure
4. Style with Tailwind classes

### **Modifying Styles**
1. **Tailwind Classes** - Use utility classes in components
2. **Custom CSS** - Add to `app/globals.css`
3. **Tailwind Config** - Modify `tailwind.config.js`
4. **Component Styles** - Inline styles or CSS modules

### **Adding New Pages**
1. Create `page.tsx` in `app/[page-name]/`
2. Add navigation links
3. Update metadata
4. Style with existing design system

## 📦 Dependencies

### **Core Dependencies**
- `next: 14.0.4` - React framework
- `react: ^18` - UI library
- `react-dom: ^18` - React DOM rendering
- `framer-motion: ^10.16.16` - Animation library
- `lucide-react: ^0.294.0` - Icon library

### **Development Dependencies**
- `typescript: ^5` - Type safety
- `tailwindcss: ^3.3.0` - CSS framework
- `postcss: ^8` - CSS processing
- `autoprefixer: ^10.0.1` - Vendor prefixes
- `eslint: ^8` - Code linting

## 🌐 Deployment

### **Build Process**
```bash
npm run build
```

### **Deployment Options**
- **Vercel** - Recommended for Next.js
- **Netlify** - Static site hosting
- **AWS Amplify** - Cloud hosting
- **Self-hosted** - Custom server setup

## 📄 License

This project is proprietary to KALGARD Systems.

## 🤝 Contributing

For internal development:
1. Create feature branch
2. Make changes
3. Test thoroughly
4. Submit pull request
5. Code review process

## 📞 Support

For technical support or questions about the website:
- Contact: jules.baldantoni@inria.fr
- Documentation: See `/content/` directory
- Issues: Create GitHub issue for bugs

---

**Built with ❤️ by KALGARD Systems**
