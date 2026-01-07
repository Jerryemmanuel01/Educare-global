"use client";

import Link from "next/link";
import Image from "next/image";
import { smoothScrollTo } from "../_utils/scroll";

export default function Footer() {
  return (
    <footer id="contact" className="bg-primary text-white pt-20 pb-10">
      <div className="container mx-auto px-6">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand & Overview */}
          <div>
            <Link href="/" className="inline-block mb-6">
              <div className="bg-white/10 p-2 rounded-lg inline-block">
                <Image
                  src="/educare-logo.png"
                  alt="Educare Global"
                  width={200}
                  height={50}
                  className="h-16 w-auto object-contain brightness- invejrt"
                />
              </div>
            </Link>

            <p className="text-gray-400 leading-relaxed">
              Educare Global is an international consulting firm supporting
              African education and health institutions to build strong
              governance, efficient operations, and sustainable systems.
            </p>
          </div>

          {/* Who We Serve */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Who We Serve</h3>
            <ul className="space-y-3 text-gray-400">
              {[
                "New and emerging tertiary institutions",
                "Established universities and colleges",
                "Hospitals and healthcare providers",
                "Education and health-focused NGOs",
                "Faith-based and secular institutions",
              ].map((item, index) => (
                <li key={index} className="flex items-start gap-2">
                  <svg
                    className="w-5 h-5 text-secondary shrink-0 mt-0.5"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={2}
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M8.25 4.5l7.5 7.5-7.5 7.5"
                    />
                  </svg>
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Quick Links</h3>
            <ul className="space-y-4">
              {[
                { label: "About Us", href: "#about" },
                { label: "Services", href: "#services" },
                { label: "Our Process", href: "#process" },
                { label: "Mission & Values", href: "#mission" },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    onClick={(e) => smoothScrollTo(e, item.href)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-6">Contact</h3>
            <ul className="space-y-6 text-gray-400">
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Email</span>
                <a
                  href="mailto:email@educareglobal.com"
                  className="hover:text-secondary transition-colors"
                >
                  email@educareglobal.com
                </a>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Phone</span>
                <div className="flex flex-col">
                  <span>+234 XXX XXX XXXX</span>
                  <span>+1 XXX XXX XXXX</span>
                </div>
              </li>
              <li className="flex flex-col gap-1">
                <span className="text-white font-medium">Offices</span>
                <span>Nigeria | United States</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-gray-500 text-sm">
          <p>
            &copy; {new Date().getFullYear()} Educare Global. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
