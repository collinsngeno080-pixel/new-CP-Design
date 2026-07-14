import { useEffect, useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useFavicon } from "@/hooks/useFavicon";
import { initFacebookPixel } from "@/lib/facebook-pixel";
import { buildCTAUrl, trackTrialClick, patchOutboundLinks } from "@/lib/tracking";
import { updateSEO, SEO_CONFIGS, addStructuredData } from "@/lib/seo";
import EpHeader from "@/components/exhibitpro/EpHeader";
import EpFooter from "@/components/exhibitpro/EpFooter";
import "./exhibitpro-skin.css";

const CLARITY_PROJECT_ID = "w3u90gbagv";
const CLARITY_SCRIPT_SRC = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
const CLARITY_SCRIPT_SELECTOR = `script[src="${CLARITY_SCRIPT_SRC}"]`;

const steps: { label: string; backImg: string; img: string }[] = [
    { label: "Select",  backImg: "/images/Select and drag.png", img: "/images/Select 1.png" },
    { label: "Format",  backImg: "/images/Format.png",          img: "/images/Format Icon (2).png" },
    { label: "Print.",  backImg: "/images/print.png",           img: "/images/Print-icon (2).png" },
];

export default function ExhibitProFeatures() {
    useScrollToTop();
    useFavicon("/exhibitpro-favicon.ico");

    const [flipped, setFlipped] = useState<Record<number, boolean>>({});
    const toggleFlip = (i: number) => setFlipped((prev) => ({ ...prev, [i]: !prev[i] }));

    useEffect(() => {
        updateSEO(SEO_CONFIGS.exhibitproFeatures);

        addStructuredData({
            "@context": "https://schema.org",
            "@type": "WebPage",
            name: "ExhibitPro Features",
            description:
                "Every feature in ExhibitPro was built to get your exhibit labels ready without the manual work.",
            url: "https://collegeproduce.com/exhibitpro/features",
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://collegeproduce.com/" },
                    { "@type": "ListItem", position: 2, name: "ExhibitPro", item: "https://collegeproduce.com/exhibitpro" },
                    { "@type": "ListItem", position: 3, name: "Features", item: "https://collegeproduce.com/exhibitpro/features" },
                ],
            },
        });

        initFacebookPixel("1535532960852200");

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

            <main id="main-content">
                {/* Page hero */}
                <section className="ep-page-hero">
                    <div className="ep-container ep-page-hero-container">
                        <h1>Scan. Generate. Print.</h1>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 600, fontSize: "30px", lineHeight: 1, letterSpacing: 0, textAlign: "center", color: "#EF7B3B", marginBottom: "1.5rem", maxWidth: "900px" }}>
                            From phone to print-ready exhibit labels in minutes.
                        </p>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 500, fontSize: "20px", lineHeight: 1, letterSpacing: 0, textAlign: "center", color: "#000000", maxWidth: "900px" }}>
                            Your exhibit workflow doesn't have to start at your desk. Mobile+ feature connects document collection and exhibit preparation in one seamless workflow.
                        </p>
                        <div style={{ marginTop: "2rem" }}>
                            <a className="ep-btn ep-btn-primary ep-btn-lg" href={buildCTAUrl("features_hero")} onClick={() => trackTrialClick("features_hero")}>Try ExhibitPro</a>
                        </div>
                    </div>
                </section>

                {/* Video */}
                <section className="ep-video-section" id="video">
                    <div className="ep-container">
                        <div className="ep-video-wrap">
                            <video src="/images/phone-capture.mp4" autoPlay loop muted playsInline />
                        </div>
                    </div>
                </section>

                {/* Three steps */}
                <section className="ep-how-it-works" id="how-it-works">
                    <div className="ep-container">
                        <h2>Three steps. That&#8217;s it.</h2>
                        <div className="ep-steps-grid">
                            {steps.map((s, i) => (
                                <div key={s.label} className="ep-step-wrap">
                                    <div
                                        className={`ep-step-flip-card${flipped[i] ? " ep-is-flipped" : ""}`}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={`${s.label}, tap to learn more`}
                                        onClick={() => toggleFlip(i)}
                                        onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") { e.preventDefault(); toggleFlip(i); } }}
                                    >
                                        <div className="ep-step-card-inner">
                                            <div className="ep-step-card-front">
                                                <div className="ep-step-card-cap">
                                                    <div className="ep-step-number">{i + 1}</div>
                                                </div>
                                                <span className="ep-step-card-icon">
                                                    <img src={s.img} alt={s.label} />
                                                </span>
                                                <p className="ep-step-card-label">{s.label}</p>
                                                <div className="ep-step-card-dots">
                                                    {[0, 1, 2].map(d => <span key={d} className={`ep-dot${d <= i ? " ep-dot-active" : ""}`} />)}
                                                </div>
                                            </div>
                                            <div className="ep-step-card-back" style={{ backgroundImage: `url('${s.backImg}')`, backgroundSize: "cover", backgroundPosition: "center", backgroundRepeat: "no-repeat" }} />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </section>

                {/* Page CTA */}
                <section className="ep-page-cta">
                    <div className="ep-container ep-page-cta-container">
                        <h2>Ready to See Mobile+<span style={{ color: "var(--ep-orange)" }}>feature</span> in Action?</h2>
                        <p style={{ fontFamily: "'Montserrat', sans-serif", fontWeight: 400, fontSize: "24px", lineHeight: "33px", letterSpacing: 0, textAlign: "center", color: "#000000" }}>
                            Experience a faster way to prepare exhibit labels with mobile+ feature.
                        </p>
                        <div style={{ marginTop: "1.5rem" }}>
                            <a className="ep-btn ep-btn-primary ep-btn-lg" href={buildCTAUrl("features_cta")} onClick={() => trackTrialClick("features_cta")}>Try ExhibitPro</a>
                        </div>
                    </div>
                </section>
            </main>

            <EpFooter />
        </div>
    );
}
