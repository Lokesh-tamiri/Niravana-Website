"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import Bubble from "../Bubble";

const MobileSolutionsBanner = () => {
  return (
    <>
      <section className="py-[240px] relative flex items-center xl:py-[200px] lg:pt-[180px] lg:pb-[100px] sm:pt-[150px]">
        <Bubble
          className="opacity-50"
          style={{
            top: 0,
            left: "auto",
            right: 0,
            "--bubble-bg": "linear-gradient(#261362, #9C27B0)",
          }}
        />
        <Bubble
          className="opacity-50"
          style={{
            top: 300,
            left: -150,
            "--bubble-bg": "linear-gradient(#261362, #9C27B0)",
          }}
        />
        <div className="row justify-center relative z-0 mx-0 w-full">
          <div className="col-xl-7 col-lg-8">
            <div className="text-center relative">
              <span className="inline-block text-[#9C27B0] bg-[rgba(156,39,176,0.1)] px-4 py-2 rounded-full mb-6 font-medium">
                Mobile Solutions
              </span>
              <h1 className="heading-2 font-bold text-white mb-[30px] w-[82%] mx-auto xl:w-full xl:text-[50px] xl:leading-[60px] sm:text-[40px] sm:mb-[30px]">
                Crafting experiences that fit in your palm
              </h1>
              <p className="text-[18px] w-[70%] mx-auto mb-[50px] xl:w-[65%] sm:mb-[30px] sm:w-[80%] xs:w-full">
                We design and build mobile-first experiences tailored to
                performance and usability. From native to hybrid apps, we manage
                everything from development to deployment, branding, and
                automation to accelerate releases.
              </p>
              <MagneticButton buttonClass="bg-[#9C27B0] py-[20px] px-[55px] rounded-[35px]">
                <Link href="/contact" className="text font-poppins">
                  Contact Us
                </Link>
              </MagneticButton>
            </div>
          </div>
        </div>
        <div className="absolute bottom-[50px] left-[10%] z-[1] lg:hidden">
          <div className="bg-[#1a1a1a]/30 backdrop-blur-lg p-6 rounded-2xl border border-white/10 w-[200px]">
            <div className="flex space-x-3 mb-3">
              <div className="w-3 h-3 rounded-full bg-[#9C27B0]"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
              <div className="w-3 h-3 rounded-full bg-white/30"></div>
            </div>
            <div className="bg-white/5 rounded-lg p-3 border border-white/10 mb-3">
              <div className="w-full h-32 rounded-md bg-gradient-to-b from-purple-500/20 to-transparent"></div>
            </div>
            <div className="flex space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full border border-white/10"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full border border-white/10"></div>
              <div className="w-8 h-8 bg-gradient-to-br from-purple-500/20 to-transparent rounded-full border border-white/10"></div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default MobileSolutionsBanner;
