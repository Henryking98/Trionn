"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

export const useCursorMovement = () => {
  useEffect(() => {
    const cursor = document.querySelector('.tr__cursor');

    const handleMouseMove = (event: MouseEvent) => {
      if (cursor) {
        gsap.to(cursor, {
          x: event.clientX,
          y: event.clientY,
          duration: 0.8,
          ease: 'power2.out',
        });
      }
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);
};
