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
    default: "Niravana Web Innovation", // a default is required when creating a template
  },
  description: "Innovative web design and development agency",
  icons: {
    icon: "/favicon.png",
    apple: "/favicon.png",
  },
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
