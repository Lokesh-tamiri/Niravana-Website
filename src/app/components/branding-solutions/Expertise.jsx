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
      title: "Niravana Identity",
      slug: "niravana",
      description:
        "Created a memorable brand identity with logo design, style guide, and comprehensive visual language",
      image: "/assets/img/Niravana.svg",
      metrics: [
        "Brand Recognition +65%",
        "Cohesive Digital Presence",
        "Modern Design System",
      ],
    },
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
      title: "FoxyBiz Portal",
      slug: "foxybiz",
      description:
        "Designed a standout brand identity for a financial services platform focusing on trust and simplicity",
      image: "/assets/img/foxybiz.svg",
      metrics: [
        "78% Brand Recall",
        "UX Satisfaction 4.7/5",
        "Consistent Cross-platform Experience",
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
