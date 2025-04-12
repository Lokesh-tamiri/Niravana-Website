"use client";
import React from "react";
import WebSolutionsBanner from "../components/web-solutions/Banner";
import WebCapabilities from "../components/web-solutions/Capabilities";
import WebExpertise from "../components/web-solutions/Expertise";
import WebCTA from "../components/web-solutions/CTA";

export default function Page() {
  return (
    <>
      <WebSolutionsBanner />
      <WebCapabilities />
      <WebExpertise />
      <WebCTA />
    </>
  );
}
