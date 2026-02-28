"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Header() {
  const containerRef = useRef<HTMLDivElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const logoRef = useRef<HTMLImageElement>(null);
  const heroTextRef = useRef<HTMLHeadingElement>(null);
  const ladyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Split text into characters for letter-by-letter animation
      if (heroTextRef.current) {
        // Get all text elements (span and small)
        const textElements =
          heroTextRef.current.querySelectorAll("span, small");

        textElements.forEach((element) => {
          const text = element.textContent || "";
          const classes = element.className; // Preserve original classes

          // Split text into characters and wrap each in a span
          const chars = text.split("").map((char) => {
            if (char === " ") return "&nbsp;";
            return `<span class="char-span" style="display: inline-block; color: inherit;">${char}</span>`;
          });

          // Replace element content while preserving its classes
          element.innerHTML = chars.join("");
          element.className = classes; // Restore classes
        });
      }

      // Create timeline for logo animation
      const logoTimeline = gsap.timeline({ delay: 0.3 });

      // Step 1: Logo zoom out first (with initial y position set)
      logoTimeline.fromTo(
        logoRef.current,
        {
          opacity: 0,
          scale: 3.5,
          y: 200,
          filter: "blur(20px)",
        },
        {
          opacity: 1,
          scale: 1,
          y: 200, // keep at bottom after zoom
          filter: "blur(0px)",
          duration: 1.0,
          ease: "power3.out",
        },
      );

      // Step 2: Logo pan up (immediately after zoom)
      logoTimeline.to(logoRef.current, {
        y: 0,
        duration: 1.2,
        ease: "power3.out",
      });

      // Text animation starts when logo begins panning
      if (heroTextRef.current) {
        gsap.from(heroTextRef.current.querySelectorAll(".char-span"), {
          opacity: 0,
          filter: "blur(10px)",
          y: 20,
          duration: 0.8,
          delay: 0.3 + 1.0, // starts when pan begins
          stagger: 0.03,
          ease: "power2.out",
        });
      }

      // Lady image blur reveal
      gsap.from(ladyRef.current, {
        opacity: 0,
        filter: "blur(30px)",
        scale: 1.1,
        duration: 1.5,
        delay: 2,
        ease: "power3.out",
      });

      // Parallax effect for background image (75% speed)
      gsap.fromTo(
        bgRef.current,
        { yPercent: 0 },
        {
          yPercent: 60,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );

      // Parallax effect for lady image with responsive scale
      const isMobile = window.innerWidth < 1024;
      gsap.fromTo(
        ladyRef.current,
        { yPercent: 0, scale: 1 },
        {
          yPercent: isMobile ? 0 : 100,
          scale: isMobile ? 3 : 1,
          ease: "none",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top top",
            end: "bottom top",
            scrub: true,
          },
        },
      );
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      ref={containerRef}
      className="ap-header-bg relative w-full lg-min-h-screen flex flex-col items-center justify-center pt-30 pb-20 overflow-hidden"
    >
      {/* Background Image */}
      <div
        ref={bgRef}
        className="absolute z-0 w-full h-[120%] left-0 top-[-10%]"
      >
        <Image
          src="/images/ap-header-bg.png"
          alt=""
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Logo */}
      <div className=" relative z-10">
        <Image
          ref={logoRef}
          src="/images/logo.svg"
          alt="Appu Presents Logo"
          width={180}
          height={180}
          className="max-lg-w-[90px]!"
          priority
        />
      </div>

      {/* Hero Text */}
      <h1
        ref={heroTextRef}
        className="font-bona-nova-sc text-brand-maroon text-center -lg-mb-16  relative z-10"
        suppressHydrationWarning
      >
        <span className="text-3xl lg:text-4xl block mb-2 max-lg:mt-5" suppressHydrationWarning>
          Presenting Premium
        </span>
        <small className="text-xl lg:text-2xl block" suppressHydrationWarning>
          Apparel for Women.
        </small>
      </h1>

      {/* Lady Image */}
      <div ref={ladyRef} className="w-full flex justify-center relative z-10">
        <Image
          src="/images/ap-header-papa.png"
          alt="Woman in premium apparel"
          width={1800}
          height={1200}
          className="max-lg:w-[125%]! max-lg:max-w-[125%]! h-auto"
        />
      </div>
    </div>
  );
}
