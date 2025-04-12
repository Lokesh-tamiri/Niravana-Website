"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import GsapAnimation from "../components/Gsap";
import { Power3 } from "gsap";
import MagneticButton from "../components/MagneticButton";

const HomeSolutions = () => {
  const solutions = [
    {
      title: "Web Solutions",
      description:
        "We craft engaging, high-performance websites and web applications using Next.js, React, and Tailwind CSS that adapt seamlessly to any device. Our backend expertise with Node.js, NestJS, and Django creates robust, scalable architectures that handle growing traffic while maintaining security and performance. From e-commerce platforms to custom applications, we deliver digital experiences that convert visitors into customers through strategic SEO implementation and conversion-focused design.",
      icon: "/assets/icons/web-solution.svg",
      color: "99,91,255", // #635BFF
      gradientFrom: "#635BFF",
      gradientTo: "#261362",
      route: "/web-innovations",
      features: ["Next.js, React, Tailwind", "Node.js, NestJS, Django"],
    },
    {
      title: "Mobile Solutions",
      description:
        "We design and build exceptional mobile applications for iOS and Android using React Native and Flutter, creating seamless user experiences with intuitive interfaces and responsive designs. Our mobile solutions are powered by robust backend systems using Firebase and FastAPI for real-time data synchronization, secure authentication, and reliable cloud storage. From concept to app store deployment, our comprehensive approach ensures applications that perform flawlessly at any scale.",
      icon: "/assets/icons/mobile-solution.svg",
      color: "61,218,132", // #3DDA84
      gradientFrom: "#3DDA84",
      gradientTo: "#109B55",
      route: "/mobile-innovations",
      features: ["React Native, Flutter", "Firebase, FastAPI"],
    },
    {
      title: "AI Solutions",
      description:
        "Our AI expertise spans machine learning, natural language processing, computer vision, and predictive analytics. We specialize in developing custom AI models that deliver tangible business value through automation and intelligent insights. Our team excels in fine-tuning generative AI models and large language models (LLMs) to align with your specific needs. We build complete AI systems that integrate with your existing processes, supported by meticulous data processing for reliable real-world performance.",
      icon: "/assets/icons/ai-solution.svg",
      color: "162,89,255", // #A259FF
      gradientFrom: "#A259FF",
      gradientTo: "#570AB8",
      route: "/ai-innovations",
      features: ["Generative AI Models", "LLM fine-tuning, AI Agents"],
    },
    {
      title: "Branding Solutions",
      description:
        "We elevate your brand through compelling visual narratives and cohesive experiences that establish lasting connections with your audience. Our branding begins with discovering your unique values and competitive advantages to create authentic identities. Our designers craft stunning visual systems using Adobe Creative Suite and Figma that communicate your brand's personality instantly. We extend beyond visuals to develop comprehensive voice, messaging frameworks, and content strategies that ensure consistent, compelling communication across all channels.",
      icon: "/assets/icons/branding-solution.svg",
      color: "255,87,34", // #FF5722
      gradientFrom: "#FF5722",
      gradientTo: "#B92500",
      route: "/branding-innovations",
      features: ["Figma, Adobe Suite", "Webflow, Canva"],
    },
  ];

  return (
    <section className="py-[100px] lg:py-[80px] md:py-[60px] sm:py-[50px] relative">
      <div className="container">
        <GsapAnimation
          as="div"
          className="text-center mb-[60px] md:mb-[40px] opacity-0"
          animation={{
            opacity: 1,
            y: 0,
            duration: 1,
            ease: Power3.easeOut,
            from: { opacity: 0, y: 20 },
          }}
        >
          <h2 className="heading-3 text-white font-semibold mb-[20px]">
            Our Solutions
          </h2>
          <p className="text-xl text-white/80 max-w-[700px] mx-auto">
            End-to-end digital solutions tailored to transform your business and
            drive growth
          </p>
        </GsapAnimation>

        <div className="grid sm:grid-cols-1 grid-cols-2 gap-8 md:gap-6 lg:gap-8">
          {solutions.map((solution, i) => (
            <GsapAnimation
              key={i}
              className="bg-[linear-gradient(135deg,rgba(216,216,216,0.1),transparent)] backdrop-blur-sm border border-white/10 rounded-[24px] p-7 md:p-6 lg:p-7 group hover:bg-[linear-gradient(135deg,rgba(216,216,216,0.15),transparent)] transition-all duration-300 opacity-0"
              animation={{
                opacity: 1,
                y: 0,
                duration: 0.8,
                delay: i * 0.15,
                ease: Power3.easeOut,
                from: { opacity: 0, y: 30 },
              }}
            >
              <div className="flex flex-col h-full">
                <div className="mb-6">
                  <div
                    className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                    style={{
                      background: `linear-gradient(135deg, ${solution.gradientFrom}, ${solution.gradientTo})`,
                      boxShadow: `0 10px 20px rgba(${solution.color}, 0.3)`,
                    }}
                  >
                    <Image
                      src={solution.icon}
                      width={32}
                      height={32}
                      alt={solution.title}
                      className="text-white"
                    />
                  </div>
                  <h3 className="text-2xl text-white font-semibold mb-3">
                    {solution.title}
                  </h3>

                  <p className="text-white/80 mb-5 leading-relaxed text-sm">
                    {solution.description}
                  </p>
                </div>

                <div className="mt-auto">
                  <div className="mb-5">
                    <div className="flex flex-wrap gap-2">
                      {solution.features.map((feature, j) => (
                        <span
                          key={j}
                          className="inline-block px-3 py-1.5 rounded-full text-xs bg-gradient-to-r shadow-md backdrop-blur-sm border border-white/10 transition-all duration-300"
                          style={{
                            backgroundImage: `linear-gradient(135deg, rgba(${solution.color},0.4), rgba(${solution.color},0.1))`,
                          }}
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>

                  <MagneticButton
                    buttonClass="py-[10px] px-[20px] rounded-[25px] group-hover:scale-105 transition-all duration-300"
                    style={{
                      background: `linear-gradient(135deg, ${solution.gradientFrom}, ${solution.gradientTo})`,
                      boxShadow: `0 8px 15px rgba(${solution.color}, 0.3)`,
                    }}
                  >
                    <Link
                      href={solution.route}
                      className="text-white text-sm font-medium flex items-center"
                    >
                      Explore {solution.title.split(" ")[0]}
                      <svg
                        className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M5 12H19M19 12L12 5M19 12L12 19"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </MagneticButton>
                </div>
              </div>
            </GsapAnimation>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HomeSolutions;
