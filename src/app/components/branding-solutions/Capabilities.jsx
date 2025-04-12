"use client";
import React from "react";
import Bubble from "../Bubble";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";

const BrandingCapabilities = () => {
  const capabilitiesData = [
    {
      title: "Brand Strategy & Storytelling",
      description:
        "Develop compelling brand narratives and positioning strategies that resonate with your target audience and differentiate you from competitors.",
    },
    {
      title: "UI/UX Design Systems",
      description:
        "Create cohesive user interface frameworks and experience guidelines to ensure consistency across all digital touchpoints.",
    },
    {
      title: "Style Guide Development",
      description:
        "Establish comprehensive brand standards that define the visual and verbal elements of your brand identity.",
    },
    {
      title: "Logo, Typography, Color Schemes",
      description:
        "Design distinctive visual identity components that capture your brand essence and establish recognition.",
    },
    {
      title: "Social Media Visual Kits",
      description:
        "Build ready-to-use template systems for consistent and engaging social media presence across platforms.",
    },
    {
      title: "Consistency Audits",
      description:
        "Evaluate and align existing brand touchpoints to ensure unified brand presentation across all channels.",
    },
  ];

  return (
    <section className="relative py-[100px] lg:py-[80px] sm:py-[60px]">
      <Bubble
        className="opacity-30"
        style={{
          bottom: 100,
          right: -150,
          "--bubble-bg": "linear-gradient(#261362, #FF5722)",
        }}
      />
      <div className="container relative">
        <GsapAnimation
          as="h2"
          className="heading-4 text-white font-semibold mb-[60px] text-center opacity-0"
          animation={{
            opacity: 1,
            duration: 1,
            ease: Power3.easeInOut,
          }}
        >
          Our Capabilities
        </GsapAnimation>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((item, i) => (
            <GsapAnimation
              key={i}
              className="bg-[linear-gradient(135deg,rgba(255,87,34,0.1),transparent)] rounded-[20px] p-6 backdrop-blur-md border border-white/10 opacity-0 hover:border-white/20 transition-all duration-300"
              animation={{
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.1,
                ease: Power3.easeOut,
                from: { opacity: 0, y: 30 },
              }}
            >
              <div className="flex items-center mb-4">
                <div className="w-2 h-2 rounded-full bg-[#FF5722] mr-3"></div>
                <h3 className="text-xl text-white font-medium">{item.title}</h3>
              </div>
              <p className="text-white/70">{item.description}</p>
            </GsapAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default BrandingCapabilities;
