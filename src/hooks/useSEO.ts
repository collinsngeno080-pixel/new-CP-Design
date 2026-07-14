import { useEffect } from 'react';
import { updateSEO, addStructuredData } from '@/lib/seo';

interface SEOConfig {
  title: string;
  description: string;
  canonical: string;
  ogImage?: string;
  ogType?: string;
  twitterCard?: string;
  keywords?: string;
}

/**
 * Custom hook for managing SEO meta tags and structured data
 * @param config - SEO configuration object
 * @param structuredData - Optional structured data (JSON-LD) to add to the page
 */
export function useSEO(config: SEOConfig, structuredData?: object) {
  useEffect(() => {
    // Update SEO meta tags
    updateSEO(config);

    // Add structured data if provided
    if (structuredData) {
      addStructuredData(structuredData);
    }
  }, [config, structuredData]);
}

/**
 * Creates a WebPage structured data object
 */
export function createWebPageSchema(config: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "WebPage",
    name: config.name,
    description: config.description,
    url: config.url,
  };
}

/**
 * Creates a BreadcrumbList structured data object
 */
export function createBreadcrumbSchema(items: Array<{ name: string; url: string }>) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: item.url,
    })),
  };
}

/**
 * Creates a ContactPage structured data object
 */
export function createContactPageSchema(config: {
  name: string;
  description: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: config.name,
    description: config.description,
    url: config.url,
  };
}
