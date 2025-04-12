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
      title: "Wyra - B2B AI Platform",
      slug: "wyra",
      description:
        "Implemented intelligent automation and AI-driven recommendations for a B2B data analysis platform",
      image: "/assets/img/wyra.webp",
      metrics: [
        "65% Faster Insights Generation",
        "45% Increase in User Retention",
        "Custom AI Algorithms",
      ],
    },
    {
      title: "Escapery - Smart Tourism",
      slug: "escapery",
      description:
        "Developed an AI-powered travel recommendation engine with personalized itinerary creation and smart notifications",
      image: "/assets/img/escapery.png",
      metrics: [
        "90% Recommendation Accuracy",
        "3.5x Booking Conversion",
        "Real-time Destination Insights",
      ],
    },
    {
      title: "ChatPDF - Document AI",
      slug: "chatpdf",
      description:
        "Built an intelligent document analysis system that extracts insights and answers questions from any PDF document",
      image: "/assets/img/chatpdf.webp",
      metrics: [
        "95% Information Accuracy",
        "75% Time Savings",
        "Multi-language Support",
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
