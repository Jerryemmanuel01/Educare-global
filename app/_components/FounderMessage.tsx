"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function FounderMessage() {
  return (
    <section id="founder" className="py-20 bg-muted/30">
      <div className="container mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="max-w-5xl mx-auto bg-white rounded-3xl shadow-xl overflow-hidden"
        >
          <div className="grid md:grid-cols-2 gap-0">
            <div className="relative h-64 md:h-auto bg-primary">
              {/* Placeholder for Founder Image - Using a generic professional look if no image provided yet */}
              {/* Ideally we would generate or ask for a real photo. Using a colored placeholder pattern for now with initials */}
              <div className="absolute inset-0 flex items-center justify-center text-white/10">
                <svg
                  className="w-32 h-32"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z" />
                </svg>
              </div>
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-primary/90 to-transparent text-white">
                <h3 className="text-xl font-bold">Dr. Founder Name</h3>
                <p className="text-sm text-secondary">Founder & CEO</p>
              </div>
            </div>

            <div className="p-8 md:p-12 flex flex-col justify-center">
              <div className="mb-6 text-secondary">
                <svg
                  width="40"
                  height="40"
                  viewBox="0 0 24 24"
                  fill="currentColor"
                >
                  <path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9C9.00012 13.1707 11.408 11.1738 13.5656 10.7491C13.8829 10.6867 14.1032 10.3809 14.0622 10.0606L13.8654 8.52554C13.8188 8.16167 13.4839 7.90117 13.1186 7.95473C9.42998 8.49529 6.84503 11.2335 6.09673 14.7797C6.01726 15.1565 6.30739 15.5165 6.69176 15.5165H8.01704C8.56933 15.5165 9.01704 15.9642 9.01704 16.5165V20.4835C9.01704 21.0358 8.56933 21.4835 8.01704 21.4835H4.51704C3.96476 21.4835 3.51704 21.0358 3.51704 20.4835V16.3195C3.51704 10.7431 8.94098 5.79051 16.0357 4.04167C16.4426 3.94136 16.8373 4.24941 16.8373 4.66874V6.26257C16.8373 6.61904 16.5862 6.92484 16.2372 6.99222C11.5376 7.8996 9.42083 11.087 9.1764 12.8718C9.55113 12.6394 10.0163 12.5165 10.517 12.5165H12.017C13.1216 12.5165 14.017 13.4119 14.017 14.5165V21ZM22 21L22 18C22 16.8954 21.1046 16 20 16H16.983C16.9831 13.1707 19.3909 11.1738 21.5486 10.7491C21.8659 10.6867 22.0862 10.3809 22.0452 10.0606L21.8484 8.52554C21.8018 8.16167 21.4668 7.90117 21.1016 7.95473C17.4129 8.49529 14.828 11.2335 14.0797 14.7797C14.0002 15.1565 14.2904 15.5165 14.6747 15.5165H16C16.5523 15.5165 17 15.9642 17 16.5165V20.4835C17 21.0358 16.5523 21.4835 16 21.4835H12.5C11.9477 21.4835 11.5 21.0358 11.5 20.4835V16.3195C11.5 10.7431 16.924 5.79051 24.0187 4.04167C24.4256 3.94136 24.8203 4.24941 24.8203 4.66874V6.26257C24.8203 6.61904 24.5692 6.92484 24.2202 6.99222C19.5206 7.8996 17.4038 11.087 17.1594 12.8718C17.5341 12.6394 17.9993 12.5165 18.5 12.5165H20C21.1046 12.5165 22 13.4119 22 14.5165V21Z" />
                </svg>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.3 }}
              >
                <h2 className="text-3xl font-bold mb-4 text-primary">
                  A Message from the Founder
                </h2>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  "Educare Global was founded on a simple but important
                  observation: across Africa, many schools and hospitals are
                  driven by strong vision and genuine purpose, yet struggle
                  because the systems required to sustain that vision are either
                  weak or missing.
                </p>
                {/* <p className="text-gray-600 mb-6 leading-relaxed">
                  Since 2015, our work has focused on helping institutions move
                  beyond personality-driven leadership and informal processes,
                  toward clear governance, effective administration, and
                  accountable systems. We believe that strong institutions are
                  not built by passion alone—they are built by structure,
                  people, and disciplined execution.
                </p> */}
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Our Africa-centered approach is deliberate. Solutions must
                  respect context, regulation, culture, and resource realities.
                  At the same time, African institutions deserve systems that
                  meet global standards and can scale with growth.
                </p>
                <p className="text-gray-600 mb-6 leading-relaxed">
                  Educare Global exists to walk alongside institutional
                  leaders—practically, honestly, and responsibly—as they build
                  organizations that last."
                </p>
                <div className="flex items-center gap-4">
                  <div className="h-0.5 w-12 bg-secondary" />
                  <span className="font-script text-xl text-primary font-medium italic">
                    Founder, Educare Global
                  </span>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
