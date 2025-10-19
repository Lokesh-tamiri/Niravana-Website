// SEO Configuration for Next.js App
export const seoConfig = {
  // Default site information
  siteName: "Niravana Web Innovation",
  siteUrl: "https://www.niravana.in",
  siteLogo: "/assets/img/logo.png",
  defaultImage: "/assets/img/og-default.jpg",

  // Company information
  company: {
    name: "Niravana Web Innovation",
    description:
      "Leading web design and development agency specializing in innovative web solutions, mobile apps, AI implementations, and comprehensive branding services.",
    email: "contact@niravana.in",
    phone: "+91-XXX-XXX-XXXX",
    address: {
      street: "",
      city: "",
      region: "",
      postalCode: "",
      country: "India",
    },
    social: {
      twitter: "@niravana",
      linkedin: "https://www.linkedin.com/company/niravana-web-innovation",
      instagram: "https://www.instagram.com/niravana",
      facebook: "",
    },
  },

  // Default meta tags
  defaultMeta: {
    keywords: [
      "web development",
      "mobile app development",
      "AI solutions",
      "digital agency",
      "Next.js development",
      "React development",
      "branding services",
      "SEO optimization",
      "UI/UX design",
      "digital transformation",
    ],
    author: "Niravana Web Innovation",
    robots:
      "index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1",
  },

  // Page-specific configurations
  pages: {
    home: {
      title: "Leading Web Development & Digital Innovation Agency",
      description:
        "Niravana Web Innovation delivers cutting-edge web development, mobile apps, AI solutions, and branding services. Transform your business with our expert digital solutions.",
      keywords: [
        "web development agency",
        "digital innovation",
        "custom web solutions",
      ],
    },
    about: {
      title: "About Us - Expert Web Development Team",
      description:
        "Learn about Niravana Web Innovation's expert team specializing in web development, mobile apps, AI solutions, and branding.",
      keywords: [
        "about niravana",
        "web development team",
        "digital agency team",
      ],
    },
    contact: {
      title: "Contact Us - Get Your Project Started Today",
      description:
        "Ready to transform your digital presence? Contact Niravana Web Innovation for expert consultation on web development, mobile apps, AI solutions.",
      keywords: ["contact niravana", "project consultation", "get quote"],
    },
    work: {
      title: "Our Work - Portfolio of Successful Projects",
      description:
        "Explore Niravana Web Innovation's portfolio showcasing successful web development, mobile app, AI implementation, and branding projects.",
      keywords: ["portfolio", "case studies", "successful projects"],
    },
    services: {
      web: {
        title: "Web Development Services - Custom Web Solutions",
        description:
          "Expert web development services using Next.js, React, and modern technologies. Custom web applications, responsive design, SEO optimization.",
        keywords: [
          "web development",
          "Next.js development",
          "custom web applications",
        ],
      },
      mobile: {
        title: "Mobile App Development - iOS & Android Solutions",
        description:
          "Professional mobile app development services for iOS and Android. React Native, Flutter development, cross-platform solutions.",
        keywords: [
          "mobile app development",
          "iOS development",
          "Android development",
          "React Native",
        ],
      },
      ai: {
        title: "AI Solutions & Machine Learning Services",
        description:
          "Advanced AI solutions and machine learning services. Custom AI models, LLM fine-tuning, automation, chatbots.",
        keywords: [
          "AI solutions",
          "machine learning",
          "LLM fine-tuning",
          "chatbots",
        ],
      },
      branding: {
        title: "Branding & Design Services - Brand Identity Solutions",
        description:
          "Comprehensive branding and design services. Brand strategy, logo design, UI/UX design, style guides.",
        keywords: [
          "branding services",
          "brand identity",
          "logo design",
          "UI/UX design",
        ],
      },
    },
  },
};

// Helper function to generate page metadata
export function generatePageMetadata(pageKey, customData = {}) {
  const config = seoConfig.pages[pageKey] || seoConfig.pages.home;

  return {
    title: customData.title || config.title,
    description: customData.description || config.description,
    keywords: [...(config.keywords || []), ...(customData.keywords || [])],
    openGraph: {
      title: customData.title || config.title,
      description: customData.description || config.description,
      url: customData.url || "/",
      siteName: seoConfig.siteName,
      images: [
        {
          url: customData.image || seoConfig.defaultImage,
          width: 1200,
          height: 630,
          alt: customData.title || config.title,
        },
      ],
      locale: "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: customData.title || config.title,
      description: customData.description || config.description,
      images: [customData.image || seoConfig.defaultImage],
      creator: seoConfig.company.social.twitter,
    },
    robots: seoConfig.defaultMeta.robots,
    authors: [{ name: seoConfig.defaultMeta.author }],
    creator: seoConfig.defaultMeta.author,
    publisher: seoConfig.defaultMeta.author,
  };
}
