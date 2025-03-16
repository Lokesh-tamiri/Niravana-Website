import { Poppins, Nunito_Sans } from "next/font/google";

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
};

export default function RootLayout({ children }) {
  return (
    <>
      <html lang="en">
        <head>
          <script
            async
            src="https://www.googletagmanager.com/gtag/js?id=G-CCPBR741MP"
          ></script>
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', 'G-CCPBR741MP');
              `,
            }}
          />
        </head>
        <body className={`${poppins.variable} ${nunito_sans.variable}`}>
          <Header />
          {children}
          <Footer />
        </body>
      </html>
    </>
  );
}
