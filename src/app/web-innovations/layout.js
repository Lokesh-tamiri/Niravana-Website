export const metadata = {
  title: "Web Development Services - Custom Web Solutions",
  description:
    "Expert web development services using Next.js, React, and modern technologies. Custom web applications, responsive design, SEO optimization, and scalable solutions for your business.",
  keywords: [
    "web development",
    "Next.js development",
    "React development",
    "custom web applications",
    "responsive design",
    "full-stack development",
    "SEO optimization",
  ],
  openGraph: {
    title:
      "Web Development Services - Custom Web Solutions | Niravana Web Innovation",
    description:
      "Expert web development services using Next.js, React, and modern technologies. Custom web applications, responsive design, and scalable solutions.",
    url: "/web-innovations",
    images: [
      {
        url: "/assets/img/web-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Web Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Web Development Services - Custom Web Solutions | Niravana Web Innovation",
    description:
      "Expert web development services using Next.js, React, and modern technologies. Custom web applications, responsive design, and scalable solutions.",
    images: ["/assets/img/web-services-og.jpg"],
  },
  alternates: {
    canonical: "/web-innovations",
  },
};

export default function Layout({ children }) {
  return children;
}
