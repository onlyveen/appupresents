"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function About() {
  const aboutSectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Section Expansion: Container expands from rounded box to full width
      gsap.to(aboutSectionRef.current, {
        maxWidth: "100vw",
        borderRadius: "0px",
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top bottom",
          end: "70% bottom",
          scrub: 1,
        },
      });

      // Fade in content as section expands
      gsap.from(aboutSectionRef.current?.children || [], {
        scrollTrigger: {
          trigger: aboutSectionRef.current,
          start: "top 80%",
          end: "bottom 20%",
          toggleActions: "play none none reverse",
        },
        opacity: 0,
        y: 40,
        duration: 0.8,
        stagger: 0.2,
        ease: "power2.out",
      });
    }, aboutSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div
      id="about"
      ref={aboutSectionRef}
      className="mx-auto md:max-w-3xl bg-brand-maroon text-brand-beige md:rounded-xl px-5 md:px-20 py-15 pb-20 flex flex-col gap-5 items-center justify-center text-center -mt-20 relative z-10"
    >
      <h2 className="font-bona-nova-sc text-2xl lg:text-3xl leading-[1.35] mb-0">
        About Us
      </h2>
      <p className="font-bona-nova text-base lg:text-xl  leading-[1.35] md:max-w-2xl ">
        Founded on September 09, 2023, Appu Presents is a movement dedicated to
        bringing high-end fashion to every woman in India. We believe that
        premium quality shouldn&apos;t come with a premium price tag. With over
        300,000 followers and a commitment to excellence, we are redefining the
        standards of women&apos;s apparel—one outfit at a time.
      </p>
    </div>
  );
}
