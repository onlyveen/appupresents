"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function PrivacyPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".privacy-section", {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: "power2.out",
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={containerRef} className="bg-brand-beige min-h-screen py-20 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="privacy-section font-bona-nova-sc text-5xl md:text-6xl text-brand-maroon text-center mb-8">
          Privacy Policy
        </h1>

        <p className="privacy-section font-bona-nova text-lg text-gray-700 text-center mb-12">
          Last Updated: September 09, 2023
        </p>

        <div className="space-y-8">
          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              1. Introduction
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              Welcome to Appu Presents. We respect your privacy and are committed to protecting your personal data.
              This privacy policy will inform you about how we look after your personal data when you visit our website
              and tell you about your privacy rights and how the law protects you.
            </p>
          </section>

          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              2. Information We Collect
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed mb-4">
              We may collect, use, store and transfer different kinds of personal data about you:
            </p>
            <ul className="font-bona-nova text-lg text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Identity Data: name, username, or similar identifier</li>
              <li>Contact Data: email address, telephone number, and delivery address</li>
              <li>Transaction Data: details about payments and products you have purchased from us</li>
              <li>Technical Data: internet protocol (IP) address, browser type and version, and device information</li>
              <li>Usage Data: information about how you use our website and products</li>
            </ul>
          </section>

          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              3. How We Use Your Information
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed mb-4">
              We will only use your personal data when the law allows us to. Most commonly, we will use your personal data in the following circumstances:
            </p>
            <ul className="font-bona-nova text-lg text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>To process and deliver your orders</li>
              <li>To manage your account and provide customer support</li>
              <li>To send you marketing communications (with your consent)</li>
              <li>To improve our website, products, and services</li>
              <li>To comply with legal obligations</li>
            </ul>
          </section>

          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              4. Data Security
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              We have put in place appropriate security measures to prevent your personal data from being accidentally
              lost, used or accessed in an unauthorized way, altered or disclosed. We limit access to your personal data
              to those employees, agents, contractors and other third parties who have a business need to know.
            </p>
          </section>

          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              5. Your Rights
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed mb-4">
              Under certain circumstances, you have rights under data protection laws in relation to your personal data:
            </p>
            <ul className="font-bona-nova text-lg text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Request access to your personal data</li>
              <li>Request correction of your personal data</li>
              <li>Request erasure of your personal data</li>
              <li>Object to processing of your personal data</li>
              <li>Request restriction of processing your personal data</li>
              <li>Request transfer of your personal data</li>
              <li>Right to withdraw consent</li>
            </ul>
          </section>

          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              6. Cookies
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              Our website uses cookies to distinguish you from other users of our website. This helps us to provide you
              with a good experience when you browse our website and also allows us to improve our site. You can set your
              browser to refuse all or some browser cookies, or to alert you when websites set or access cookies.
            </p>
          </section>

          <section className="privacy-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              7. Contact Us
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              If you have any questions about this privacy policy or our privacy practices, please contact us at:
            </p>
            <p className="font-bona-nova text-lg text-brand-maroon mt-4 font-semibold">
              Email: privacy@appupresents.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
