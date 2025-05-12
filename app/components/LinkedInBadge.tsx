"use client";

import React from 'react';

export default function LinkedInBadge() {
  return (
    <div 
      className="badge-base LI-profile-badge" 
      data-locale="en_US" 
      data-size="medium" 
      data-theme="light" 
      data-type="VERTICAL" 
      data-vanity="jaytirthjoshi" 
      data-version="v1"
    >
      <a 
        className="badge-base__link LI-simple-link" 
        href="https://www.linkedin.com/in/jaytirthjoshi?trk=profile-badge"
        target="_blank"
        rel="noopener noreferrer"
      >
        Jaytirth Joshi
      </a>
    </div>
  );
} 