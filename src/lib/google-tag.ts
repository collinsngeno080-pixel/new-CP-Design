declare global {
  interface Window {
    dataLayer?: unknown[];
    gtag?: Gtag;
  }
}

interface Gtag {
  (...args: unknown[]): void;
}

/**
 * Initializes Google Tag Manager (gtag.js) and configures the conversion tracking.
 * Safe to call multiple times — the script will only be loaded once.
 */
export function initGoogleTag(measurementId: string): void {
  if (!window.gtag) {
    // Initialize dataLayer
    window.dataLayer = window.dataLayer || [];

    // Define gtag function
    const gtag: Gtag = function (...args: unknown[]) {
      window.dataLayer?.push(args);
    };

    window.gtag = gtag;

    // Load the gtag.js script
    const script = document.createElement("script");
    script.async = true;
    script.src = `https://www.googletagmanager.com/gtag/js?id=${measurementId}`;
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    // Initialize with current date
    window.gtag("js", new Date());
  }

  // Configure the measurement ID
  if (window.gtag) {
    window.gtag("config", measurementId);
  }
}
