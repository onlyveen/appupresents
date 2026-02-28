"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function Timings() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const tableRef = useRef<HTMLTableElement>(null);

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

      // Table rows animation: stagger from top to bottom
      const rows = tableRef.current?.querySelectorAll("tbody tr");
      if (rows && rows.length > 0) {
        gsap.set(rows, { opacity: 0, x: -30 });

        gsap.to(rows, {
          opacity: 1,
          x: 0,
          duration: 0.5,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: tableRef.current,
            start: "top 75%",
            toggleActions: "play none none reverse",
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  const timings = [
    { day: "Monday", hours: "10:30 AM - 9:30 PM" },
    { day: "Tuesday", hours: "10:30 AM - 9:30 PM" },
    { day: "Wednesday", hours: "10:30 AM - 9:30 PM" },
    { day: "Thursday", hours: "10:30 AM - 9:30 PM" },
    { day: "Friday", hours: "10:30 AM - 9:30 PM" },
    { day: "Saturday", hours: "10:30 AM - 9:30 PM" },
    { day: "Sunday", hours: "10:30 AM - 9:30 PM" },
  ];

  return (
    <div ref={sectionRef} className="w-full py-15 lg:py-25 px-6 bg-brand-maroon" id="timings">
      <div className="max-w-4xl mx-auto">
        <h2 ref={titleRef} className="font-bona-nova-sc text-brand-beige text-4xl text-center mb-12">
          Store Timings
        </h2>

        <div className="flex justify-center">
          <div className="rounded-xl bg-brand-beige overflow-hidden w-full max-w-2xl">
            <table ref={tableRef} className="w-full">
             
              <tbody>
                {timings.map((timing, index) => {
                  const isSunday = timing.day === "Sunday";
                  return (
                    <tr
                      key={timing.day}
                      className={index !== timings.length - 1 ? "border-b border-brand-maroon/10" : ""}
                    >
                      <td className={`font-bona-nova-sc text-brand-maroon text-lg px-8 py-4 ${isSunday ? "font-bold" : ""}`}>
                        {timing.day}
                      </td>
                      <td className={`font-inter text-brand-maroon text-base text-right px-8 py-4 ${isSunday ? "font-bold" : ""}`}>
                        {timing.hours}
                      </td>
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
