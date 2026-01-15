import Head from "next/head";

interface SEOProps {
  title?: string;
  description?: string;
  image?: string;
  url?: string;
  lang?: string; // "en" or "he"
}

export default function SEOHead({
  title = "LoveAi - Smart Dating for Real Connections",
  description = "LoveAi is an AI-powered dating app that connects you intelligently with compatible partners for genuine relationships.",
  image = "https://www.loveai.co.il/og-image.jpg",
  url = "https://www.loveai.co.il",
  lang = "en",
}: SEOProps) {
  const alternateLang = lang === "en" ? "he" : "en";
  const alternateUrl =
    lang === "en"
      ? "https://www.loveai.co.il/he/"
      : "https://www.loveai.co.il/en/";

  return (
    <Head>
      {/* Basic SEO */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />

      {/* Open Graph */}
      <meta property="og:type" content="website" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
      <meta property="og:url" content={url} />

      {/* Twitter */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      {/* Canonical + hreflang */}
      <link rel="canonical" href={url} />
      <link rel="alternate" hrefLang={lang} href={url} />
      <link rel="alternate" hrefLang={alternateLang} href={alternateUrl} />
      <link rel="alternate" hrefLang="x-default" href="https://www.loveai.co.il/" />
    </Head>
  );
}
