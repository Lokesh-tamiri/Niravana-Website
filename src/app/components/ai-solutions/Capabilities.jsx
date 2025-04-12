"use client";
import React from "react";
import Bubble from "../Bubble";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";

const AICapabilities = () => {
  const capabilitiesData = [
    {
      title: "Workflow & Task Automation",
      description:
        "Streamline repetitive processes and reduce manual intervention with intelligent workflow automation solutions.",
    },
    {
      title: "AI-powered Chatbots",
      description:
        "Deploy conversational interfaces that understand intent and provide helpful responses to enhance customer experience.",
    },
    {
      title: "Predictive Data Pipelines",
      description:
        "Transform raw data into actionable insights with automated analysis and machine learning models.",
    },
    {
      title: "RPA Integration",
      description:
        "Implement Robotic Process Automation to handle rule-based, repetitive tasks with precision and consistency.",
    },
    {
      title: "LLM + API Orchestration",
      description:
        "Combine large language models with API integrations to create intelligent systems that interact with multiple services.",
    },
    {
      title: "Cloud Automation Pipelines",
      description:
        "Build scalable, resilient cloud infrastructure that adapts to changing workloads automatically.",
    },
  ];

  return (
    <section className="relative py-[100px] lg:py-[80px] sm:py-[60px]">
      <Bubble
        className="opacity-30"
        style={{
          bottom: 100,
          right: -150,
          "--bubble-bg": "linear-gradient(#261362, #00BCD4)",
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
              className="bg-[linear-gradient(135deg,rgba(0,188,212,0.1),transparent)] rounded-[20px] p-6 backdrop-blur-md border border-white/10 opacity-0 hover:border-white/20 transition-all duration-300"
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
                <div className="w-2 h-2 rounded-full bg-[#00BCD4] mr-3"></div>
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

export default AICapabilities;
