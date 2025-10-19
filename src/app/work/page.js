import React from "react";
import WorkBanner from "../sections/WorkBanner";
import WorkList from "../sections/WorkList";

export const metadata = {
  title: "Our Work - Portfolio of Successful Projects",
  description:
    "Explore Niravana Web Innovation's portfolio showcasing successful web development, mobile app, AI implementation, and branding projects. See how we've helped businesses transform digitally.",
  keywords: [
    "portfolio",
    "web development projects",
    "case studies",
    "client work",
    "successful projects",
    "digital transformation",
  ],
  openGraph: {
    title:
      "Our Work - Portfolio of Successful Projects | Niravana Web Innovation",
    description:
      "Explore our portfolio showcasing successful web development, mobile app, AI implementation, and branding projects that have transformed businesses.",
    url: "/work",
    images: [
      {
        url: "/assets/img/portfolio-og.jpg",
        width: 1200,
        height: 630,
        alt: "Niravana Web Innovation Portfolio",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Our Work - Portfolio of Successful Projects | Niravana Web Innovation",
    description:
      "Explore our portfolio showcasing successful web development, mobile app, AI implementation, and branding projects that have transformed businesses.",
    images: ["/assets/img/portfolio-og.jpg"],
  },
  alternates: {
    canonical: "/work",
  },
};

const work = () => {
  return (
    <>
      <WorkBanner />
      <WorkList />
    </>
  );
};

export default work;
