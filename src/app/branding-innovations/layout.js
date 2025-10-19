export const metadata = {
  title: "Branding & Design Services - Brand Identity Solutions",
  description:
    "Comprehensive branding and design services. Brand strategy, logo design, UI/UX design, style guides, and visual identity solutions to elevate your business presence.",
  keywords: [
    "branding services",
    "brand identity",
    "logo design",
    "UI/UX design",
    "brand strategy",
    "visual identity",
    "style guides",
    "graphic design",
  ],
  openGraph: {
    title:
      "Branding & Design Services - Brand Identity Solutions | Niravana Web Innovation",
    description:
      "Comprehensive branding and design services. Brand strategy, logo design, UI/UX design, and visual identity solutions to elevate your business.",
    url: "/branding-innovations",
    images: [
      {
        url: "/assets/img/branding-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Branding and Design Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Branding & Design Services - Brand Identity Solutions | Niravana Web Innovation",
    description:
      "Comprehensive branding and design services. Brand strategy, logo design, UI/UX design, and visual identity solutions to elevate your business.",
    images: ["/assets/img/branding-services-og.jpg"],
  },
  alternates: {
    canonical: "/branding-innovations",
  },
};

export default function Layout({ children }) {
  return children;
}
