"use client";
import React from "react";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";
import WorkCarousel from "../WorkCarousel";

const BrandingExpertise = () => {
  const expertiseItems = [
    "Figma, Adobe Suite",
    "Webflow, Canva",
    "Tailwind UI Customization",
    "Conversion-Oriented Design",
  ];

  const brandingWorks = [
    {
      title: "Eficens Systems",
      slug: "eficens",
      description:
        "Rebranded a tech company with a fresh identity that reflects its innovative approach and values",
      image: "/assets/img/eficens.webp",
      metrics: [
        "Market Perception Improved",
        "45% Engagement Increase",
        "Brand Loyalty Growth",
      ],
    },
    {
      title: "AxisB - Corporate Branding",
      slug: "axisb",
      description:
        "Developed a comprehensive brand identity system for a financial corporation with distinctive visual elements",
      image: "/assets/img/axisb.webp",
      metrics: [
        "Brand Recognition +70%",
        "Increased Client Trust",
        "Consistent Digital Experience",
      ],
    },
    {
      title: "CareFy - Healthcare Brand",
      slug: "carefy",
      description:
        "Created a trustworthy and caring brand identity for a healthcare mobile application focusing on user wellbeing",
      image: "/assets/img/carefy.webp",
      metrics: [
        "User Engagement +55%",
        "Industry Recognition",
        "Patient Trust Improved",
      ],
    },
    {
      title: "HeartCare4life - Medical Brand",
      slug: "heartcare4life",
      description:
        "Designed a professional and approachable brand identity for a cardiac care center with custom illustrations",
      image: "/assets/img/heartcare4life.webp",
      metrics: [
        "Patient Acquisition +40%",
        "Brand Consistency Across Channels",
        "Increased Referrals",
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#FF5722]/20 mr-5">
                    <div className="w-3 h-3 rounded-full bg-[#FF5722]"></div>
                  </div>
                  <p className="text-lg text-white font-medium">{item}</p>
                </GsapAnimation>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mt-10 lg:mt-0">
            <WorkCarousel works={brandingWorks} accentColor="255,87,34" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingExpertise;
