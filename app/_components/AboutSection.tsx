"use client";

import { motion } from "framer-motion";

export default function AboutSection() {
  const stats = [
    { label: "Years Experience", value: "10+" },
    // { label: "Universities Partnered", value: "50+" },
    { label: "Students Placed", value: "1000+" },
    // { label: "Visa Success Rate", value: "98%" },
  ];

  return (
    <section id="about">
      <div className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="w-full md:w-1/2"
            >
              <div className="relative">
                <div className="aspect-square rounded-2xl bg-gray-100 overflow-hidden relative z-10">
                  {/* Placeholder for About Image - could be a team photo or office shot */}
                  <div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
                    <span className="text-gray-400 font-medium">
                      About Image Placeholder
                    </span>
                  </div>
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-secondary/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -top-6 -left-6 w-48 h-48 bg-primary/10 rounded-full blur-3xl -z-10" />
              </div>
            </motion.div>

            <div className="w-full md:w-1/2">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
              >
                <h4 className="text-secondary font-semibold uppercase tracking-wider mb-2">
                  Who We Are
                </h4>
                <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
                  Global Perspective, Local Impact
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Educare Global exists to address a common challenge across
                  Africa: strong institutional vision without the systems needed
                  to sustain it.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Since 2015, we have advised new and established African
                  institutions—helping leadership teams design governance
                  frameworks, improve administration, and build practical
                  systems that can be maintained long after consultants exit.
                </p>
                <p className="text-gray-600 mb-8 leading-relaxed">
                  While we maintain offices in Nigeria and the United States,
                  our work is grounded in African regulatory, cultural, and
                  operational realities.
                </p>
              </motion.div>

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
                className="grid grid-cols-2 gap-6"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: { opacity: 1, y: 0 },
                    }}
                    className="p-4 rounded-xl bg-muted/50 hover:bg-muted transition-colors"
                  >
                    <div className="text-2xl md:text-3xl font-bold text-primary mb-1">
                      {stat.value}
                    </div>
                    <div className="text-sm text-gray-500 font-medium">
                      {stat.label}
                    </div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
