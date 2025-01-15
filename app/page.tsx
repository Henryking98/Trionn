"use client";

import Header from "@/components/Header";
import { useEffect } from 'react';
import gsap from 'gsap';

export default function Home() {
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
  
  return (
    <div className="">
        
        <Header />
        
        <div className="tr__cursor"></div>
    </div>
  );
}
