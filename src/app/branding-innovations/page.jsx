"use client";
import React from "react";
import BrandingSolutionsBanner from "../components/branding-solutions/Banner";
import BrandingCapabilities from "../components/branding-solutions/Capabilities";
import BrandingExpertise from "../components/branding-solutions/Expertise";
import BrandingCTA from "../components/branding-solutions/CTA";

export default function Page() {
  return (
    <>
      <BrandingSolutionsBanner />
      <BrandingCapabilities />
      <BrandingExpertise />
      <BrandingCTA />
    </>
  );
}
