"use client";
import React from "react";
import Bubble from "../Bubble";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";

const WebCapabilities = () => {
  const capabilitiesData = [
    {
      title: "Custom Web App Development",
      description:
        "We build tailored web applications from scratch that align with your unique business goals and user needs.",
    },
    {
      title: "Frontend & Backend Engineering",
      description:
        "Our full-stack approach ensures both the visible interface and server-side mechanics work flawlessly together.",
    },
    {
      title: "API Integrations",
      description:
        "Seamlessly connect your web platform with third-party services and existing systems through robust API integrations.",
    },
    {
      title: "DevOps & Deployment",
      description:
        "We implement continuous integration and deployment pipelines for efficient releases and updates.",
    },
    {
      title: "CI/CD Automation",
      description:
        "Automate your development workflow with continuous integration and delivery to streamline operations.",
    },
    {
      title: "Performance Optimization",
      description:
        "We fine-tune your web applications for speed, efficiency, and optimal user experience.",
    },
    {
      title: "Branding Integration",
      description:
        "Ensure your web solutions perfectly align with your brand identity across all touchpoints.",
    },
  ];

  return (
    <section className="relative py-[100px] lg:py-[80px] sm:py-[60px]">
      <Bubble
        className="opacity-30"
        style={{
          bottom: 100,
          right: -150,
          "--bubble-bg": "linear-gradient(#261362, #3366FF)",
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

        <div className="grid sm:grid-cols-1 grid-cols-2 lg:grid-cols-3 gap-8">
          {capabilitiesData.map((item, i) => (
            <GsapAnimation
              key={i}
              className="bg-[linear-gradient(135deg,rgba(51,102,255,0.1),transparent)] rounded-[20px] p-6 backdrop-blur-md border border-white/10 opacity-0 hover:border-white/20 transition-all duration-300"
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
                <div className="w-2 h-2 rounded-full bg-[#3366FF] mr-3"></div>
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

export default WebCapabilities;
