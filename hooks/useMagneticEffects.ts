"use client";

import { useEffect } from "react";
import gsap from "gsap";

export const useMagneticEffects = () => {
    useEffect(() => {
        // Ensure TypeScript understands these are HTMLElements
        const magnetics =
            document.querySelectorAll<HTMLElement>(".tr__magnetic");

        const handleMagneticMove = (event: MouseEvent) => {
            const target = event.currentTarget as HTMLElement;
            const rect = target.getBoundingClientRect();

            gsap.to(target, {
                x:
                    ((event.clientX - rect.left) / target.offsetWidth - 0.5) *
                    50,
                y:
                    ((event.clientY - rect.top) / target.offsetHeight - 0.5) *
                    50,
                duration: 1,
                ease: "power1.out",
            });
        };

        const resetMagneticEffect = (event: MouseEvent) => {
            const target = event.currentTarget as HTMLElement;

            gsap.to(target, {
                x: 0,
                y: 0,
                duration: 1,
                ease: "power1.out",
            });
        };

        magnetics.forEach((element) => {
            element.addEventListener(
                "mousemove",
                handleMagneticMove as EventListener
            );
            element.addEventListener(
                "mouseout",
                resetMagneticEffect as EventListener
            );
        });

        return () => {
            magnetics.forEach((element) => {
                element.removeEventListener(
                    "mousemove",
                    handleMagneticMove as EventListener
                );
                element.removeEventListener(
                    "mouseout",
                    resetMagneticEffect as EventListener
                );
            });
        };
    }, []);
};

// "use client";

// import { useEffect } from "react";
// import gsap from "gsap";

// export const useMagneticEffects = () => {
//     useEffect(() => {
//         const magnetics = document.querySelectorAll(".tr__magnetic");

//         const handleMagneticMove = (event: MouseEvent) => {
//             const target = event.currentTarget as HTMLElement;
//             const rect = target.getBoundingClientRect();

//             gsap.to(target, {
//                 x:
//                     ((event.clientX - rect.left) / target.offsetWidth - 0.5) *
//                     50,
//                 y:
//                     ((event.clientY - rect.top) / target.offsetHeight - 0.5) *
//                     50,
//                 duration: 1,
//                 ease: "power1.out",
//             });
//         };

//         const resetMagneticEffect = (event: MouseEvent) => {
//             const target = event.currentTarget as HTMLElement;

//             gsap.to(target, {
//                 x: 0,
//                 y: 0,
//                 duration: 1,
//                 ease: "power1.out",
//             });
//         };

//         magnetics.forEach((element) => {
//             element.addEventListener("mousemove", handleMagneticMove);
//             element.addEventListener("mouseout", resetMagneticEffect);
//         });

//         return () => {
//             magnetics.forEach((element) => {
//                 element.removeEventListener("mousemove", handleMagneticMove);
//                 element.removeEventListener("mouseout", resetMagneticEffect);
//             });
//         };
//     }, []);
// };
