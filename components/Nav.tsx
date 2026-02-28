"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import gsap from "gsap";

export default function Nav() {
  const navRef = useRef<HTMLElement>(null);
  const mobileMenuRef = useRef<HTMLDivElement>(null);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    // Scroll detection
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    // Navigation items reveal height from bottom (desktop only)
    const ctx = gsap.context(() => {
      gsap.from(navRef.current?.querySelectorAll(".nav-item") || [], {
        clipPath: "inset(100% 0% 0% 0%)",
        duration: 1,
        stagger: 0.1,
        delay: 0.5,
        ease: "power2.out",
      });
    }, navRef);

    return () => ctx.revert();
  }, []);

  useEffect(() => {
    // Animate mobile menu
    if (mobileMenuRef.current) {
      if (isMobileMenuOpen) {
        gsap.to(mobileMenuRef.current, {
          x: 0,
          duration: 0.4,
          ease: "power2.out",
        });
      } else {
        gsap.to(mobileMenuRef.current, {
          x: "100%",
          duration: 0.4,
          ease: "power2.in",
        });
      }
    }
  }, [isMobileMenuOpen]);

  const closeMobileMenu = () => setIsMobileMenuOpen(false);

  return (
    <>
      <nav
        ref={navRef}
        className={`fixed top-0 left-0 w-full px-6 flex items-center text-brand-maroon text-2xl whitespace-nowrap z-[1000] transition-all duration-300 ${
          isScrolled
            ? "bg-brand-beige justify-between  py-2.5"
            : "justify-center gap-10 py-5"
        }`}
      >
        {/* Logo - shown when scrolled or on mobile */}
        {(isScrolled || window.innerWidth < 1024) && (
          <a href="/" className="w-[40.718px] h-[42.431px] lg:w-[40.718px] lg:h-[42.431px] cursor-pointer">
            <Image
              src="/images/icon.svg"
              alt="Appu Presents Logo"
              width={41}
              height={42}
              className="w-full h-auto"
            />
          </a>
        )}

        {/* Desktop Nav Items */}
        <div className="hidden lg:flex items-center text-base gap-10">
          <a
            href="#about"
            className="nav-item hover:opacity-70 transition-opacity cursor-pointer"
          >
            About us
          </a>
          <a
            href="#stores"
            className="nav-item hover:opacity-70 transition-opacity cursor-pointer"
          >
            Our Stores
          </a>
          <a
            href="#timings"
            className="nav-item hover:opacity-70 transition-opacity cursor-pointer"
          >
            Timings
          </a>

          {/* Contact button - maroon background when scrolled */}
          <a
            href="https://wa.me/919063656201"
            target="_blank"
            rel="noopener noreferrer"
            className={`nav-item transition-all cursor-pointer ${
              isScrolled
                ? "bg-brand-maroon text-white! px-6 py-2.5"
                : "hover:opacity-70"
            }`}
          >
            Contact
          </a>
        </div>

        {/* Hamburger Menu Button (Mobile) */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden flex flex-col gap-1.5 w-8 h-8 justify-center items-center ml-auto"
          aria-label="Toggle menu"
        >
          <span className={`w-6 h-0.5 bg-brand-maroon transition-transform ${isMobileMenuOpen ? 'rotate-45 translate-y-2' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-brand-maroon transition-opacity ${isMobileMenuOpen ? 'opacity-0' : ''}`}></span>
          <span className={`w-6 h-0.5 bg-brand-maroon transition-transform ${isMobileMenuOpen ? '-rotate-45 -translate-y-2' : ''}`}></span>
        </button>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        ref={mobileMenuRef}
        className="fixed top-0 right-0 h-full w-[80%] max-w-sm bg-brand-beige z-[999] translate-x-full lg:hidden shadow-2xl"
      >
        <div className="flex flex-col gap-8 p-8 pt-24">
          <a
            href="#about"
            onClick={closeMobileMenu}
            className="text-brand-maroon text-2xl font-bona-nova-sc hover:opacity-70 transition-opacity"
          >
            About us
          </a>
          <a
            href="#stores"
            onClick={closeMobileMenu}
            className="text-brand-maroon text-2xl font-bona-nova-sc hover:opacity-70 transition-opacity"
          >
            Our Stores
          </a>
          <a
            href="#timings"
            onClick={closeMobileMenu}
            className="text-brand-maroon text-2xl font-bona-nova-sc hover:opacity-70 transition-opacity"
          >
            Timings
          </a>
          <a
            href="https://wa.me/919063656201"
            target="_blank"
            rel="noopener noreferrer"
            onClick={closeMobileMenu}
            className="bg-brand-maroon text-white text-2xl font-bona-nova-sc px-6 py-3 text-center"
          >
            Contact
          </a>
        </div>
      </div>

      {/* Overlay */}
      {isMobileMenuOpen && (
        <div
          onClick={closeMobileMenu}
          className="fixed inset-0 bg-black/50 z-998 lg:hidden"
        />
      )}
    </>
  );
}
