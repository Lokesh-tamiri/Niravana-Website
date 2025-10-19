export const metadata = {
  title: "Mobile App Development - iOS & Android Solutions",
  description:
    "Professional mobile app development services for iOS and Android. React Native, Flutter development, cross-platform solutions, and native app development for your business needs.",
  keywords: [
    "mobile app development",
    "iOS development",
    "Android development",
    "React Native",
    "Flutter",
    "cross-platform apps",
    "native mobile apps",
  ],
  openGraph: {
    title:
      "Mobile App Development - iOS & Android Solutions | Niravana Web Innovation",
    description:
      "Professional mobile app development services for iOS and Android. React Native, Flutter development, and cross-platform solutions for modern businesses.",
    url: "/mobile-innovations",
    images: [
      {
        url: "/assets/img/mobile-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "Mobile App Development Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title:
      "Mobile App Development - iOS & Android Solutions | Niravana Web Innovation",
    description:
      "Professional mobile app development services for iOS and Android. React Native, Flutter development, and cross-platform solutions for modern businesses.",
    images: ["/assets/img/mobile-services-og.jpg"],
  },
  alternates: {
    canonical: "/mobile-innovations",
  },
};

export default function Layout({ children }) {
  return children;
}
