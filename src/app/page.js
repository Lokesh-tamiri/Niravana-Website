import HomeBanner from "./sections/HomeBanner";
import HomeContact from "./sections/HomeContact";
import HomeFAQpage from "./sections/HomeFAQpage";
import HomeFeatures from "./sections/HomeFeatures";
import HomeSolutions from "./sections/HomeSolutions";
import OurExpertise from "./sections/OurExpertise";
import {
  organizationSchema,
  localBusinessSchema,
  faqSchema,
} from "../components/SEO/structuredData";

export const metadata = {
  title: "Leading Web Development & Digital Innovation Agency",
  description:
    "Niravana Web Innovation delivers cutting-edge web development, mobile apps, AI solutions, and branding services. Transform your business with our expert digital solutions and innovative technologies.",
  keywords: [
    "web development",
    "mobile app development",
    "AI solutions",
    "digital agency",
    "Next.js development",
    "React development",
    "branding services",
    "SEO optimization",
  ],
  openGraph: {
    title:
      "Leading Web Development & Digital Innovation Agency | Niravana Web Innovation",
    description:
      "Transform your business with cutting-edge web development, mobile apps, AI solutions, and branding services. Expert digital innovation for modern businesses.",
    url: "/",
    images: [
      {
        url: "/assets/img/home-og.jpg",
        width: 1200,
        height: 630,
        alt: "Niravana Web Innovation - Digital Solutions",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Leading Web Development & Digital Innovation Agency | Niravana Web Innovation",
    description:
      "Transform your business with cutting-edge web development, mobile apps, AI solutions, and branding services. Expert digital innovation for modern businesses.",
    images: ["/assets/img/home-og.jpg"],
  },
  alternates: {
    canonical: "/",
  },
};

// FAQ data for structured data
const faqData = [
  {
    question:
      "How do you ensure that your services align with our brand identity?",
    answer:
      "Our web design and development process begins with a thorough discovery phase, where we gain insights into your brand's values and vision. We then create a customized design strategy that reflects your brand identity, ensuring a seamless representation throughout the development journey.",
  },
  {
    question: "Can you handle the entire process, from design to deployment?",
    answer:
      "Absolutely! As a full-service IT web design and development agency, we manage every aspect of the process, from initial concept and design to the final deployment. Our experienced team ensures a smooth and efficient development process to bring your website to life.",
  },
  {
    question: "What platforms and technologies do you use for web development?",
    answer:
      "We are proficient in various web development platforms and technologies, including but not limited to HTML, CSS, JavaScript. Our versatility enables us to select the most suitable technology stack for your specific project requirements.",
  },
  {
    question: "How do you optimize websites for mobile devices?",
    answer:
      "Our web design and development process prioritizes mobile responsiveness from the outset. We utilize responsive design principles and conduct rigorous testing on various devices to ensure your website performs flawlessly across smartphones, tablets, and desktops.",
  },
];

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify([
            organizationSchema,
            localBusinessSchema,
            faqSchema(faqData),
          ]),
        }}
      />
      <HomeBanner />
      <HomeFeatures />
      <HomeSolutions />
      <OurExpertise />
      <HomeFAQpage />
      <HomeContact />
    </>
  );
}
