"use client";

import React from 'react';
import Image from 'next/image';

// Since we can't directly fetch LinkedIn posts in real-time without their API, 
// we'll hardcode some recent posts from the LinkedIn profile

export default function LinkedInPosts() {
  const posts = [
    {
      id: 1,
      date: 'July 2024',
      content: '🚀 Exciting News from HealthSathi! 🚀\n\nWe are thrilled to announce that HealthSathi is now a registered 501(c)(3) nonprofit, thanks to our fiscal sponsorship by Hack Club.🎉 This partnership ensures that every donation you make is 100% tax-deductible and directly supports our mission to make healthcare insights accessible, private, and free for all.\n\nAt HealthSathi, we believe everyone deserves to understand their medical reports without barriers. With Dr. Fatafat, we provide clear, confidential explanations of lab results, X-rays, and doctor reports, empowering individuals to make informed health decisions.',
      likes: 16,
      comments: 0,
      shares: 7,
      hashtags: ['HealthSathi', 'Nonprofit', 'HealthcareForAll', 'Donate', 'MedicalReportsMadeEasy', 'DrFatafat']
    },
    {
      id: 2,
      date: 'June 2024',
      content: 'Proud to have placed 2nd at the MDJunior/GYHS event, where I pitched my project, HealthSathi! 🚀 It\'s amazing to see the recognition of the mission to simplify medical reports and make healthcare more accessible.',
      likes: 7,
      comments: 0,
      shares: 3,
      hashtags: ['HealthSathi', 'AIinHealthcare', 'PitchSuccess', 'PatientEmpowerment', 'drfatafat', 'youthinhealthcare']
    },
    {
      id: 3,
      date: 'May 2024',
      content: '🌟 From Diverse Internships to HealthSathi 🌟\n\nDuring my medical internships in India, I had the privilege to work in some of the most critical areas of healthcare:\n\n- The Ward, ICU, and OT for Cardiac Surgery: Here, I witnessed the intensity and precision of life-saving procedures, learning about the intricate details of patient care.\n- Pulse Polio Campaign with the Indian Government: I was part of a nationwide effort to eradicate polio, seeing firsthand the impact of public health initiatives.\n- Neurology and Laboratory Testing: Working alongside a neurologist, I gained valuable insights into neurological conditions and was involved in laboratory testing, including blood work and X-rays, CT-Scans, and MRIs which deepened my understanding of diagnostic processes.\n\nThese experiences highlighted a common issue: patients often struggle to understand their medical reports and the implications of their diagnoses. This realization inspired me to create HealthSathi—an AI-driven platform designed to simplify complex medical information and empower patients to take control of their health.',
      likes: 10,
      comments: 0,
      shares: 0,
      hashtags: ['HealthSathi', 'HealthcareInnovation', 'AIinHealthcare', 'PatientEmpowerment', 'MedicalInternships']
    }
  ];

  return (
    <div className="space-y-8">
      <h3 className="text-2xl font-bold text-brand-black">Recent LinkedIn Activity</h3>
      
      {posts.map(post => (
        <div key={post.id} className="bg-white rounded-lg shadow-md p-6 border border-gray-200">
          <div className="flex items-center mb-4">
            <div className="relative w-12 h-12 rounded-full overflow-hidden mr-4">
              <Image
                src="/profile-image.jpg"
                alt="Jaytirth Joshi"
                fill
                style={{ objectFit: 'cover' }}
              />
            </div>
            <div>
              <h4 className="font-bold text-brand-black">Jaytirth Joshi</h4>
              <p className="text-sm text-gray-500">{post.date}</p>
            </div>
          </div>
          
          <div className="prose max-w-none mb-4">
            <p className="text-brand-black whitespace-pre-line">{post.content}</p>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {post.hashtags.map(tag => (
              <span key={tag} className="text-brand-red-primary text-sm">#{tag}</span>
            ))}
          </div>
          
          <div className="flex items-center text-sm text-gray-500 border-t pt-4">
            <div className="mr-4 flex items-center">
              <span className="mr-1">👍</span> {post.likes} likes
            </div>
            {post.comments > 0 && (
              <div className="mr-4">
                <span className="mr-1">💬</span> {post.comments} comments
              </div>
            )}
            {post.shares > 0 && (
              <div>
                <span className="mr-1">🔄</span> {post.shares} shares
              </div>
            )}
          </div>
        </div>
      ))}
      
      <div className="text-center">
        <a 
          href="https://www.linkedin.com/in/jaytirthjoshi/" 
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-block bg-[#0077b5] text-white px-6 py-3 rounded-full font-semibold hover:bg-opacity-90 transition-all"
        >
          View Full LinkedIn Profile
        </a>
      </div>
    </div>
  );
} 