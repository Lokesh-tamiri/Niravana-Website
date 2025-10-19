import AboutBanner from "../sections/AboutBanner";
import AboutHowWeWork from "../sections/AboutHowWeWork";
import AboutOurTeam from "../sections/AboutOurTeam";

export const metadata = {
  title: "About Us - Expert Web Development Team",
  description:
    "Learn about Niravana Web Innovation's expert team specializing in web development, mobile apps, AI solutions, and branding. Discover our mission, values, and commitment to digital excellence.",
  keywords: [
    "about niravana",
    "web development team",
    "digital agency",
    "expert developers",
    "company profile",
  ],
  openGraph: {
    title: "About Us - Expert Web Development Team | Niravana Web Innovation",
    description:
      "Meet the expert team behind Niravana Web Innovation. Specialists in web development, mobile apps, AI solutions, and comprehensive branding services.",
    url: "/about",
    images: [
      {
        url: "/assets/img/team-og.jpg",
        width: 1200,
        height: 630,
        alt: "Niravana Web Innovation Team",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "About Us - Expert Web Development Team | Niravana Web Innovation",
    description:
      "Meet the expert team behind Niravana Web Innovation. Specialists in web development, mobile apps, AI solutions, and comprehensive branding services.",
    images: ["/assets/img/team-og.jpg"],
  },
  alternates: {
    canonical: "/about",
  },
};

const Page = () => {
  return (
    <>
      <AboutBanner />
      <AboutHowWeWork />
      <AboutOurTeam />
    </>
  );
};

export default Page;
