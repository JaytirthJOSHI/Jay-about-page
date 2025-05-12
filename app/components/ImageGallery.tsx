"use client";

import React from 'react';
import Image from 'next/image';

export default function ImageGallery() {
  return (
    <div className="w-full">
      {/* Main featured image */}
      <div className="mb-6 overflow-hidden rounded-xl shadow-lg">
        <div className="relative w-full h-[500px]">
          <Image
            src="/gallery/image-1.jpg"
            alt="HealthSathi featured image"
            fill
            style={{ objectFit: 'cover' }}
            className="hover:scale-105 transition-transform duration-500"
            priority
            unoptimized={true} // Required for Cloudflare Pages
          />
        </div>
      </div>
      
      {/* Secondary images in a grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="relative w-full h-[200px]">
            <Image
              src="/gallery/image-2.jpg"
              alt="HealthSathi gallery image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-500"
              unoptimized={true} // Required for Cloudflare Pages
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="relative w-full h-[200px]">
            <Image
              src="/gallery/image-3.jpg"
              alt="HealthSathi gallery image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-500"
              unoptimized={true} // Required for Cloudflare Pages
            />
          </div>
        </div>
        <div className="overflow-hidden rounded-lg shadow-md">
          <div className="relative w-full h-[200px]">
            <Image
              src="/gallery/image-4.jpg"
              alt="HealthSathi gallery image"
              fill
              style={{ objectFit: 'cover' }}
              className="hover:scale-105 transition-transform duration-500"
              unoptimized={true} // Required for Cloudflare Pages
            />
          </div>
        </div>
      </div>
    </div>
  );
} 