"use client";
import React from "react";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";
import WorkCarousel from "../WorkCarousel";

const AIExpertise = () => {
  const expertiseItems = [
    "Generative AI Models",
    "LLM fine-tuning",
    "Custom AI Agents",
    "AI Data Processing",
  ];

  const aiWorks = [
    {
      title: "CopyGenius - AI Writer",
      slug: "copygenius",
      description:
        "Built a custom GPT-powered content generation platform with fine-tuned models for specific industry verticals",
      image: "/assets/img/works/copygenius.jpg",
      metrics: ["85% Time Savings", "53% Conversion Rate", "20K+ Active Users"],
    },
    {
      title: "VisionX - Image Analysis",
      slug: "visionx",
      description:
        "Developed an AI-based visual inspection system that can detect product defects with high accuracy",
      image: "/assets/img/works/visionx.jpg",
      metrics: [
        "99.2% Detection Rate",
        "70% Cost Reduction",
        "Real-time Processing",
      ],
    },
    {
      title: "DataSense - AI Analytics",
      slug: "datasense",
      description:
        "Created an intelligent data analytics platform that predicts business trends and provides actionable insights",
      image: "/assets/img/works/datasense.jpg",
      metrics: [
        "92% Prediction Accuracy",
        "3x Faster Analysis",
        "Multi-source Integration",
      ],
    },
  ];

  return (
    <section className="relative py-[100px] lg:py-[80px] sm:py-[60px]">
      <div className="container relative">
        <div className="row">
          <div className="col-lg-6">
            <GsapAnimation
              as="h2"
              className="heading-4 text-white font-semibold mb-[30px] opacity-0"
              animation={{
                opacity: 1,
                duration: 1,
                ease: Power3.easeInOut,
              }}
            >
              Expertise
            </GsapAnimation>

            <div className="grid grid-cols-1 gap-6">
              {expertiseItems.map((item, i) => (
                <GsapAnimation
                  key={i}
                  className="flex items-center opacity-0"
                  animation={{
                    opacity: 1,
                    x: 0,
                    duration: 0.8,
                    delay: i * 0.15,
                    ease: Power3.easeOut,
                    from: { opacity: 0, x: -30 },
                  }}
                >
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#A259FF]/20 mr-5">
                    <div className="w-3 h-3 rounded-full bg-[#A259FF]"></div>
                  </div>
                  <p className="text-lg text-white font-medium">{item}</p>
                </GsapAnimation>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mt-10 lg:mt-0">
            <WorkCarousel works={aiWorks} accentColor="162,89,255" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIExpertise;
