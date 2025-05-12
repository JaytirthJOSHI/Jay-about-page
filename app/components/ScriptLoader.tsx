"use client";

import React, { useEffect } from 'react';

export default function ScriptLoader() {
  useEffect(() => {
    // Load the LinkedIn Badge script
    const script = document.createElement('script');
    script.src = 'https://platform.linkedin.com/badges/js/profile.js';
    script.async = true;
    script.defer = true;
    script.type = 'text/javascript';
    document.body.appendChild(script);

    return () => {
      // Clean up
      try {
        document.body.removeChild(script);
      } catch (error) {
        console.warn('Error removing script:', error);
      }
    };
  }, []);

  return null; // This component doesn't render anything
} 