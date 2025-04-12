"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import Bubble from "../Bubble";

const BrandingSolutionsBanner = () => {
  return (
    <>
      <section className="py-[240px] relative flex items-center xl:py-[200px] lg:pt-[180px] lg:pb-[100px] sm:pt-[150px]">
        <Bubble
          className="opacity-50"
          style={{
            top: 0,
            left: "auto",
            right: 0,
            "--bubble-bg": "linear-gradient(#261362, #FF5722)",
          }}
        />
        <Bubble
          className="opacity-50"
          style={{
            top: 300,
            left: -150,
            "--bubble-bg": "linear-gradient(#261362, #FF5722)",
          }}
        />
        <div className="row justify-center relative z-0 mx-0 w-full">
          <div className="col-xl-7 col-lg-8">
            <div className="text-center relative">
              <span className="inline-block text-[#FF5722] bg-[rgba(255,87,34,0.1)] px-4 py-2 rounded-full mb-6 font-medium">
                Branding Solutions
              </span>
              <h1 className="heading-2 font-bold text-white mb-[30px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[30px]">
                Turn ideas into powerful brand identities
              </h1>
              <p className="text-[18px] w-[70%] mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full">
                We craft consistent digital identities through thoughtful UI/UX
                design, storytelling, and strategic positioning. From product
                branding to visual content creation, our team ensures your brand
                communicates effectively across all platforms.
              </p>
              <MagneticButton buttonClass="bg-[#FF5722] py-[20px] px-[55px] rounded-[35px]">
                <Link href="/contact" className="text font-poppins">
                  Contact Us
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[75px] left-[10%] z-[1] lg:hidden">
          <div className="bg-[#1a1a1a]/30 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3 mb-6">
              <div className="w-3 h-3 rounded-full bg-[#FF5722]"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            <div className="grid grid-cols-2 gap-4 w-[280px]">
              <div className="h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="w-8 h-8 rounded-full bg-[#FF5722]/20"></div>
              </div>
              <div className="h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="w-10 h-[2px] bg-[#FF5722]/40"></div>
              </div>
              <div className="h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="w-10 h-10 rounded-md bg-gradient-to-br from-[#FF5722]/20 to-transparent"></div>
              </div>
              <div className="h-16 bg-white/5 rounded-lg flex items-center justify-center border border-white/10">
                <div className="w-8 h-8 rounded-full border-2 border-[#FF5722]/40"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default BrandingSolutionsBanner;
