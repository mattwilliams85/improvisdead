'use client'

import { useEffect, useState, useRef } from 'react';

export default function HostObserver() {
  useEffect(() => {
    const target = document.getElementById('hosts');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          document.getElementById('dan').classList.add('danAnimation');
          document.getElementById('tim').classList.add('timAnimation');
          document.getElementById('damian').classList.add('damianAnimation');
        }
      });
    }, {
      threshold: 0.5
    });

    if (target) {
      observer.observe(target);
    }

    // Clean up the observer on unmount
    return () => {
      if (target) {
        observer.unobserve(target);
      }
    };
  }, []);

  return null
}