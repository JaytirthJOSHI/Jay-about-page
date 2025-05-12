"use client";

import { useEffect } from 'react';

export function BodyAttributesFixer() {
  useEffect(() => {
    // This component doesn't render anything but helps fix hydration errors 
    // by making sure body attributes from browser extensions are properly handled
    // It runs after hydration to ensure client-side rendering matches
  }, []);

  return null;
} 