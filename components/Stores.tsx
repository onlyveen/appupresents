"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import { FaLocationArrow } from "react-icons/fa";
import { IoCallSharp } from "react-icons/io5";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const stores = [
  {
    store_name: "Appu Presents | Pedagantyada",
    address: "Fire Station Jn, Pedagantyada, Gajuwaka , Andhra Pradesh 530044",
    direction_link: "https://www.google.com/maps/dir/Appu+Presents/data=!4m2!3m1!1s0x0:0x21923af833c57f05?sa=X&ved=1t:2428&ictx=111",
    phone: "9063656201",
    image: "/images/pedagantyada.jpg"
  },
  {
    store_name: "Appu Presents | Madhurawada",
    address: "18-15/9, Krishna Nagar, Srinivasa Nagar, Madhurawada, Madhuravada, Andhra Pradesh 530048",
    direction_link: "https://www.google.com/maps/dir/Appu+Presents+%7C+Madhurawada/@17.8161194,83.3545599,17z/data=!3m1!4b1!4m6!3m5!1s0x3a395b006226b8d7:0x5fbb627e55edf220!8m2!3d17.8161143!4d83.3571348!16s%2Fg%2F11z0m0rwps?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    phone: "9063656201",
    image: "/images/madhurawada.jpg"
  },
  {
    store_name: "Appu Presents | Anakapalle",
    address: "Raghuram Colony Rd, Raghuram Layout, Niddanam Doddi, Anakapalli, Andhra Pradesh 531002",
    direction_link: "https://www.google.com/maps/dir/Appu+Presents+%7C+Anakapalle/@17.6878496,83.0130074,17z/data=!3m1!4b1!4m6!3m5!1s0x3a397100355404a3:0x43f046a697915de1!8m2!3d17.6878445!4d83.0155823!16s%2Fg%2F11yqd7lzrg?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    phone: "8919779558",
    image: "/images/anakapalle.jpg"
  },
  {
    store_name: "Appu Presents | Vepagunta",
    address: "1-55, Santosh Nagar, Vepagunta, Andhra Pradesh 530047",
    direction_link: "https://www.google.com/maps/dir/Appu+Presents+-+Vepagunta/@17.777898,83.2134024,17z/data=!3m1!4b1!4m6!3m5!1s0x3a39670046b84949:0xe24129f42b7be2b8!8m2!3d17.7778929!4d83.2159773!16s%2Fg%2F11xrn51ql8?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    phone: "9063656201",
    image: "/images/vepagunta.jpg"
  },
  {
    store_name: "Appu Presents | Thatichetlapalem",
    address: "40-51-15A, Kasturi Nagar-01, Santhosh Nagar, Santhi Nagar, Kailasapuram, Visakhapatnam, Andhra Pradesh 530024",
    direction_link: "https://www.google.com/maps/dir/Appu+Presents+%7C+Thatichetlapalem/@17.7356461,83.2853401,17z/data=!3m1!4b1!4m6!3m5!1s0x3a39430023e66fbf:0x9c8bd8ce61607b85!8m2!3d17.735641!4d83.287915!16s%2Fg%2F11xnt203f9?entry=ttu&g_ep=EgoyMDI2MDIyNS4wIKXMDSoASAFQAw%3D%3D",
    phone: "9063656201",
    image: "/images/thatichetlapalem.jpg"
  }
];

export default function Stores() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const gridRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Title animation: fade up
      gsap.fromTo(
        titleRef.current,
        {
          opacity: 0,
          y: 30,
        },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
            toggleActions: "play none none reverse",
          },
        }
      );

      // Store cards: stagger fade up with scale
      const cards = gridRef.current?.children;
      if (cards && cards.length > 0) {
        gsap.set(cards, { opacity: 0, y: 50, scale: 0.95 });

        gsap.to(cards, {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          stagger: 0.12,
          ease: "power2.out",
          scrollTrigger: {
            trigger: gridRef.current,
            start: "top 70%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={sectionRef} className="w-full py-15 lg:py-25 px-6" id="stores">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="font-bona-nova-sc text-brand-maroon text-4xl text-center mb-12">
          Our Stores
        </h2>

        <div ref={gridRef} className="grid grid-cols-1 md:grid-cols-3 lg:gap-x-8 lg:gap-y-15 gap-8 justify-items-center">
          {stores.map((store, index) => (
            <div
              key={index}
              className="flex flex-col bg-brand-beige text-black"
            >
              {/* Store Image */}
              <div className="relative w-full h-48">
                <Image
                  src={store.image}
                  alt={store.store_name}
                  fill
                  className="object-cover rounded-xl"
                />
              </div>

              {/* Store Info */}
              <div className="flex flex-col justify-between gap-5 py-4 flex-1">
                <div className="flex flex-col gap-1">
                  <h3 className="font-bona-nova-sc text-xl leading-tight">
                    {store.store_name.split('|')[1]?.trim() || store.store_name}
                  </h3>
                  <p className="font-inter text-xs leading-tight text-black">
                    {store.address}
                  </p>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-2 mt-auto">
                  {store.phone && (
                    <a
                      href={`tel:${store.phone}`}
                      className="border border-black text-black flex items-center justify-center gap-2 px-3 py-2 rounded text-xs transition-colors hover:bg-black hover:text-white!"
                    >
                      <IoCallSharp size={10} />
                      Call Store
                    </a>
                  )}
                  <a
                    href={store.direction_link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border border-black flex-1 text-black flex items-center justify-center gap-2 px-3 py-2 rounded text-xs transition-colors hover:bg-black hover:text-white!"
                  >
                    <FaLocationArrow size={10} />
                    Get Directions
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
