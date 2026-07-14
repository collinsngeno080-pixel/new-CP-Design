const SIGNUP_URL = "https://exhibitpro.collegeproduce.com/sign-up";
const PASSTHROUGH_KEYS = ["fbclid", "gclid", "utm_source", "utm_medium", "utm_campaign", "utm_content", "utm_term", "ref"];

type Fbq = (...args: unknown[]) => void;
declare global { interface Window { fbq?: Fbq; } }

export function buildCTAUrl(campaign: string): string {
    const url = new URL(SIGNUP_URL);
    url.searchParams.set("utm_source", "collegeproduce_lp");
    url.searchParams.set("utm_medium", "cta");
    url.searchParams.set("utm_campaign", campaign);
    return url.toString();
}

export function patchOutboundLinks(): void {
    const incoming = new URLSearchParams(window.location.search);
    if (!PASSTHROUGH_KEYS.some(k => incoming.has(k))) return;
    document.querySelectorAll<HTMLAnchorElement>('a[href*="exhibitpro.collegeproduce.com"]').forEach(a => {
        try {
            const url = new URL(a.href);
            PASSTHROUGH_KEYS.forEach(k => {
                if (incoming.has(k) && !url.searchParams.has(k)) url.searchParams.set(k, incoming.get(k)!);
            });
            a.href = url.toString();
        } catch (_) { /* ignore malformed hrefs */ }
    });
}

export function trackTrialClick(placement: string): void {
    if (typeof window.fbq === "function") {
        window.fbq("track", "Lead", { content_name: "trial_cta_click", content_category: placement });
    }
}

export function trackViewContent(contentName: string): void {
    if (typeof window.fbq === "function") {
        window.fbq("track", "ViewContent", { content_name: contentName });
    }
}
