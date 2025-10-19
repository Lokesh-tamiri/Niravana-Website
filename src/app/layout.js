import { Poppins, Nunito_Sans } from "next/font/google";
import Script from "next/script";

// Styles
import "./globals.scss";

// Layout
import Header from "./layouts/Header";
import Footer from "./layouts/Footer";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-poppins",
});
const nunito_sans = Nunito_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700", "900"],
  variable: "--font-nunitosans",
});

export const metadata = {
  title: {
    template: "%s | Niravana Web Innovation",
    default:
      "Niravana Web Innovation - Leading Web Design & Development Agency",
  },
  description:
    "Niravana Web Innovation specializes in cutting-edge web design, mobile app development, AI solutions, and comprehensive branding services. Transform your digital presence with our expert team.",
  keywords: [
    "web development",
    "mobile app development",
    "AI solutions",
    "branding",
    "Next.js",
    "React",
    "UI/UX design",
    "digital marketing",
    "SEO optimization",
  ],
  authors: [{ name: "Niravana Web Innovation" }],
  creator: "Niravana Web Innovation",
  publisher: "Niravana Web Innovation",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("https://www.niravana.in"),
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: "Niravana Web Innovation - Leading Web Design & Development Agency",
    description:
      "Transform your digital presence with expert web development, mobile apps, AI solutions, and comprehensive branding services.",
    url: "https://www.niravana.in",
    siteName: "Niravana Web Innovation",
    images: [
      {
        url: "/assets/img/og-default.jpg",
        width: 1200,
        height: 630,
        alt: "Niravana Web Innovation - Web Development Agency",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Niravana Web Innovation - Leading Web Design & Development Agency",
    description:
      "Transform your digital presence with expert web development, mobile apps, AI solutions, and comprehensive branding services.",
    images: ["/assets/img/og-default.jpg"],
    creator: "@niravana",
  },
  robots: {
    index: true,
    follow: true,
    nocache: true,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
    shortcut: "/favicon.png",
  },
  manifest: "/manifest.json",
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <link rel="icon" href="/favicon.png" sizes="32x32" />
        </head>
        <body className={`${poppins.variable} ${nunito_sans.variable}`}>
          <Script
            src="https://www.googletagmanager.com/gtag/js?id=G-CCPBR741MP"
            strategy="afterInteractive"
          />
          <Script id="google-analytics" strategy="afterInteractive">
            {`
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', 'G-CCPBR741MP');
            `}
          </Script>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
