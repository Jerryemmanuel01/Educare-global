"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { smoothScrollTo } from "../_utils/scroll";

export default function ServicesSection() {
  const services = [
    {
      title: "Higher Education Consulting",
      tag: "Flagship",
      description:
        "We support universities, colleges, polytechnics, and tertiary institutions at different stages of development. We help institutions grow with clarity—without losing purpose or control.",
      focusAreas: [
        "New institution setup and accreditation readiness",
        "Governance and council effectiveness",
        "Academic planning and relevant program development",
        "Quality assurance and regulatory compliance",
        "Enrollment growth and student retention",
        "Financial sustainability in resource-constrained environments",
      ],
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M4.26 10.147a60.436 60.436 0 00-.491 6.347A48.627 48.627 0 0112 20.904a48.627 48.627 0 018.232-4.41 60.46 60.46 0 00-.491-6.347m-15.482 0a50.57 50.57 0 00-2.658-.813A59.905 59.905 0 0112 3.493a59.902 59.902 0 0110.499 5.516 50.552 50.552 0 00-2.658.813m-15.482 0A50.553 50.553 0 0112 13.489a50.551 50.551 0 0110.499-3.341"
          />
        </svg>
      ),
    },
    {
      title: "Hospital & Health Systems Consulting",
      tag: "",
      description:
        "We support hospitals and healthcare organizations seeking operational clarity and improved service delivery.",
      focusAreas: [
        "Hospital administration and operational review",
        "Patient flow and service delivery improvement",
        "Staff structure, productivity, and accountability",
        "Policies and standard operating procedures",
        "Institutional revamp and turnaround support",
      ],
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
          />
        </svg>
      ),
    },
    {
      title: "Management & Staff Training",
      tag: "Support Service",
      description:
        "Training reinforces the systems we help institutions build. Training is contextual, practical, and aligned with institutional goals.",
      focusAreas: [
        "Leadership and institutional management",
        "Staff onboarding and role clarity",
        "Performance management and accountability",
        "Workplace culture, ethics, and ownership",
        "Managing change in growing institutions",
      ],
      icon: (
        <svg
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M18 18.72a9.094 9.094 0 003.741-.479 3 3 0 00-4.682-2.72m.94 3.198l.001.031c0 .225-.012.447-.037.666A11.944 11.944 0 0112 21c-2.17 0-4.207-.576-5.963-1.584A6.062 6.062 0 016 18.719m12 0a5.971 5.971 0 00-.941-3.197m0 0A5.995 5.995 0 0012 12.75a5.995 5.995 0 00-5.058 2.772m0 0a3 3 0 00-4.681 2.72 8.986 8.986 0 003.74.477m.94-3.197a5.971 5.971 0 00-.94 3.197M15 6.75a3 3 0 11-6 0 3 3 0 016 0zm6 3a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0zm-13.5 0a2.25 2.25 0 11-4.5 0 2.25 2.25 0 014.5 0z"
          />
        </svg>
      ),
    },
  ];

  return (
    <section id="services" className="py-20 bg-muted">
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-secondary font-semibold uppercase tracking-wider mb-2">
              Our Services
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
              Comprehensive Solutions for Your Journey
            </h2>
            <p className="text-gray-600">
              We offer end-to-end services to ensure your success, from
              institutional setup to staff training and operational excellence.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={{
            visible: {
              transition: {
                staggerChildren: 0.1,
              },
            },
          }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          {services.map((service, index) => (
            <motion.div
              key={index}
              variants={{
                hidden: { opacity: 0, y: 20 },
                visible: { opacity: 1, y: 0 },
              }}
              className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow group border border-gray-100 flex flex-col"
            >
              <div className="flex items-start justify-between mb-6">
                <div className="w-12 h-12 bg-primary/5 text-primary rounded-xl flex items-center justify-center group-hover:bg-primary group-hover:text-white transition-colors">
                  {service.icon}
                </div>
                {service.tag && (
                  <span className="bg-secondary/10 text-secondary text-xs font-bold px-3 py-1 rounded-full">
                    {service.tag}
                  </span>
                )}
              </div>

              <h3 className="text-xl font-bold text-primary mb-3">
                {service.title}
              </h3>
              <p className="text-gray-600 leading-relaxed mb-6">
                {service.description}
              </p>

              {/* Separator */}
              <div className="h-px w-full bg-gray-100 mb-6" />

              <div className="grow">
                <h4 className="text-sm font-semibold text-primary uppercase tracking-wide mb-4">
                  Focus Areas
                </h4>
                <ul className="space-y-3">
                  {service.focusAreas.map((area, idx) => (
                    <li key={idx} className="flex items-start gap-2">
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
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                      <span className="text-sm text-gray-600">{area}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="mt-8 pt-6 border-t border-gray-100">
                <Link
                  href="#contact"
                  onClick={(e) => smoothScrollTo(e, "contact")}
                  className="text-primary font-medium inline-flex items-center gap-1 hover:gap-2 transition-all w-full justify-center bg-gray-50 py-3 rounded-xl hover:bg-primary hover:text-white"
                >
                  Request Consultation <span aria-hidden="true">&rarr;</span>
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
