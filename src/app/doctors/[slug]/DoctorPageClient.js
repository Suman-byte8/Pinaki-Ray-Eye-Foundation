"use client";

import { doctorsData } from "@/data/doctorsData";
import Image from "next/image";
import { notFound } from "next/navigation";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa6";
import { motion } from "motion/react";

export default function DoctorPageClient({ slug }) {
  const doctor = doctorsData.find((doc) => doc.slug === slug);

  if (!doctor) {
    return notFound();
  }

  return (
    <>
      <main className="flex-grow">
        {/* ================= HERO SECTION ================= */}
        <section className="relative bg-gradient-to-r from-[#2f317b] to-[#6a84c9] py-24 overflow-hidden">
          {/* Decorative Background Shapes */}
          <div className="absolute w-96 h-96 bg-white/5 rotate-45 top-10 left-10 rounded-lg blur-2xl"></div>
          <div className="absolute w-80 h-80 bg-white/5 rotate-12 bottom-10 right-10 rounded-lg blur-2xl"></div>

          <div className="max-w-[1000px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10 lg:gap-16 items-center relative z-10">
            {/* Doctor Image Card with Gradient Border */}
            <motion.div 
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              className="relative group p-[4px] rounded-[2.5rem] bg-gradient-to-br from-[#ff8a00] via-[#ffb347] to-[#ff8a00] shadow-2xl transition-all duration-500 hover:shadow-[#ff8a00]/40"
            >
              <div className="relative w-full h-[400px] md:h-[480px] rounded-[2.3rem] overflow-hidden bg-white">
                <Image
                  src={doctor.image}
                  alt={doctor.name}
                  fill
                  className="object-cover object-top transition-transform duration-700 group-hover:scale-110"
                  priority
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#2f317b]/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              </div>
            </motion.div>

            {/* Doctor Info */}
            <motion.div 
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
              className="text-white"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-4 tracking-wide">
                {doctor.name}
              </h1>
              <p className="text-xl mb-4 opacity-90">
                {doctor.designation}
              </p>
              <p className="mb-8 text-lg leading-relaxed">
                <span className="font-semibold">Experienced in:</span>{" "}
                {doctor.experience}
              </p>

              {/* Social Media Icons */}
              <div className="flex gap-4 mb-8">
                {[
                  { Icon: FaFacebook, href: "#" },
                  { Icon: FaInstagram, href: "#" },
                  { Icon: FaLinkedin, href: "#" }
                ].map((social, index) => (
                  <motion.a
                    key={index}
                    href={social.href}
                    whileHover={{ y: -5, scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    className="w-11 h-11 flex items-center justify-center bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white hover:bg-[#ff8a00] hover:border-[#ff8a00] transition-all duration-300 shadow-lg"
                  >
                    <social.Icon size={18} />
                  </motion.a>
                ))}
              </div>

              {/* CTA Button */}
              <motion.a
                href="https://pinakiray.elihealthsupport.com/"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="inline-block bg-[#ff8a00] text-white px-8 py-3.5 rounded-xl font-bold text-base transition-all duration-300 shadow-[0_10px_20px_-10px_rgba(255,138,0,0.5)] hover:shadow-[0_15px_25px_-5px_rgba(255,138,0,0.4)]"
              >
                Book Your Appointment
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* ================= OVERVIEW SECTION ================= */}
        <section className="py-24 bg-[#f9f9fb]">
          <div className="max-w-[900px] mx-auto px-6">
            <h2 className="text-3xl md:text-4xl font-bold text-center text-[#2f317b] mb-12">
              Overview
            </h2>
            <div className="text-gray-700 leading-relaxed whitespace-pre-line text-lg">
              {doctor.overview}
            </div>
          </div>
        </section>
      </main>
    </>
  );
}
