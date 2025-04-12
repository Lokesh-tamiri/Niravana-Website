"use client";
import React from "react";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";
import WorkCarousel from "../WorkCarousel";

const MobileExpertise = () => {
  const expertiseItems = [
    "React Native, Flutter",
    "Firebase, FastAPI",
    "Play Store & App Store Publishing",
    "App Monitoring & Scaling",
  ];

  const mobileWorks = [
    {
      title: "CareFy - Virtual Assistant",
      slug: "carefy",
      description:
        "Developed a healthcare virtual assistant app with personalized reminders and telemedicine integration",
      image: "/assets/img/carefy.webp",
      url: "https://carefyinc.com/",
      metrics: ["95% User Retention", "4.8 App Store Rating", "50k+ Downloads"],
    },
    {
      title: "Grofery - Grocery App",
      slug: "grofery",
      description:
        "Built a feature-rich grocery delivery app with real-time tracking and payment processing",
      image: "/assets/img/grofery.webp",
      url: "https://grofery.com/",
      metrics: ["30min Average Delivery", "75% Repeat Orders", "100k+ Users"],
    },
    // {
    //   title: "ChatPDF - Document Assistant",
    //   slug: "chatpdf",
    //   description:
    //     "Created an AI-powered mobile app for chatting with PDF documents and extracting insights",
    //   image: "/assets/img/chatpdf.webp",
    //   url: "https://chatpdf.com/",
    //   metrics: [
    //     "200k+ Documents Processed",
    //     "60% Time Savings",
    //     "Enterprise Adoption",
    //   ],
    // },
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
                  <div className="w-12 h-12 flex items-center justify-center rounded-full bg-[#9C27B0]/20 mr-5">
                    <div className="w-3 h-3 rounded-full bg-[#9C27B0]"></div>
                  </div>
                  <p className="text-lg text-white font-medium">{item}</p>
                </GsapAnimation>
              ))}
            </div>
          </div>

          <div className="col-lg-6 mt-10 lg:mt-0">
            <WorkCarousel works={mobileWorks} accentColor="156,39,176" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default MobileExpertise;