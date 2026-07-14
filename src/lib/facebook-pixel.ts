declare global {
  interface Window {
    fbq?: FacebookPixel;
    _fbq?: FacebookPixel;
  }
}

interface FacebookPixel {
  (...args: unknown[]): void;
  callMethod?: (...args: unknown[]) => void;
  queue: unknown[][];
  push: FacebookPixel;
  loaded: boolean;
  version: string;
}

/**
 * Initializes the Facebook Pixel SDK and fires a PageView event.
 * Safe to call multiple times — the SDK will only be loaded once.
 */
export function initFacebookPixel(pixelId: string): void {
  if (!window.fbq) {
    const fbq: FacebookPixel = function (...args: unknown[]) {
      if (fbq.callMethod) {
        fbq.callMethod(...args);
      } else {
        fbq.queue.push(args);
      }
    } as FacebookPixel;

    fbq.push = fbq;
    fbq.loaded = true;
    fbq.version = "2.0";
    fbq.queue = [];

    window.fbq = fbq;
    if (!window._fbq) window._fbq = fbq;

    const script = document.createElement("script");
    script.async = true;
    script.src = "https://connect.facebook.net/en_US/fbevents.js";
    const firstScript = document.getElementsByTagName("script")[0];
    if (firstScript?.parentNode) {
      firstScript.parentNode.insertBefore(script, firstScript);
    }

    window.fbq("init", pixelId);
  }

  if (window.fbq) {
    window.fbq("track", "PageView");
  }
}
