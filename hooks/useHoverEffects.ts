"use client";

import { useEffect } from 'react';
import gsap from 'gsap';

export const useHoverEffects = () => {
  useEffect(() => {
    const hoverables = document.querySelectorAll('.tr__cursor__hoverable');

    const handleMouseEnter = () => {
      gsap.to('.tr__cursor', {
        width: '80px',
        height: '80px',
        filter: 'blur(10px)',
        duration: 0.3,
      });
    };

    const handleMouseLeave = () => {
      gsap.to('.tr__cursor', {
        width: '20px',
        height: '20px',
        filter: 'blur(0px)',
        duration: 0.3,
      });
    };

    hoverables.forEach((element) => {
      element.addEventListener('mouseenter', handleMouseEnter);
      element.addEventListener('mouseleave', handleMouseLeave);
    });

    return () => {
      hoverables.forEach((element) => {
        element.removeEventListener('mouseenter', handleMouseEnter);
        element.removeEventListener('mouseleave', handleMouseLeave);
      });
    };
  }, []);
};