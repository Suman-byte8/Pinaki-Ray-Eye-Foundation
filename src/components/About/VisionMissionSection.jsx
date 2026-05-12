"use client";
import React from "react";

const VisionMissionCard = ({ title, text }) => (
  <div className="bg-white shadow-md rounded-lg p-6 border-l-4 border-[#ff8a00] hover:shadow-lg transition">
    <h3 className="text-xl font-bold text-[#2f317b] mb-3">{title}</h3>
    <p className="text-gray-600">{text}</p>
  </div>
);

const VisionMissionSection = () => {
  return (
    <section className="py-16 bg-[#f9f9fb]">
      <div className="max-w-[1000px] mx-auto px-6 space-y-8">

        <VisionMissionCard
          title="Our Vision"
          text="Pioneering Center of Excellence for Eye Care with a commitment to improving the Quality of life of our Patients, striving to provide the Best Services with Empathy and Care."
        />

        <VisionMissionCard
          title="Our Mission"
          text="Ensuring 100% Patient Satisfaction by Dedicated and Skilled Professionals and Adopting Best Ethical Practices & Modern Technologies."
        />

      </div>
    </section>
  );
};

export default VisionMissionSection;