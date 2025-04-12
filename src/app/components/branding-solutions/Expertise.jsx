"use client";
import React from "react";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";

const BrandingExpertise = () => {
  const expertiseItems = [
    "Figma, Adobe Suite",
    "Webflow, Canva",
    "Tailwind UI Customization",
    "Conversion-Oriented Design",
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
            <GsapAnimation
              className="bg-[linear-gradient(135deg,rgba(255,87,34,0.1),transparent)] rounded-[20px] p-10 backdrop-blur-md border border-white/10 h-full opacity-0 flex items-center justify-center"
              animation={{
                opacity: 1,
                scale: 1,
                duration: 1,
                delay: 0.3,
                ease: Power3.easeOut,
                from: { opacity: 0, scale: 0.9 },
              }}
            >
              <div className="text-center">
                <div className="mb-6 inline-block relative">
                  <div className="absolute inset-0 bg-[#FF5722] blur-xl opacity-20 rounded-full"></div>
                  <div className="relative z-10 w-20 h-20 rounded-full bg-gradient-to-br from-[#FF5722] to-[#261362] flex items-center justify-center">
                    <span className="text-2xl font-bold text-white">Brand</span>
                  </div>
                </div>
                <h3 className="text-2xl text-white font-semibold mb-4">
                  Work Showcase
                </h3>
                <div className="grid grid-cols-3 gap-4">
                  {[
                    "Niravana Identity",
                    "Eficiens Systems",
                    "Harika UX Branding",
                  ].map((work, i) => (
                    <div
                      key={i}
                      className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-lg p-4 hover:bg-white/10 transition-all duration-300"
                    >
                      <p className="text-white">{work}</p>
                    </div>
                  ))}
                </div>
              </div>
            </GsapAnimation>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BrandingExpertise;
