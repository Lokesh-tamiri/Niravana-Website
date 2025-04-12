"use client";
import React from "react";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";
import WorkCarousel from "../WorkCarousel";

const WebExpertise = () => {
  const expertiseItems = [
    "Next.js, React, Tailwind",
    "Node.js, NestJS, Django",
    "AWS, Firebase, Vercel",
    "SEO & Analytics Setup",
  ];

  const webWorks = [
    {
      title: "Wyra - B2B Platform",
      slug: "wyra",
      description:
        "Redesigned Wyra's frontend with a modern UI and optimized API connectivity for faster data retrieval",
      image: "/assets/img/wyra.webp",
      url: "https://wyra.ai/",
      metrics: [
        "60% Faster Load Time",
        "45% Conversion Increase",
        "100k+ Monthly Users",
      ],
    },
    {
      title: "AxisB - Corporate Site",
      slug: "axisb",
      description:
        "Built a responsive, SEO-optimized corporate website with interactive elements and integrated CMS",
      image: "/assets/img/axisb.webp",
      url: "https://www.axisbinc.com/",
      metrics: [
        "Top 3 SERP Rankings",
        "85% Mobile Traffic",
        "2.5x Lead Generation",
      ],
    },
    {
      title: "Heartcare4life",
      slug: "heartcare4life",
      description:
        "Created a medical appointment system with secure patient portal and integrated payment gateway",
      image: "/assets/img/heartcare4life.webp",
      url: "https://heartcare4life.com/",
      metrics: ["99.9% Uptime", "15k+ Monthly Bookings", "HIPAA Compliant"],
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#3366FF]/20 mr-5">
                    <div className="w-3 h-3 rounded-full bg-[#3366FF]"></div>
                  </div>
                  <p className="text-lg text-white font-medium">{item}</p>
                </GsapAnimation>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mt-10 lg:mt-0">
            <WorkCarousel works={webWorks} accentColor="51,102,255" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default WebExpertise;