"use client";
import React from "react";
import { servicesData } from "../../data/servicesData";
import ServiceCard from "./ServiceCard";

const ServicesList = () => {
  return (
    <section className="py-20 bg-[#f9f9fb]">
      <div className="max-w-[1200px] mx-auto px-6">
        {servicesData.map((service, index) => (
          <ServiceCard
            key={service.id}
            service={service}
            index={index}
          />
        ))}
      </div>
    </section>
  );
};

export default ServicesList;