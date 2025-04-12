"use client";
import React from "react";
import Bubble from "../Bubble";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";

const MobileCapabilities = () => {
  const capabilitiesData = [
    {
      title: "Native & Hybrid Mobile Apps",
      description:
        "Develop powerful mobile applications using native platforms or cross-platform frameworks for optimal performance and user experience.",
    },
    {
      title: "Cross-platform Frameworks",
      description:
        "Leverage technologies that allow your app to run seamlessly on multiple platforms from a single codebase.",
    },
    {
      title: "Backend API Connectivity",
      description:
        "Build robust connections between your mobile app and server-side systems for real-time data exchange.",
    },
    {
      title: "App Store Deployment",
      description:
        "Navigate the complexities of app store submissions and ensure your app meets all requirements for successful publication.",
    },
    {
      title: "Branding & UI/UX for Mobile",
      description:
        "Create intuitive, beautiful interfaces that align with your brand identity while optimizing for mobile-specific interactions.",
    },
    {
      title: "Push Notifications & Analytics",
      description:
        "Implement engaging notification systems and comprehensive analytics to understand and improve user engagement.",
    },
  ];

  return (
    <section className="relative py-[100px] lg:py-[80px] sm:py-[60px]">
      <Bubble
        className="opacity-30"
        style={{
          bottom: 100,
          right: -150,
          "--bubble-bg": "linear-gradient(#261362, #9C27B0)",
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
              className="bg-[linear-gradient(135deg,rgba(156,39,176,0.1),transparent)] rounded-[20px] p-6 backdrop-blur-md border border-white/10 opacity-0 hover:border-white/20 transition-all duration-300"
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
                <div className="w-2 h-2 rounded-full bg-[#9C27B0] mr-3"></div>
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

export default MobileCapabilities;
