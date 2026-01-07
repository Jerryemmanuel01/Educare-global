"use client";

import { motion } from "framer-motion";

export default function ProcessSection() {
  const steps = [
    {
      number: "01",
      title: "Contextual Assessment",
      heading: "Understanding institutional and environmental realities",
      description:
        "We dive deep into your institution's unique environment, analyzing existing structures and challenges to ensure our recommendations are grounded in reality.",
    },
    {
      number: "02",
      title: "Advisory & System Design",
      heading: "Tailored solutions, not imported templates",
      description:
        "We shun cookie-cutter approaches, crafting bespoke frameworks and strategies that align solely with your specific goals and operational context.",
    },
    {
      number: "03",
      title: "Implementation Support",
      heading: "Working alongside leadership and staff",
      description:
        "We don't just hand over a report; we stand shoulder-to-shoulder with your team, guiding the execution phase to ensure successful adoption.",
    },
    {
      number: "04",
      title: "Capacity Building",
      heading: "Developing internal competence and ownership",
      description:
        "We empower your staff through targeted training and mentorship, fostering a culture of ownership and competence that drives lasting growth.",
    },
    {
      number: "05",
      title: "Sustainability Review",
      heading: "Ensuring systems outlive the engagement",
      description:
        "We rigorously stress-test implemented systems to guarantee they remain robust, effective, and adaptable long after our direct engagement ends.",
    },
  ];

  return (
    <section
      id="process"
      className="py-20 bg-[#0A1A2F] text-white overflow-hidden"
    >
      <div className="container mx-auto px-6">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h4 className="text-secondary font-semibold uppercase tracking-wider mb-2">
              Our Methodology
            </h4>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              How We Work
            </h2>
            <p className="text-gray-300">
              Our proven process ensures we deliver impactful, sustainable
              results tailored to your unique needs.
            </p>
          </motion.div>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Vertical connecting line for desktop */}
          <div className="absolute left-[28px] md:left-1/2 top-0 bottom-0 w-px bg-white/10 -z-10 hidden md:block" />

          <div className="space-y-12 md:space-y-24">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className={`flex flex-col md:flex-row items-start gap-8 ${
                  index % 2 === 0 ? "md:flex-row-reverse" : ""
                }`}
              >
                {/* Content Side */}
                <div className="flex-1 w-full md:w-1/2 pl-12 md:pl-0">
                  <div
                    className={`${
                      index % 2 === 0 ? "md:text-left" : "md:text-right"
                    }`}
                  >
                    <div className="bg-white p-6 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-shadow">
                      <h3 className="text-xl font-bold text-primary mb-2">
                        {step.title}
                      </h3>
                      <h4 className="text-secondary font-medium text-sm mb-4 uppercase tracking-wide">
                        {step.heading}
                      </h4>
                      <p className="text-gray-600 leading-relaxed">
                        {step.description}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Center Number Bubble */}
                <div className="relative flex items-center justify-center shrink-0 w-14 h-14 rounded-full bg-secondary text-white font-bold text-lg shadow-xl shadow-secondary/20 z-10 md:absolute md:left-1/2 md:-translate-x-1/2 mt-1 md:mt-0 ring-4 ring-[#0A1A2F]">
                  {step.number}
                </div>

                {/* Empty Side for alignment */}
                <div className="flex-1 hidden md:block" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
