"use client";


export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="pb-12 text-center bg-brand-maroon text-brand-beige ">
      <div className="max-w-6xl mx-auto px-4">
        {/* Footer Links */}


        {/* Copyright */}
        <p className="font-bona-nova text-[18px] mb-2">
          © 2023 - {currentYear} Appu Presents. All rights reserved.
        </p>

      </div>
    </footer>
  );
}
