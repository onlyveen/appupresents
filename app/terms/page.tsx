"use client";

import { useEffect, useRef } from "react";
import gsap from "gsap";

export default function TermsPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(".terms-section", {
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
        <h1 className="terms-section font-bona-nova-sc text-5xl md:text-6xl text-brand-maroon text-center mb-8">
          Terms & Conditions
        </h1>

        <p className="terms-section font-bona-nova text-lg text-gray-700 text-center mb-12">
          Last Updated: September 09, 2023
        </p>

        <div className="space-y-8">
          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              1. Acceptance of Terms
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              By accessing and using the Appu Presents website, you accept and agree to be bound by the terms and
              provision of this agreement. If you do not agree to abide by the above, please do not use this service.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              2. Use License
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed mb-4">
              Permission is granted to temporarily download one copy of the materials (information or software) on
              Appu Presents&apos;s website for personal, non-commercial transitory viewing only. This is the grant of a
              license, not a transfer of title, and under this license you may not:
            </p>
            <ul className="font-bona-nova text-lg text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Modify or copy the materials</li>
              <li>Use the materials for any commercial purpose or for any public display</li>
              <li>Attempt to decompile or reverse engineer any software contained on the website</li>
              <li>Remove any copyright or other proprietary notations from the materials</li>
              <li>Transfer the materials to another person or &quot;mirror&quot; the materials on any other server</li>
            </ul>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              3. Product Information
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              We strive to provide accurate product information, including descriptions, prices, and availability.
              However, we do not warrant that product descriptions, pricing, or other content is accurate, complete,
              reliable, current, or error-free. We reserve the right to correct any errors, inaccuracies, or omissions
              and to change or update information at any time without prior notice.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              4. Pricing and Payment
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed mb-4">
              All prices are listed in Indian Rupees (INR) and are inclusive of applicable taxes unless otherwise stated.
              We reserve the right to change prices at any time. Payment methods accepted include:
            </p>
            <ul className="font-bona-nova text-lg text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>Credit/Debit Cards</li>
              <li>Net Banking</li>
              <li>UPI</li>
              <li>Digital Wallets</li>
              <li>Cash on Delivery (where available)</li>
            </ul>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              5. Shipping and Delivery
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              We ship to locations across India. Delivery times may vary depending on your location and product
              availability. Standard delivery typically takes 5-7 business days. Express delivery options may be
              available for select locations. Shipping charges will be calculated at checkout based on your location
              and order value.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              6. Returns and Exchanges
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed mb-4">
              We want you to be completely satisfied with your purchase. Our return and exchange policy includes:
            </p>
            <ul className="font-bona-nova text-lg text-gray-700 leading-relaxed list-disc pl-6 space-y-2">
              <li>7-day return window from the date of delivery</li>
              <li>Products must be unused, unwashed, and in original packaging with tags attached</li>
              <li>Exchange available for different sizes or colors (subject to availability)</li>
              <li>Refunds will be processed to the original payment method within 7-10 business days</li>
              <li>Return shipping costs may apply unless the product is defective or incorrect</li>
            </ul>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              7. User Account
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              When you create an account with us, you must provide information that is accurate, complete, and current
              at all times. You are responsible for safeguarding your password and for any activities or actions under
              your account. You must notify us immediately upon becoming aware of any breach of security or unauthorized
              use of your account.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              8. Intellectual Property
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              All content on this website, including but not limited to text, graphics, logos, images, and software,
              is the property of Appu Presents and is protected by Indian and international copyright laws. You may not
              reproduce, distribute, modify, or create derivative works from any content without our express written
              permission.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              9. Limitation of Liability
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              In no event shall Appu Presents or its suppliers be liable for any damages (including, without limitation,
              damages for loss of data or profit, or due to business interruption) arising out of the use or inability
              to use the materials on Appu Presents&apos;s website, even if Appu Presents or an authorized representative
              has been notified orally or in writing of the possibility of such damage.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              10. Governing Law
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              These terms and conditions are governed by and construed in accordance with the laws of India, and you
              irrevocably submit to the exclusive jurisdiction of the courts in that location.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              11. Changes to Terms
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              Appu Presents reserves the right to revise these terms and conditions at any time without notice. By using
              this website, you are agreeing to be bound by the then-current version of these terms and conditions.
            </p>
          </section>

          <section className="terms-section bg-white p-8 rounded-2xl shadow-md">
            <h2 className="font-bona-nova-sc text-3xl text-brand-maroon mb-4">
              12. Contact Information
            </h2>
            <p className="font-bona-nova text-lg text-gray-700 leading-relaxed">
              If you have any questions about these Terms & Conditions, please contact us at:
            </p>
            <p className="font-bona-nova text-lg text-brand-maroon mt-4 font-semibold">
              Email: support@appupresents.com
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
