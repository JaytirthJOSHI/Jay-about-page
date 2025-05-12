"use client";

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

export default function Achievement() {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 border border-gray-200 hover:shadow-xl transition-shadow duration-300">
      <div className="flex items-start space-x-4">
        <div className="flex-shrink-0">
          <div className="relative w-12 h-12 rounded-full overflow-hidden">
            <Image 
              src="/profile-image.jpg"
              alt="Jaytirth Joshi profile"
              fill
              style={{ objectFit: 'cover' }}
              unoptimized={true} // Required for Cloudflare Pages
            />
          </div>
        </div>
        <div className="flex-1">
          <div className="flex items-center justify-between mb-2">
            <h3 className="font-bold text-brand-black">Jaytirth Joshi</h3>
            <span className="text-brand-gray-medium text-sm">7 months ago</span>
          </div>
          <p className="text-sm text-brand-gray-dark mb-3">
            CEO & Founder of HealthSathi | Medical AI Innovator | AI/ML SME | Passionate About Bridging Healthcare & Technology
          </p>
          <div className="text-brand-black mb-4">
            <p>
              Proud to have placed 2nd at the MDJunior/GYHS event, where I pitched my project, HealthSathi! 🚀 
              It's amazing to see the recognition of the mission to simplify medical reports and make healthcare more accessible.
            </p>
            <p className="text-brand-red-primary mt-2">
              #HealthSathi #AIinHealthcare #PitchSuccess #PatientEmpowerment #drfatafat #youthinhealthcare
            </p>
          </div>
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="flex items-center space-x-1">
                <span className="text-brand-gray-medium">7</span>
                <span className="text-brand-gray-medium">👍</span>
              </div>
            </div>
            <Link 
              href="https://www.linkedin.com/feed/update/urn:li:activity:7243714927352320000" 
              target="_blank" 
              rel="noopener noreferrer"
              className="text-sm text-brand-red-primary hover:underline"
            >
              View on LinkedIn
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
} 