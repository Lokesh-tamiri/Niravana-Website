// Structured Data schemas for SEO

export const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Niravana Web Innovation",
  description:
    "Leading web design and development agency specializing in innovative web solutions, mobile apps, AI implementations, and comprehensive branding services.",
  url: "https://www.niravana.in",
  logo: "https://www.niravana.in/assets/img/logo.png",
  foundingDate: "2020",
  founders: [
    {
      "@type": "Person",
      name: "Lokesh Sai Tamiri",
      jobTitle: "Founder & Director",
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  contactPoint: {
    "@type": "ContactPoint",
    telephone: "+91-XXX-XXX-XXXX",
    contactType: "customer service",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://www.linkedin.com/company/niravana-web-innovation",
    "https://twitter.com/niravana",
  ],
  services: [
    "Web Development",
    "Mobile App Development",
    "AI Solutions",
    "Branding & Design",
    "SEO Optimization",
  ],
};

export const webPageSchema = (pageData) => ({
  "@context": "https://schema.org",
  "@type": "WebPage",
  name: pageData.title,
  description: pageData.description,
  url: pageData.url,
  mainEntity: {
    "@type": "Organization",
    name: "Niravana Web Innovation",
  },
  breadcrumb: pageData.breadcrumb,
  dateModified: new Date().toISOString(),
  author: {
    "@type": "Organization",
    name: "Niravana Web Innovation",
  },
});

export const serviceSchema = (service) => ({
  "@context": "https://schema.org",
  "@type": "Service",
  name: service.name,
  description: service.description,
  provider: {
    "@type": "Organization",
    name: "Niravana Web Innovation",
    url: "https://www.niravana.in",
  },
  serviceType: service.type,
  offers: {
    "@type": "Offer",
    availability: "https://schema.org/InStock",
    priceRange: service.priceRange || "$$$",
  },
});

export const portfolioSchema = (project) => ({
  "@context": "https://schema.org",
  "@type": "CreativeWork",
  name: project.title,
  description: project.description,
  url: project.url,
  image: project.image,
  creator: {
    "@type": "Organization",
    name: "Niravana Web Innovation",
  },
  dateCreated: project.dateCreated,
  genre: project.category,
});

export const breadcrumbSchema = (items) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((item, index) => ({
    "@type": "ListItem",
    position: index + 1,
    name: item.name,
    item: item.url,
  })),
});

export const faqSchema = (faqs) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((faq) => ({
    "@type": "Question",
    name: faq.question,
    acceptedAnswer: {
      "@type": "Answer",
      text: faq.answer,
    },
  })),
});

export const localBusinessSchema = {
  "@context": "https://schema.org",
  "@type": "ProfessionalService",
  name: "Niravana Web Innovation",
  description: "Professional web development and digital services agency",
  url: "https://www.niravana.in",
  telephone: "+91-XXX-XXX-XXXX",
  address: {
    "@type": "PostalAddress",
    addressCountry: "IN",
  },
  geo: {
    "@type": "GeoCoordinates",
    latitude: "17.3850",
    longitude: "78.4867",
  },
  openingHours: "Mo-Fr 09:00-18:00",
  priceRange: "$$$",
  serviceArea: {
    "@type": "Country",
    name: "Global",
  },
};
