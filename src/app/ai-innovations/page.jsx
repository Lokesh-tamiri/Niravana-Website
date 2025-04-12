"use client";
import React from "react";
import AISolutionsBanner from "../components/ai-solutions/Banner";
import AICapabilities from "../components/ai-solutions/Capabilities";
import AIExpertise from "../components/ai-solutions/Expertise";
import AICTA from "../components/ai-solutions/CTA";

export default function Page() {
  return (
    <>
      <AISolutionsBanner />
      <AICapabilities />
      <AIExpertise />
      <AICTA />
    </>
  );
}
