"use client";

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { smoothScrollTo } from "../_utils/scroll";

export default function Hero() {
  return (
    <section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/hero-bg.png"
          alt="Educare Global Background"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-primary/80 mix-blend-multiply" />
        <div className="absolute inset-0 bg-gradient-to-t from-primary via-transparent to-transparent opacity-90" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-2">
          Educare Global
          </h1>
          <h2 className="text-2xl md:text-4xl text-secondary font-semibold mb-6">
          Africa-Centered Education & Health Consulting
          </h2>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto italic"
        >
          We help institutions move from vision to structure— and from structure
          to results.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-6"
        >
          <Link
            href="#contact"
            onClick={(e) => smoothScrollTo(e, "contact")}
            className="px-8 py-4 bg-secondary text-white rounded-full font-semibold text-lg hover:bg-secondary/90 hover:scale-105 transition-all shadow-lg hover:shadow-secondary/30"
          >
            Request a Consultation
          </Link>
          <Link
            href="#services"
            onClick={(e) => smoothScrollTo(e, "services")}
            className="px-8 py-4 bg-white/10 backdrop-blur-sm border border-white/30 text-white rounded-full font-semibold text-lg hover:bg-white/20 transition-all hover:scale-105"
          >
            Explore Our Services
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
