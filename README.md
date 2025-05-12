# Jaytirth Joshi - About Page

This is a personal about page for Jaytirth Joshi, the CEO and Founder of HealthSathi. The page is built using Next.js and styled with Tailwind CSS, following the design system of the main HealthSathi website.

## Subdomain Information

This project is designed to be deployed as a subdomain at `jay.health-sathi.org`. See the [DEPLOY.md](DEPLOY.md) file for detailed deployment instructions.

## Features

- Responsive design that works on mobile, tablet, and desktop
- Modern UI with brand-consistent styling
- Information about Jaytirth's background, skills, experience, education, and achievements
- Contact information and links
- SEO optimized with structured data
- Set up for subdomain deployment

## SEO Features

- Comprehensive metadata
- JSON-LD structured data
- Open Graph tags for social sharing
- Twitter Card support
- Sitemap and robots.txt
- Semantic HTML elements
- Accessibility attributes

## Getting Started

### Prerequisites

- Node.js 18.0.0 or later
- npm or yarn

### Installation

1. Clone the repository
2. Navigate to the project directory
3. Install dependencies:

```bash
npm install
# or
yarn install
```

### Development

Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser to see the result.

### Building for Production

```bash
npm run export
# or
yarn export
```

This will generate a static site in the `out` directory, ready for deployment.

## Project Structure

- `app/` - Next.js 14 app directory
  - `page.tsx` - Main about page component
  - `layout.tsx` - Root layout with SEO metadata
  - `globals.css` - Global styles
  - `components/` - Reusable components including JSON-LD
- `public/` - Static assets and SEO files (robots.txt, sitemap.xml)
- `tailwind.config.js` - Tailwind CSS configuration
- `next.config.js` - Next.js configuration with subdomain settings

## Styling

This project uses Tailwind CSS with custom colors that match the HealthSathi brand. The main brand colors are defined in both the Tailwind configuration and CSS variables.

## Cloudflare Pages Deployment Instructions

This project is configured to deploy on Cloudflare Pages. Follow these steps to set up your deployment:

### 1. Connect Your Repository

1. Log in to the Cloudflare dashboard
2. Navigate to Pages > Create a project > Connect to Git
3. Select your repository containing this website code
4. Configure with the following build settings:

### 2. Build Configuration

- **Framework preset**: Next.js
- **Build command**: npm run cloudflare-pages-build
- **Build output directory**: out
- **Root directory**: /
- **Environment variables**: No custom environment variables needed

### 3. Custom Domain Setup

After the initial deployment:

1. Go to your project in Cloudflare Pages
2. Click on "Custom domains"
3. Add `jay.health-sathi.org` as your custom domain
4. Verify domain ownership by updating DNS records as requested

### 4. Verify Configuration Files

The following special files are included for Cloudflare Pages:

- `_headers`: Sets security headers and caching rules
- `_redirects`: Configures redirect rules
- `next.config.js`: Optimized for Cloudflare Pages deployment

### 5. Notes for Future Updates

- The site is configured for static export (`output: 'export'`)
- All images are set to `unoptimized: true` for Cloudflare compatibility
- Dynamic server features will not work - this is a fully static site

## Local Development

```
# Install dependencies
npm install

# Start development server
npm run dev

# Build for production
npm run build

# Export static files
npm run export
```

## SEO Features

- Comprehensive structured data with JSON-LD
- Dynamic OpenGraph image generation
- Security.txt configuration
- Robots.txt and Sitemap.xml 
- Meta tags optimized for search engines 