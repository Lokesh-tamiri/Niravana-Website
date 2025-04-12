"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import Bubble from "../Bubble";

const AISolutionsBanner = () => {
  return (
    <>
      <section className="py-[240px] relative flex items-center xl:py-[200px] lg:pt-[180px] lg:pb-[100px] sm:pt-[150px]">
        <Bubble
          className="opacity-50"
          style={{
            top: 0,
            left: "auto",
            right: 0,
            "--bubble-bg": "linear-gradient(#261362, #00BCD4)",
          }}
        />
        <Bubble
          className="opacity-50"
          style={{
            top: 300,
            left: -150,
            "--bubble-bg": "linear-gradient(#261362, #00BCD4)",
          }}
        />
        <div className="row justify-center relative z-0 mx-0 w-full">
          <div className="col-xl-7 col-lg-8">
            <div className="text-center relative">
              <span className="inline-block text-[#00BCD4] bg-[rgba(0,188,212,0.1)] px-4 py-2 rounded-full mb-6 font-medium">
                AI / Automation Solutions
              </span>
              <h1 className="heading-2 font-bold text-white mb-[30px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[30px]">
                Automate your growth with intelligent systems
              </h1>
              <p className="text-[18px] w-[70%] mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full">
                Our AI-first approach integrates automation across web and
                mobile apps. We build scalable systems using intelligent
                workflows—helping reduce operational overhead, increase
                accuracy, and create smarter user interactions.
              </p>
              <MagneticButton buttonClass="bg-[#00BCD4] py-[20px] px-[55px] rounded-[35px]">
                <Link href="/contact" className="text font-poppins">
                  Contact Us
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
        <div className="absolute top-[150px] right-[10%] z-[1] lg:hidden">
          <div className="bg-[#1a1a1a]/30 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#00BCD4]"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#00BCD4]/20 to-transparent flex items-center justify-center border border-white/10">
                <div className="w-4 h-4 bg-[#00BCD4]/40 rounded-full"></div>
              </div>
              <div className="flex-1 h-4 bg-gray-700/50 rounded-md overflow-hidden">
                <div className="w-[60%] h-full bg-gradient-to-r from-[#00BCD4]/50 to-[#00BCD4]/20"></div>
              </div>
            </div>
            <div className="grid grid-cols-2 gap-3">
              <div className="col-span-2 h-16 bg-gradient-to-br from-[#00BCD4]/20 to-transparent rounded-lg border border-white/10 flex items-center justify-center">
                <div className="grid grid-cols-3 w-full px-3 gap-1">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="h-2 bg-white/20 rounded-full"></div>
                  ))}
                </div>
              </div>
              <div className="h-16 bg-gradient-to-br from-[#00BCD4]/20 to-transparent rounded-lg border border-white/10"></div>
              <div className="h-16 bg-gradient-to-br from-[#00BCD4]/20 to-transparent rounded-lg border border-white/10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default AISolutionsBanner;
