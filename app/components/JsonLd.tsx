export default function JsonLd() {
  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Person",
        "@id": "https://jay.health-sathi.org/#person",
        "name": "Jaytirth Joshi",
        "givenName": "Jaytirth",
        "familyName": "Joshi",
        "alternateName": "Jay Joshi",
        "description": "High school student from Marietta, Georgia and CEO/Founder of HealthSathi, an AI-driven platform simplifying medical reports and improving healthcare accessibility worldwide.",
        "image": {
          "@type": "ImageObject",
          "@id": "https://jay.health-sathi.org/#personimage",
          "url": "https://jay.health-sathi.org/profile-image.jpg",
          "width": 800,
          "height": 800
        },
        "url": "https://jay.health-sathi.org",
        "sameAs": [
          "https://www.linkedin.com/in/jaytirthjoshi",
          "https://health-sathi.org"
        ],
        "jobTitle": "CEO & Founder",
        "worksFor": {
          "@type": "Organization",
          "@id": "https://health-sathi.org/#organization",
          "name": "HealthSathi",
          "url": "https://health-sathi.org",
          "description": "AI-driven platform designed to simplify medical information and improve healthcare accessibility."
        },
        "alumniOf": [
          {
            "@type": "EducationalOrganization",
            "name": "Walton High School",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Marietta",
              "addressRegion": "GA",
              "addressCountry": "USA"
            }
          },
          {
            "@type": "EducationalOrganization",
            "name": "Shanghai Community International School",
            "address": {
              "@type": "PostalAddress",
              "addressLocality": "Shanghai",
              "addressCountry": "China"
            }
          }
        ],
        "knowsAbout": [
          "Healthcare Technology",
          "AI in Medicine",
          "Medical Reports",
          "Healthcare Accessibility",
          "Start-up Ventures",
          "Emergency Management"
        ],
        "hasCredential": [
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Award",
            "name": "First Place Winner Of the Global Microsoft Youth Business Hackathon (Divergent Team)"
          },
          {
            "@type": "EducationalOccupationalCredential",
            "credentialCategory": "Award",
            "name": "Distinguished Delegate & 1st place Outstanding Delegation at MUN Conference"
          }
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://jay.health-sathi.org/#website",
        "url": "https://jay.health-sathi.org",
        "name": "Jaytirth Joshi - CEO & Founder of HealthSathi",
        "description": "Personal website of Jaytirth Joshi, a high school student and medical AI innovator from Marietta, Georgia",
        "publisher": {
          "@id": "https://health-sathi.org/#organization"
        },
        "inLanguage": "en-US"
      },
      {
        "@type": "WebPage",
        "@id": "https://jay.health-sathi.org/#webpage",
        "url": "https://jay.health-sathi.org",
        "name": "Jaytirth Joshi - CEO & Founder of HealthSathi | Medical AI Innovator",
        "isPartOf": {
          "@id": "https://jay.health-sathi.org/#website"
        },
        "about": {
          "@id": "https://jay.health-sathi.org/#person"
        },
        "description": "Jaytirth Joshi is a high school student from Marietta, Georgia and CEO/Founder of HealthSathi, an AI-driven platform simplifying medical reports and enhancing healthcare accessibility worldwide.",
        "breadcrumb": {
          "@id": "https://jay.health-sathi.org/#breadcrumb"
        },
        "inLanguage": "en-US",
        "potentialAction": [
          {
            "@type": "ReadAction",
            "target": ["https://jay.health-sathi.org"]
          }
        ],
        "mainEntity": {
          "@id": "https://jay.health-sathi.org/#person"
        }
      },
      {
        "@type": "BreadcrumbList",
        "@id": "https://jay.health-sathi.org/#breadcrumb",
        "itemListElement": [
          {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://jay.health-sathi.org"
          }
        ]
      }
    ]
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
    />
  );
} 