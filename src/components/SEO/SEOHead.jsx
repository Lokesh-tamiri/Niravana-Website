import Head from "next/head";

export default function SEOHead({
  title,
  description,
  keywords,
  ogImage = "/assets/img/og-default.jpg",
  url,
  type = "website",
  noindex = false,
  canonical,
  structuredData,
}) {
  const siteTitle = "Niravana Web Innovation";
  const siteDescription =
    "Leading web design and development agency specializing in innovative web solutions, mobile apps, AI implementations, and comprehensive branding services.";
  const siteDomain = "https://www.niravana.in";

  const fullTitle = title ? `${title} | ${siteTitle}` : siteTitle;
  const metaDescription = description || siteDescription;
  const pageUrl = url ? `${siteDomain}${url}` : siteDomain;
  const canonicalUrl = canonical || pageUrl;

  return (
    <Head>
      {/* Basic Meta Tags */}
      <title>{fullTitle}</title>
      <meta name="description" content={metaDescription} />
      {keywords && <meta name="keywords" content={keywords} />}
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <meta httpEquiv="Content-Type" content="text/html; charset=utf-8" />

      {/* Canonical URL */}
      <link rel="canonical" href={canonicalUrl} />

      {/* Robots */}
      {noindex ? (
        <meta name="robots" content="noindex, nofollow" />
      ) : (
        <meta
          name="robots"
          content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1"
        />
      )}

      {/* Open Graph Tags */}
      <meta property="og:title" content={fullTitle} />
      <meta property="og:description" content={metaDescription} />
      <meta property="og:type" content={type} />
      <meta property="og:url" content={pageUrl} />
      <meta property="og:image" content={`${siteDomain}${ogImage}`} />
      <meta property="og:image:width" content="1200" />
      <meta property="og:image:height" content="630" />
      <meta property="og:site_name" content={siteTitle} />
      <meta property="og:locale" content="en_US" />

      {/* Twitter Card Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={fullTitle} />
      <meta name="twitter:description" content={metaDescription} />
      <meta name="twitter:image" content={`${siteDomain}${ogImage}`} />
      <meta name="twitter:site" content="@niravana" />
      <meta name="twitter:creator" content="@niravana" />

      {/* Additional Meta Tags */}
      <meta name="author" content="Niravana Web Innovation" />
      <meta name="theme-color" content="#261362" />
      <meta name="msapplication-TileColor" content="#261362" />

      {/* Structured Data */}
      {structuredData && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      )}
    </Head>
  );
}
