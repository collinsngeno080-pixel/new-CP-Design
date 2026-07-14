declare global {
  interface Window {
    lintrk?: ((action: string, data?: object) => void) & { q: unknown[][] };
    _linkedin_partner_id?: string;
    _linkedin_data_partner_ids?: string[];
  }
}

/**
 * Initializes the LinkedIn Insight Tag and fires a PageView.
 * Safe to call multiple times — the script is only injected once.
 */
export function initLinkedInInsight(partnerId: string): void {
  window._linkedin_partner_id = partnerId;
  window._linkedin_data_partner_ids = window._linkedin_data_partner_ids || [];
  if (!window._linkedin_data_partner_ids.includes(partnerId)) {
    window._linkedin_data_partner_ids.push(partnerId);
  }

  if (!window.lintrk) {
    const lintrk = function (a: string, b?: object) {
      lintrk.q.push([a, b]);
    } as ((action: string, data?: object) => void) & { q: unknown[][] };
    lintrk.q = [];
    window.lintrk = lintrk;

    const s = document.getElementsByTagName("script")[0];
    const b = document.createElement("script");
    b.type = "text/javascript";
    b.async = true;
    b.src = "https://snap.licdn.com/li.lms-analytics/insight.min.js";
    if (s?.parentNode) s.parentNode.insertBefore(b, s);
  }
}
