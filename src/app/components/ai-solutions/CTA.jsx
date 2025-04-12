"use client";
import React from "react";
import Link from "next/link";
import MagneticButton from "../MagneticButton";
import GsapAnimation from "../Gsap";
import { Power3 } from "gsap";

const AICTA = () => {
  return (
    <section className="py-[100px] lg:py-[80px] sm:py-[60px]">
      <div className="container">
        <div className="row justify-center mx-0">
          <GsapAnimation
            animation={{
              opacity: 1,
              duration: 1,
              ease: Power3.easeInOut,
            }}
            className="text-center rounded-[60px] bg-gradient-to-br from-[#00BCD4] to-[#261362] py-[80px] px-[50px] opacity-0 lg:px-[30px] sm:py-[50px] sm:px-[25px]"
          >
            <div className="relative">
              <div className="absolute top-[-50px] left-1/2 transform -translate-x-1/2 w-20 h-1 bg-white/30"></div>

              <h2 className="heading-3 font-poppins text-white font-semibold mb-[15px]">
                Scale your operations intelligently
              </h2>

              <p className="mb-[35px] text-white/80 max-w-2xl mx-auto">
                Ready to transform your business with AI-powered automation? Let
                our team help you build intelligent systems that scale.
              </p>

              <div className="flex flex-col items-center justify-center">
                <MagneticButton buttonClass="bg-white py-[20px] px-[55px] rounded-[35px] mb-6">
                  <Link
                    href="/contact"
                    className="text text-[18px] font-poppins text-gray-900"
                  >
                    Start a project
                  </Link>
                </MagneticButton>

                <a
                  href="mailto:operations@niravana.in"
                  className="text-white hover:text-white/80 transition-all duration-300"
                >
                  operations@niravana.in
                </a>
              </div>
            </div>
          </GsapAnimation>
        </div>
      </div>
    </section>
  );
};

export default AICTA;
