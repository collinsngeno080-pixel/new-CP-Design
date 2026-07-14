import { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useFavicon } from "@/hooks/useFavicon";
import { initFacebookPixel } from "@/lib/facebook-pixel";
import { initLinkedInInsight } from "@/lib/linkedin-insight";
import { buildCTAUrl, trackTrialClick, patchOutboundLinks } from "@/lib/tracking";
import { updateSEO, SEO_CONFIGS, addStructuredData } from "@/lib/seo";
import EpHeader from "@/components/exhibitpro/EpHeader";
import EpFooter from "@/components/exhibitpro/EpFooter";
import "./exhibitpro-skin.css";

const CLARITY_PROJECT_ID = "w3u90gbagv";
const CLARITY_SCRIPT_SRC = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
const CLARITY_SCRIPT_SELECTOR = `script[src="${CLARITY_SCRIPT_SRC}"]`;

// Three-step flip cards — front icon + label, back reveals a screenshot.
const steps = [
    { label: "Select",  back: "/images/ep-step-select.png",  img: "/images/Select 1.png" },
    { label: "Format",  back: "/images/ep-step-format.png",  img: "/images/Format Icon (2).png" },
    { label: "Print.",  back: "/images/ep-step-print.png",   img: "/images/Print-icon (2).png" },
];

export default function ExhibitPro() {
    useScrollToTop();
    useFavicon("/exhibitpro-favicon.ico");

    const [flipped, setFlipped] = useState<Record<number, boolean>>({});
    const videoRef = useRef<HTMLVideoElement>(null);

    const toggleFlip = (i: number) =>
        setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

    // React doesn't reliably set the `muted` DOM property from the JSX prop,
    // so muted-autoplay gets blocked. Force it muted + play() after mount.
    useEffect(() => {
        const v = videoRef.current;
        if (!v) return;
        v.muted = true;
        const p = v.play();
        if (p && typeof p.catch === "function") p.catch(() => {});
    }, []);

    useEffect(() => {
        updateSEO(SEO_CONFIGS.exhibitpro);

        addStructuredData({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ExhibitPro - Court Exhibit Label Software for Litigation Attorneys",
            description:
                "ExhibitPro is software for litigation attorneys and paralegals to generate court exhibit labels from legal pleadings.",
            url: "https://collegeproduce.com/exhibitpro",
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://collegeproduce.com/" },
                    { "@type": "ListItem", position: 2, name: "ExhibitPro", item: "https://collegeproduce.com/exhibitpro" },
                ],
            },
        });

        addStructuredData({
            "@context": "https://schema.org",
            "@type": "SoftwareApplication",
            name: "ExhibitPro",
            applicationCategory: "BusinessApplication",
            applicationSubCategory: "Legal Software",
            operatingSystem: "Web",
            url: "https://collegeproduce.com/exhibitpro",
            description:
                "Court exhibit label software for litigation attorneys, paralegals, and trial support teams. Reads legal pleadings, identifies exhibit references, and generates court-ready label sheets for trial binders.",
            audience: { "@type": "Audience", audienceType: "Legal Professionals" },
            provider: {
                "@type": "LegalService",
                name: "College Produce, Inc.",
                description: "Legal-technology company serving litigation professionals at law firms.",
                address: {
                    "@type": "PostalAddress",
                    streetAddress: "100 Biscayne Blvd",
                    addressLocality: "Miami",
                    addressRegion: "FL",
                    postalCode: "33132",
                    addressCountry: "US",
                },
            },
            offers: {
                "@type": "Offer",
                price: "49.00",
                priceCurrency: "USD",
                priceSpecification: { "@type": "UnitPriceSpecification", price: "49.00", priceCurrency: "USD", unitText: "MONTH" },
            },
        });

        initFacebookPixel("1535532960852200");
        initLinkedInInsight("10424625");

        const clarityWindow = window as Window & { clarity?: (...args: unknown[]) => void };
        if (!document.querySelector(CLARITY_SCRIPT_SELECTOR) && !clarityWindow.clarity) {
            const script = document.createElement("script");
            script.type = "text/javascript";
            script.text = `
                (function(c,l,a,r,i,t,y){
                    c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
                    t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
                    y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
                })(window, document, "clarity", "script", "${CLARITY_PROJECT_ID}");
            `;
            document.head.appendChild(script);
        }
        patchOutboundLinks();
    }, []);

    return (
        <div className="ep-page">
            <EpHeader />

            <main>
                {/* Hero */}
                <section className="ep-hero" id="try">
                    <div className="ep-container ep-hero-container">
                        <span className="ep-eyebrow">Exhibit Labels for Litigation Teams</span>
                        <h1>
                            Your Exhibit <span className="ep-orange">Labels</span><br />
                            Are Already in the Document.
                        </h1>
                        <p className="ep-hero-sub">ExhibitPro finds, formats and prints. No manual entry.</p>
                        <div className="ep-btn-group">
                            <a className="ep-btn ep-btn-primary ep-btn-lg" href={buildCTAUrl("home_hero")} onClick={() => trackTrialClick("home_hero")}>Try ExhibitPro</a>
                            <Link className="ep-btn ep-btn-outline ep-btn-lg" to="/exhibitpro/how-it-works">See how it works &#8594;</Link>
                        </div>
<p className="ep-trust-line">Built for Legal Professionals. Plans from <span className="ep-orange">$29/month</span>. No contract. Cancel anytime.</p>
                    </div>
                </section>

                <hr className="ep-section-sep" />

                {/* Video */}
                <section className="ep-video-section" id="video">
                    <div className="ep-container">
                        <h2>Exhibit<span className="ep-orange">Pro</span> just works</h2>
                        <div className="ep-video-wrap">
                            <video ref={videoRef} src="/images/hero videos (1).mp4" autoPlay loop muted playsInline preload="auto" />
                        </div>
                    </div>
                </section>

                {/* How it works. */}
                <section className="ep-how-it-works" id="how-it-works">
                    <div className="ep-container">
                        <h2>Three steps. That&#8217;s it.</h2>
                        <div className="ep-steps-grid">
                            {steps.map((step, i) => (
                                <div key={step.label} className="ep-step-wrap">
                                    <div
                                        className={`ep-step-flip-card${flipped[i] ? " ep-is-flipped" : ""}`}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`${step.label}, tap to learn more`}
                                        onClick={() => toggleFlip(i)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFlip(i); }
                                        }}
                                    >
                                        <div className="ep-step-card-inner">
                                            <div className="ep-step-card-front">
                                                <div className="ep-step-card-cap">
                                                    <div className="ep-step-number">{i + 1}</div>
                                                </div>
                                                <span className="ep-step-card-icon">
                                                    <img src={step.img} alt={step.label} />
                                                </span>
                                                <p className="ep-step-card-label">{step.label}</p>
                                                <div className="ep-step-card-dots">
                                                    {[0, 1, 2].map(d => <span key={d} className={`ep-dot${d <= i ? " ep-dot-active" : ""}`} />)}
                                                </div>
                                            </div>
                                            <div className="ep-step-card-back" style={{ backgroundImage: `url('${step.back}')` }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Closing CTA */}
                <section className="ep-closing-cta" id="closing-cta">
                    <div className="ep-container">
                        <h2>
                            <span className="ep-cta-line1">Select. Format. Print.</span>
                            <span className="ep-cta-line2">Exhibit<span className="ep-orange">Pro</span> Just Works.</span>
                        </h2>
                        <p className="ep-hero-sub">$29/month. No templates. No manual entry. No reprints.</p>
                        <div className="ep-btn-group">
                            <a className="ep-btn ep-btn-primary ep-btn-lg" href={buildCTAUrl("home_bottom")} onClick={() => trackTrialClick("home_bottom")}>Launch ExhibitPro</a>
                            <a className="ep-btn ep-btn-outline ep-btn-lg" href="https://exhibitpro.collegeproduce.com/pricing">See Pricing &#8594;</a>
                        </div>
                    </div>
                </section>
            </main>

            <EpFooter />
        </div>
    );
}
