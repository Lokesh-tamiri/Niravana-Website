"use client";
import React from "react";


import HomeFeatures from "../sections/HomeFeatures";
import OurExpertise from "../sections/OurExpertise";
import HomeBanners from "../components/web-innovations/Home";

export default function Page() {
  return (
    <>
      <HomeBanners />
      <HomeFeatures />
      <OurExpertise />
      {/* <HomeFAQpage />
      <HomeContact /> */}
    </>
  )
}