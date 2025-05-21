import './globals.css';
import type { Metadata } from 'next';
import React from 'react';
import JsonLd from './components/JsonLd';

export const metadata: Metadata = {
  title: 'Jaytirth Joshi - CEO & Founder of HealthSathi | Medical AI Innovator',
  description: 'Jaytirth Joshi is a high school student from Marietta, Georgia and CEO/Founder of HealthSathi, an AI-driven platform simplifying medical reports and enhancing healthcare accessibility worldwide. Learn about his journey in healthcare technology and AI innovation.',
  keywords: 'Jaytirth Joshi, HealthSathi, Jay Joshi, Medical AI, Healthcare Technology, Dr. Fatafat, Healthcare accessibility, AI in healthcare, medical reports, Walton High School, AI/ML SME, medical innovation, youth entrepreneur, high school CEO, healthcare AI, medical technology, health tech startup, AI healthcare solutions, medical report analysis',
  creator: 'Jaytirth Joshi',
  publisher: 'HealthSathi',
  authors: [{ name: 'Jaytirth Joshi', url: 'https://health-sathi.org' }],
  category: 'Healthcare Technology',
  openGraph: {
    title: 'Jaytirth Joshi - CEO & Founder of HealthSathi | Medical AI Innovator',
    description: 'High school student and medical AI innovator passionate about making healthcare accessible for all through HealthSathi. Discover how AI is transforming healthcare accessibility.',
    url: 'https://jay.health-sathi.org',
    siteName: 'Jaytirth Joshi | HealthSathi',
    locale: 'en_US',
    type: 'profile',
    images: [
      {
        url: '/profile-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Jaytirth Joshi - CEO & Founder of HealthSathi'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Jaytirth Joshi - CEO & Founder of HealthSathi | Medical AI Innovator',
    description: 'Medical AI Innovator passionate about bridging healthcare & technology. Transforming healthcare accessibility through AI.',
    creator: '@healthsathi',
    images: ['/profile-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1
    }
  },
  alternates: {
    canonical: 'https://jay.health-sathi.org',
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code'
  },
  other: {
    'format-detection': 'telephone=no',
    'theme-color': '#ffffff',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Jaytirth Joshi | HealthSathi'
  }
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="/favicon.ico" sizes="any" />
        <link rel="apple-touch-icon" href="/apple-touch-icon.png" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&display=swap" rel="stylesheet" />
        <JsonLd />
      </head>
      <body suppressHydrationWarning={true}>
        {children}
      </body>
    </html>
  );
} 