# KALGARD Media Assets

This folder contains all media assets for the KALGARD Systems website.

## Folder Structure

### `/videos/`
Product demonstration and promotional videos:
- VNM-1000 demonstration videos
- Drone flight footage
- Product assembly/installation guides
- Company introduction videos

**Recommended formats:**
- MP4 (web optimized)
- WebM (for better compression)
- Multiple resolutions (1080p, 720p, 480p)

**Example files:**
- `vnm-1000-demo.mp4`
- `drone-navigation-showcase.mp4`
- `product-assembly-guide.mp4`
- `company-intro.mp4`

### `/screenshots/`
Software interfaces and app screenshots:
- Navigation software UI
- Mobile app interfaces
- Dashboard screenshots
- Configuration panels

**Recommended files:**
- `navigation-dashboard.png`
- `mobile-app-interface.png`
- `configuration-panel.png`
- `real-time-tracking.png`

### `/renders/`
3D product renders and technical visualizations:
- VNM-1000 product renders
- Technical diagrams
- Exploded views
- Installation diagrams

**Recommended files:**
- `vnm-1000-render-hero.png`
- `vnm-1000-exploded-view.png`
- `installation-diagram.png`
- `technical-schematic.png`

### `/ui-mockups/`
Website and application mockups:
- Mobile app mockups
- Web interface designs
- User experience flows
- Prototype screenshots

**Recommended files:**
- `mobile-app-mockup.png`
- `web-dashboard-mockup.png`
- `user-flow-diagram.png`

## Usage Guidelines

### Video Optimization
- Keep file sizes under 50MB for web
- Use poster images for video elements
- Provide multiple formats for browser compatibility

### Image Optimization
- Use WebP format when possible
- Provide retina (@2x) versions for high-DPI displays
- Compress images without losing quality

### File Naming
- Use descriptive, lowercase names
- Separate words with hyphens
- Include dimensions for images when relevant
- Example: `vnm-1000-hero-1920x1080.png`

## Usage in Website

```jsx
// Video example
<video poster="/media/renders/vnm-1000-poster.jpg">
  <source src="/media/videos/vnm-1000-demo.mp4" type="video/mp4" />
  <source src="/media/videos/vnm-1000-demo.webm" type="video/webm" />
</video>

// Image example
<img 
  src="/media/renders/vnm-1000-render-hero.png" 
  alt="VNM-1000 Visual Navigation Module"
/>
``` 