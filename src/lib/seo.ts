/**
 * SEO utility functions for updating meta tags dynamically
 */

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
 * Updates all SEO-related meta tags for a page
 * This includes title, description, canonical, Open Graph, and Twitter Card tags
 */
export function updateSEO(config: SEOConfig): void {
  const {
    title,
    description,
    canonical,
    ogImage = "https://collegeproduce.com/favicon.png",
    ogType = "website",
    twitterCard = "summary_large_image",
    keywords,
  } = config;

  // Update title
  document.title = title;

  // Update basic meta tags
  setMetaTag("name", "description", description);
  if (keywords) {
    setMetaTag("name", "keywords", keywords);
  }

  // Update canonical URL
  const canonicalLink = document.querySelector('link[rel="canonical"]');
  if (canonicalLink) {
    canonicalLink.setAttribute("href", canonical);
  }

  // Update Open Graph tags
  setMetaTag("property", "og:title", title);
  setMetaTag("property", "og:description", description);
  setMetaTag("property", "og:url", canonical);
  setMetaTag("property", "og:image", ogImage);
  setMetaTag("property", "og:type", ogType);

  // Update Twitter Card tags
  setMetaTag("name", "twitter:card", twitterCard);
  setMetaTag("name", "twitter:title", title);
  setMetaTag("name", "twitter:description", description);
  setMetaTag("name", "twitter:image", ogImage);
  setMetaTag("name", "twitter:url", canonical);
}

/**
 * Helper function to set or update a meta tag
 */
function setMetaTag(
  attribute: "name" | "property",
  attributeValue: string,
  content: string
): void {
  let element = document.querySelector(
    `meta[${attribute}="${attributeValue}"]`
  );

  if (!element) {
    element = document.createElement("meta");
    element.setAttribute(attribute, attributeValue);
    document.head.appendChild(element);
  }

  element.setAttribute("content", content);
}

/**
 * Adds structured data (JSON-LD) to the page
 */
export function addStructuredData(data: object): void {
  // Remove existing structured data script with the same @type if it exists
  const existingScripts = document.querySelectorAll(
    'script[type="application/ld+json"]'
  );
  const dataType = (data as { "@type"?: string })["@type"];

  existingScripts.forEach((script) => {
    try {
      const scriptData = JSON.parse(script.textContent || "");
      if (scriptData["@type"] === dataType) {
        script.remove();
      }
    } catch (e) {
      // Invalid JSON, ignore
    }
  });

  // Add new structured data
  const script = document.createElement("script");
  script.type = "application/ld+json";
  script.textContent = JSON.stringify(data);
  document.head.appendChild(script);
}

/**
 * Pre-configured SEO data for common pages
 */
export const SEO_CONFIGS = {
  home: {
    title: "College Produce — Crafted Intelligence for Trial Work",
    description:
      "Precision automation forged in the trenches of trial work. College Produce builds practical, powerful systems designed by people who understand the work.",
    canonical: "https://collegeproduce.com/",
    keywords:
      "trial automation, legal technology, exhibit labeling, document automation, trial work, law firm tools",
  },
  exhibitpro: {
    title: "ExhibitPro - Court Exhibit Label Software for Litigation Attorneys",
    description:
      "ExhibitPro is software for litigation attorneys and paralegals to generate court exhibit labels from legal pleadings. Built by a 25-year litigation support firm. From $29/month.",
    canonical: "https://collegeproduce.com/exhibitpro",
    keywords:
      "court exhibit labels, litigation software, law firm software, legal pleadings, court exhibit labeling, paralegal software, attorney tools, trial binder labels, court filing software",
  },
  contact: {
    title: "Contact College Produce — Legal Exhibit Support",
    description:
      "Contact College Produce for exhibit management solutions and legal support. Available 24/7 for your litigation needs.",
    canonical: "https://collegeproduce.com/contact",
  },
  exhibitproContact: {
    title: "ExhibitPro Support — Contact Legal Exhibit Software",
    description:
      "Get support for ExhibitPro, the automated exhibit labeling solution for legal professionals. Contact our team for questions about features and pricing.",
    canonical: "https://collegeproduce.com/exhibitpro/contact",
  },
  exhibitproHowItWorks: {
    title: "How It Works | ExhibitPro",
    description:
      "From document to print-ready in minutes. See how ExhibitPro selects, extracts, reviews, and prints court exhibit labels automatically — no templates, no manual setup, no reprints.",
    canonical: "https://collegeproduce.com/exhibitpro/how-it-works",
    keywords:
      "exhibit labeling workflow, court exhibit labels, litigation software, automatic exhibit extraction, print-ready exhibit tabs",
  },
  exhibitproFeatures: {
    title: "Features | ExhibitPro",
    description:
      "Every feature in ExhibitPro was built to get your exhibit labels ready without the manual work: smart alignment, batch processing, one-click printing, smart truncation, and operator controls.",
    canonical: "https://collegeproduce.com/exhibitpro/features",
    keywords:
      "exhibit label features, smart alignment, batch processing, court exhibit printing, litigation document automation",
  },
  fileLabelPro: {
    title: "File LabelPro - Generate Print-Ready Labels from File Names",
    description:
      "File LabelPro generates print-ready labels from existing file names. Select your files, review the output, and print. No manual formatting required.",
    canonical: "https://collegeproduce.com/file-labelpro",
    keywords:
      "file label printing, print-ready labels, litigation support, document labeling, file name to labels",
  },
  fileLabelProHowItWorks: {
    title: "How It Works | File LabelPro",
    description:
      "Discover how File LabelPro automatically turns file names into print-ready labels for litigation teams. Learn the workflow from upload to printing.",
    canonical: "https://collegeproduce.com/file-labelpro/how-it-works",
    keywords:
      "file label workflow, print-ready labels, litigation support, file name parsing, label review",
  },
  fileLabelProFeatures: {
    title: "Features | File LabelPro",
    description:
      "See the key features of File LabelPro: automatic file name parsing, label review, and printable output for legal exhibit labels.",
    canonical: "https://collegeproduce.com/file-labelpro/features",
    keywords:
      "file label features, litigation document labeling, print-ready label software, label review tools",
  },
  fileLabelProContact: {
    title: "Contact | File LabelPro",
    description:
      "Contact College Produce about File LabelPro. Ask questions about features, pricing, and how to automate exhibit label creation.",
    canonical: "https://collegeproduce.com/file-labelpro/contact",
    keywords:
      "contact file label pro, file label software support, litigation labeling help",
  },
  copierTabsPro: {
    title: "Copier TabsPro - Print-Ready Tabs from File Names",
    description:
      "Copier TabsPro formats file names for copier tab printing automatically. Built for professionals preparing exhibits and document sets for production.",
    canonical: "https://collegeproduce.com/copier-tabspro",
    keywords:
      "copier tabs, print-ready tabs, litigation support, document tabs, file name formatting",
  },
  copierTabsProContact: {
    title: "Contact | Copier TabsPro",
    description:
      "Get in touch with the Copier TabsPro team. Ask about features, pricing, and how to automate copier tab production for your litigation team.",
    canonical: "https://collegeproduce.com/copier-tabspro/contact",
    keywords: "contact copier tabspro, copier tab support, litigation tab printing help",
  },
  copierTabsProFeatures: {
    title: "Features | Copier TabsPro",
    description:
      "Explore Copier TabsPro features: batch processing, flexible file support, real-time controls, live preview, and full operator control over tab production.",
    canonical: "https://collegeproduce.com/copier-tabspro/features",
    keywords: "copier tab features, batch processing, live preview, operator control, print-ready tabs",
  },
  copierTabsProHowItWorks: {
    title: "How It Works | Copier TabsPro",
    description:
      "Four steps from file selection to print-ready copier tabs. See how Copier TabsPro formats, reviews, and prints your document tabs automatically.",
    canonical: "https://collegeproduce.com/copier-tabspro/how-it-works",
    keywords: "copier tabspro workflow, how to print copier tabs, document tab formatting, litigation production",
  },
  terms: {
    title: "Terms of Service — College Produce",
    description:
      "Terms of Service for College Produce and ExhibitPro. Read our terms and conditions for using our legal automation services.",
    canonical: "https://collegeproduce.com/terms",
  },
  privacy: {
    title: "Privacy Policy — College Produce",
    description:
      "Privacy Policy for College Produce and ExhibitPro. Learn how we protect your data and handle legal documents securely.",
    canonical: "https://collegeproduce.com/privacy",
  },
  notFound: {
    title: "Page Not Found — College Produce",
    description:
      "The page you're looking for doesn't exist. Return to College Produce homepage for legal automation solutions.",
    canonical: "https://collegeproduce.com/",
  },
};
