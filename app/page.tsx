"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import LinkedInBadge from './components/LinkedInBadge';
import LinkedInPosts from './components/LinkedInPosts';
import ScriptLoader from './components/ScriptLoader';

export default function JayAboutPage() {
  // Skills list
  const skills = [
    'Start-up Ventures',
    'Inpatient Care',
    'Business Ownership',
    'Emergency Management',
    'Healthcare Management',
    'Leadership',
    'AI/ML',
    'Technical Writing',
    'Content Strategy'
  ];

  // Experience highlights
  const experiences = [
    {
      title: 'CEO & Founder',
      company: 'HealthSathi',
      period: 'Aug 2024 - Present',
      description: 'Founded HealthSathi to bridge the healthcare communication gap by providing clear, AI-powered explanations of medical reports. Led the development of Dr. Fatafat, our innovative AI solution that simplifies complex medical data.',
    },
    {
      title: 'AI/ML SME (Subject Matter Expert)',
      company: 'Freedom Seal Global',
      period: 'Jan 2025 - Present',
      description: 'Providing AI and business consulting, exploring innovative ways to implement AI in various systems and social purposes.',
    },
    {
      title: 'Genral Ward, ICU, OT Intern',
      company: 'Kimaya Heart Institute and Research Centre LLP',
      period: 'Jun 2024 - Aug 2024',
      description: 'Gained hands-on experience in cardiovascular unit and ICU, participating in open-heart surgeries like Coronary Artery Bypass Grafts (CABGs) and Coronary Angioplasties.',
    },
  ];

  // Education
  const education = [
    {
      institution: 'Walton High School',
      degree: 'High School Diploma',
      period: 'Aug 2022 - May 2026',
      activities: 'Model UN National Level Team, Walton HS Fencing Team Captain, Walton Reading Bowl States Team, Founder of the local Chinese National Honor Society, Computer Science Honor Society'
    },
    {
      institution: 'Shanghai Community International School',
      degree: 'MYP & PYP In IB',
      period: 'Jan 2016 - Jan 2022',
      activities: 'Soccer Team, Swim Team, Elementary and Middle School Student Council, Water House Captain'
    }
  ];

  // Awards and achievements
  const awards = [
    'First Place Winner Of the Global Microsoft Youth Business Hackathon (Divergent Team)',
    'Distinguished Delegate & 1st place Outstanding Delegation at MUN Conference',
    'HealthSathi registered as a 501(c)(3) nonprofit'
  ];

  return (
    <main className="bg-brand-off-white min-h-screen">
      {/* Script Loader */}
      <ScriptLoader />
      
      {/* Hero Section */}
      <section className="relative py-20 md:py-32 bg-gradient-to-r from-brand-red-dark to-brand-red-primary text-brand-white">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <Image
            src="/profile-banner.jpg"
            alt="Jaytirth Joshi LinkedIn Banner"
            fill
            style={{ objectFit: 'cover' }}
            className="opacity-70"
            priority
          />
        </div>
        <div className="container mx-auto px-6 text-center relative z-10">
          <div className="relative w-40 h-40 rounded-full mx-auto mb-6 overflow-hidden border-4 border-brand-white shadow-xl">
            <Image
              src="/profile-image.jpg"
              alt="Jaytirth Joshi - CEO & Founder of HealthSathi"
              fill
              style={{ objectFit: 'cover' }}
              priority
            />
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Jaytirth (Jay) Joshi</h1>
          <p className="text-xl md:text-2xl mb-4 max-w-3xl mx-auto">
            CEO & Founder of HealthSathi | Medical AI Innovator
          </p>
          <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto opacity-90">
            Passionate about bridging healthcare & technology
          </p>
          <div className="flex justify-center space-x-4">
            <Link 
              href="https://health-sathi.org" 
              className="bg-brand-white text-brand-red-primary px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
              target="_blank"
              aria-label="Visit HealthSathi website"
              rel="noopener noreferrer"
            >
              Visit HealthSathi
            </Link>
            <Link 
              href="mailto:jaytirthjoshi@outlook.com" 
              className="border-2 border-brand-white text-brand-white px-6 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all"
              aria-label="Contact Jaytirth Joshi via email"
            >
              Contact Me
            </Link>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">About Me</h2>
          <div className="max-w-4xl mx-auto text-lg text-brand-black leading-relaxed">
            <p className="mb-6">
              I am a dedicated high school student from Marietta, Georgia, and the CEO and Founder of HealthSathi, 
              an AI-driven platform designed to simplify medical information and improve healthcare accessibility worldwide.
            </p>
            <p className="mb-6">
              With a passion for enhancing healthcare and mental health for everyone, my experiences span hands-on medical internships 
              and active involvement in Model UN, where I advocate for global health policies. Fluent in multiple languages including 
              English and Chinese, and skilled in healthcare management, I combine leadership in start-up ventures with a commitment 
              to addressing critical health issues.
            </p>
            <p>
              My mission is to bridge healthcare gaps through innovative technology and advocacy, making medical information 
              accessible and understandable for all.
            </p>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="py-16 md:py-24 bg-brand-off-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-red-primary mb-12">Key Skills</h2>
          <div className="max-w-4xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {skills.map((skill, index) => (
                <div 
                  key={index} 
                  className="bg-brand-white p-4 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow duration-300 border-l-4 border-brand-red-primary"
                >
                  <p className="text-brand-black font-medium">{skill}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">Professional Experience</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-brand-off-white p-6 rounded-lg shadow-md border-l-4 border-brand-red-primary">
                  <h3 className="text-xl font-semibold text-brand-black mb-1">{exp.title}</h3>
                  <div className="flex items-center justify-between mb-4">
                    <p className="text-brand-red-primary font-medium">{exp.company}</p>
                    <p className="text-brand-gray-medium text-sm">{exp.period}</p>
                  </div>
                  <p className="text-brand-black">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <section className="py-16 md:py-24 bg-brand-off-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-red-primary mb-12">Education</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {education.map((edu, index) => (
                <div key={index} className="bg-brand-white p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-semibold text-brand-black mb-1">{edu.institution}</h3>
                  <p className="text-brand-red-primary font-medium mb-2">{edu.degree}</p>
                  <p className="text-brand-gray-medium text-sm mb-4">{edu.period}</p>
                  <p className="text-brand-black text-sm">
                    <span className="font-medium">Activities: </span>{edu.activities}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Achievements Section */}
      <section className="py-16 md:py-24 bg-brand-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">Awards & Achievements</h2>
          <div className="max-w-4xl mx-auto">
            <div className="space-y-4">
              {awards.map((award, index) => (
                <div 
                  key={index} 
                  className="bg-brand-off-white p-5 rounded-lg shadow-md flex items-center"
                >
                  <div className="text-brand-red-primary text-3xl mr-4">🏆</div>
                  <p className="text-brand-black">{award}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* LinkedIn Section */}
      <section className="py-16 md:py-24 bg-gradient-to-b from-white to-brand-off-white">
        <div className="container mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-bold text-center text-brand-black mb-12">Connect & Follow</h2>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="text-center md:sticky md:top-24">
                <LinkedInBadge />
              </div>
            </div>
            <div className="md:col-span-2">
              <LinkedInPosts />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 md:py-24 bg-gradient-to-r from-brand-red-dark to-brand-red-primary text-brand-white">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">Get In Touch</h2>
          <p className="text-xl mb-12 max-w-2xl mx-auto">
            Connect with me to discuss healthcare innovation, AI in medicine, or potential collaborations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6">
            <a 
              href="mailto:jaytirthjoshi@outlook.com" 
              className="bg-brand-white text-brand-red-primary px-8 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all inline-block"
              aria-label="Email Jaytirth Joshi"
            >
              Email: jaytirthjoshi@outlook.com
            </a>
            <a 
              href="tel:+17703765867" 
              className="border-2 border-brand-white text-brand-white px-8 py-3 rounded-full font-semibold hover:bg-white hover:bg-opacity-10 transition-all inline-block"
              aria-label="Call Jaytirth Joshi"
            >
              Phone: +1 (770) 376-5867
            </a>
          </div>
        </div>
      </section>

      {/* Footer with SEO Links */}
      <footer className="bg-brand-black text-brand-white py-6">
        <div className="container mx-auto px-6 text-center">
          <p className="mb-4">&copy; {new Date().getFullYear()} Jaytirth Joshi. All rights reserved.</p>
          <div className="flex justify-center space-x-4">
            <Link href="/sitemap.xml" className="text-sm text-brand-white opacity-70 hover:opacity-100">
              Sitemap
            </Link>
            <Link href="https://health-sathi.org" className="text-sm text-brand-white opacity-70 hover:opacity-100">
              HealthSathi
            </Link>
            <Link href="https://health-sathi.org/privacy-policy" className="text-sm text-brand-white opacity-70 hover:opacity-100">
              Privacy Policy
            </Link>
          </div>
        </div>
      </footer>
    </main>
  );
} 