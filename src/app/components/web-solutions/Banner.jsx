"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import Bubble from "../Bubble";

const WebSolutionsBanner = () => {
  return (
    <>
      <section className="py-[240px] relative flex items-center xl:py-[200px] lg:pt-[180px] lg:pb-[100px] sm:pt-[150px]">
        <Bubble
          className="opacity-50"
          style={{
            top: 0,
            left: "auto",
            right: 0,
            "--bubble-bg": "linear-gradient(#261362, #3366FF)",
          }}
        />
        <Bubble
          className="opacity-50"
          style={{
            top: 300,
            left: -150,
            "--bubble-bg": "linear-gradient(#261362, #3366FF)",
          }}
        />
        <div className="row justify-center relative z-0 mx-0 w-full">
          <div className="col-xl-7 col-lg-8">
            <div className="text-center relative">
              <span className="inline-block text-[#3366FF] bg-[rgba(51,102,255,0.1)] px-4 py-2 rounded-full mb-6 font-medium">
                Web Solutions
              </span>
              <h1 className="heading-2 font-bold text-white mb-[30px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[30px]">
                Build scalable web platforms with precision
              </h1>
              <p className="text-[18px] w-[70%] mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full">
                Our expert team delivers comprehensive web-based solutions—from
                frontend to backend. We help deploy and scale applications, add
                branding layers, and integrate automation to ensure long-term
                sustainability and growth.
              </p>
              <MagneticButton buttonClass="bg-[#3366FF] py-[20px] px-[55px] rounded-[35px]">
                <Link href="/contact" className="text font-poppins">
                  Contact Us
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[50px] right-[10%] z-[1] lg:hidden">
          <div className="bg-[#1a1a1a]/30 backdrop-blur-lg p-6 rounded-2xl border border-white/10">
            <div className="flex items-center space-x-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#3366FF]"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            <div className="grid grid-cols-3 gap-3 w-[300px]">
              <div className="h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg border border-white/10"></div>
              <div className="h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg border border-white/10"></div>
              <div className="h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg border border-white/10"></div>
              <div className="h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg border border-white/10 col-span-2"></div>
              <div className="h-20 bg-gradient-to-br from-blue-500/20 to-transparent rounded-lg border border-white/10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default WebSolutionsBanner;
