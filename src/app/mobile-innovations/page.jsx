"use client";
import React from "react";
import MobileSolutionsBanner from "../components/mobile-solutions/Banner";
import MobileCapabilities from "../components/mobile-solutions/Capabilities";
import MobileExpertise from "../components/mobile-solutions/Expertise";
import MobileCTA from "../components/mobile-solutions/CTA";

export default function Page() {
  return (
    <>
      <MobileSolutionsBanner />
      <MobileCapabilities />
      <MobileExpertise />
      <MobileCTA />
    </>
  );
}
