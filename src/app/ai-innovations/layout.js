export const metadata = {
  title: "AI Solutions & Machine Learning Services",
  description:
    "Advanced AI solutions and machine learning services. Custom AI models, LLM fine-tuning, automation, chatbots, and intelligent systems to transform your business operations.",
  keywords: [
    "AI solutions",
    "machine learning",
    "artificial intelligence",
    "LLM fine-tuning",
    "AI automation",
    "chatbots",
    "generative AI",
    "custom AI models",
  ],
  openGraph: {
    title: "AI Solutions & Machine Learning Services | Niravana Web Innovation",
    description:
      "Advanced AI solutions and machine learning services. Custom AI models, LLM fine-tuning, automation, and intelligent systems for business transformation.",
    url: "/ai-innovations",
    images: [
      {
        url: "/assets/img/ai-services-og.jpg",
        width: 1200,
        height: 630,
        alt: "AI Solutions and Machine Learning Services",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Solutions & Machine Learning Services | Niravana Web Innovation",
    description:
      "Advanced AI solutions and machine learning services. Custom AI models, LLM fine-tuning, automation, and intelligent systems for business transformation.",
    images: ["/assets/img/ai-services-og.jpg"],
  },
  alternates: {
    canonical: "/ai-innovations",
  },
};

export default function Layout({ children }) {
  return children;
}
