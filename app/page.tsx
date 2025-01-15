"use client";

import CustomCursor from "@/components/CustomCursor";
import Header from "@/components/Header";
import Hero from "@/components/Hero";


// import { useEffect } from 'react';
// import gsap from 'gsap';

export default function Home() {
// useEffect(() => {
//     const cursor = document.querySelector('.tr__cursor');

//     const handleMouseMove = (event: MouseEvent) => {
//       if (cursor) {
//         gsap.to(cursor, {
//           x: event.clientX,
//           y: event.clientY,
//           duration: 0.8,
//           ease: 'power2.out',
//         });
//       }
//     };

//     window.addEventListener('mousemove', handleMouseMove);
//     return () => {
//       window.removeEventListener('mousemove', handleMouseMove);
//     };
//   }, []);
  
  return (
    <>
        <CustomCursor/>
        
        <Header />
        <Hero />
        
        {/* <div className="tr__cursor"></div> */}
    </>
  );
}
