# Deployment Guide for Jaytirth Joshi's About Page

This guide explains how to deploy the Jaytirth Joshi about page as a subdomain of the main HealthSathi website.

## Prerequisites

- Access to your domain DNS settings (for `health-sathi.org`)
- A web hosting service or cloud provider (like Vercel, Netlify, AWS, etc.)
- Node.js 18+ installed locally

## Building the Project

1. Navigate to the project directory:
   ```bash
   cd Jay-about-page
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Build the static site:
   ```bash
   npm run export
   ```
   This will create a static export in the `/out` directory.

## Subdomain Setup Options

### Option 1: Vercel Deployment (Recommended)

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Deploy to Vercel:
   ```bash
   vercel
   ```

3. Add the `jay` subdomain in your Vercel project settings.

4. In your DNS settings for `health-sathi.org`, add a CNAME record:
   - Name: `jay`
   - Value: `cname.vercel-dns.com.`

### Option 2: Traditional Web Hosting

1. Upload the contents of the `/out` directory to your web server in a directory designated for the subdomain.

2. In your DNS settings for `health-sathi.org`, add a subdomain record:
   - Add a CNAME record pointing `jay.health-sathi.org` to your server.
   - If using A records, point `jay.health-sathi.org` to your server's IP address.

3. Configure your web server to serve the content for the subdomain:
   - For Apache, set up a VirtualHost
   - For Nginx, set up a server block

### Option 3: AWS S3 + CloudFront

1. Create an S3 bucket named `jay.health-sathi.org`
2. Upload the contents of the `/out` directory to the bucket
3. Set up the bucket for static website hosting
4. Create a CloudFront distribution for the bucket
5. In your DNS settings, create a CNAME record for `jay` pointing to your CloudFront distribution URL

## DNS Configuration

Regardless of the hosting method, you'll need to set up DNS for the subdomain:

1. Log in to your domain registrar or DNS provider for `health-sathi.org`
2. Add a CNAME record:
   - Name/Host: `jay`
   - Value/Target: [Your hosting service URL or IP]
   - TTL: 3600 (or as recommended by your provider)

## SSL Certificate

Ensure your subdomain has SSL certificate protection:

- If using Vercel, Netlify, or similar services, SSL is typically included
- If using traditional hosting, set up a Let's Encrypt certificate
- If using AWS, request a certificate through AWS Certificate Manager

## Testing the Deployment

1. Visit `https://jay.health-sathi.org` to verify the site is working
2. Check that all links, images, and resources load correctly
3. Verify SSL is working (green padlock in browser)
4. Test on different devices and browsers

## SEO Verification

After deployment, verify your SEO settings:

1. Submit the URL to Google Search Console
2. Test structured data with Google's Rich Results Test: https://search.google.com/test/rich-results
3. Check the site with SEO analysis tools like Lighthouse

## Troubleshooting

- If the site doesn't appear, check DNS propagation (can take 24-48 hours)
- If images don't load, verify the `next.config.js` settings for image domains
- If styling is missing, check that all CSS is being properly loaded

For any issues, refer to the hosting provider's documentation or contact their support.

# Deployment Guide: Cloudflare Pages

This guide provides step-by-step instructions for deploying the Jaytirth Joshi personal website to Cloudflare Pages.

## Option 1: Direct Deployment (Recommended)

### Prerequisites
- Cloudflare account with Pages access
- The website repository on GitHub

### Step 1: Connect to Cloudflare Pages
1. Log in to your Cloudflare dashboard
2. Navigate to **Pages** and click **Create a project**
3. Select **Connect to Git** and authenticate with GitHub
4. Choose the repository containing this website

### Step 2: Configure Build Settings
Configure your build settings with the following values:

- **Framework preset**: Next.js
- **Build command**: `npm run cloudflare-pages-build`
- **Build output directory**: `out`
- **Root directory**: `/` (leave as default)
- **Environment variables**: None required for basic deployment

### Step 3: Deploy
Click **Save and Deploy** to start the initial deployment process.

### Step 4: Configure Custom Domain
After the initial deployment completes:

1. Go to your project's **Custom domains** tab
2. Click **Set up a custom domain**
3. Enter `jay.health-sathi.org` as your domain
4. Follow the DNS verification steps provided by Cloudflare
5. Configure the appropriate CNAME record pointing to your Cloudflare Pages domain

## Option 2: GitHub Actions Deployment (Advanced)

This repository includes a GitHub Actions workflow for automated deployments to Cloudflare Pages.

### Prerequisites
- GitHub repository with this code
- Cloudflare account with API access

### Step 1: Configure Secrets
Add the following secrets to your GitHub repository:

- `CLOUDFLARE_API_TOKEN`: Your Cloudflare API token with Pages access
- `CLOUDFLARE_ACCOUNT_ID`: Your Cloudflare account ID

To create a Cloudflare API token:
1. Go to your Cloudflare dashboard > **Profile** > **API Tokens**
2. Create a custom token with the following permissions:
   - Account > Cloudflare Pages > Edit
   - Zone > Zone > Read
   - Zone > DNS > Edit

### Step 2: Initial Setup on Cloudflare
You must create the Pages project in Cloudflare first:

1. Go to Pages in your Cloudflare dashboard
2. Click **Create a project**
3. Choose **Direct Upload** method
4. Name your project `jay-about-page`
5. Complete the setup without uploading files

### Step 3: Trigger Deployment
Deployments will automatically trigger when you push to the main branch, or you can manually trigger a deployment from the Actions tab in GitHub.

## Maintenance and Updates

### Content Updates
To update content:

1. Edit the content in the corresponding files
2. Commit and push your changes
3. Cloudflare Pages will automatically rebuild and deploy the site

### Adding New Pages
For single-page applications, updates to routes should be reflected in:

1. Update the sitemap.xml content
2. Consider updating the _redirects file if necessary
3. Add new paths to the JSON-LD breadcrumb data

## Troubleshooting

### Common Issues

- **Build Failures**: Check the build logs in Cloudflare Pages for specific errors
- **Image Loading Issues**: Ensure all images use the `unoptimized={true}` prop with Next.js Image component
- **CSS/JS Not Loading**: Check the Content Security Policy in the _headers file

### Support Resources

- [Cloudflare Pages Documentation](https://developers.cloudflare.com/pages/)
- [Next.js Static Export Documentation](https://nextjs.org/docs/advanced-features/static-html-export)

## Performance Monitoring

After deployment, use these tools to monitor performance:

- Cloudflare Analytics (available in your Cloudflare dashboard)
- [Google PageSpeed Insights](https://pagespeed.web.dev/)
- [Google Search Console](https://search.google.com/search-console) 