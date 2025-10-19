import Contact from "../sections/Contact";

export const metadata = {
  title: "Contact Us - Get Your Project Started Today",
  description:
    "Ready to transform your digital presence? Contact Niravana Web Innovation for expert web development, mobile app development, AI solutions, and branding services. Free consultation available.",
  keywords: [
    "contact niravana",
    "web development consultation",
    "project inquiry",
    "digital agency contact",
    "get quote",
  ],
  openGraph: {
    title:
      "Contact Us - Get Your Project Started Today | Niravana Web Innovation",
    description:
      "Ready to transform your digital presence? Contact Niravana Web Innovation for expert consultation on web development, mobile apps, AI solutions, and branding.",
    url: "/contact",
    images: [
      {
        url: "/assets/img/contact-og.jpg",
        width: 1200,
        height: 630,
        alt: "Contact Niravana Web Innovation",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Contact Us - Get Your Project Started Today | Niravana Web Innovation",
    description:
      "Ready to transform your digital presence? Contact Niravana Web Innovation for expert consultation on web development, mobile apps, AI solutions, and branding.",
    images: ["/assets/img/contact-og.jpg"],
  },
  alternates: {
    canonical: "/contact",
  },
};

const Page = () => {
  return <Contact />;
};

export default Page;
