import { useEffect, useRef, useState } from "react";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useFavicon } from "@/hooks/useFavicon";
import { initFacebookPixel } from "@/lib/facebook-pixel";
import { buildCTAUrl, trackTrialClick, trackViewContent, patchOutboundLinks } from "@/lib/tracking";
import { updateSEO, SEO_CONFIGS, addStructuredData } from "@/lib/seo";
import EpHeader from "@/components/exhibitpro/EpHeader";
import EpFooter from "@/components/exhibitpro/EpFooter";
import "./exhibitpro-skin.css";

const CLARITY_PROJECT_ID = "w3u90gbagv";
const CLARITY_SCRIPT_SRC = `https://www.clarity.ms/tag/${CLARITY_PROJECT_ID}`;
const CLARITY_SCRIPT_SELECTOR = `script[src="${CLARITY_SCRIPT_SRC}"]`;

// Four alternating step sections — text on one side, a click-to-play YouTube
// thumbnail on the other. Index parity drives the alt background + reversed layout.
const steps = [
    {
        tag: "Step 1: Select",
        heading: "Drop in your documents.",
        body: "Drag and drop your PDF or DOCX files into the workspace. You can select multiple files at once, pleadings, exhibits, or combined sets. ExhibitPro handles them all in one go.",
        videoId: "jJBlb7wXCFI",
        thumb: "/images/Sellect your files thumbnail 1.png",
        alt: "Watch how to select your files",
    },
    {
        tag: "Step 2: Extract",
        heading: "ExhibitPro does the reading.",
        body: "No tagging. No highlighting. No manual work. ExhibitPro scans your documents, detects every exhibit identifier and heading, and builds a perfectly aligned set automatically. What used to take hours takes minutes.",
        videoId: "n3mQ2ey5q_U",
        thumb: "/images/Extract automatically thumbnail.png",
        alt: "Watch how to extract automatically",
    },
    {
        tag: "Step 3: Review",
        heading: "Adjust anything. Change nothing if it’s already right.",
        body: "Review your labels before printing. Remove extras, adjust formatting, fine-tune spacing on the right panel. Most of the time you won’t need to touch a thing.",
        videoId: "OW_8Z6uNk0E",
        thumb: "/images/How topreview thumbnail 1.png",
        alt: "Watch how to review and customize",
    },
    {
        tag: "Step 4: Print",
        heading: "Preview, confirm, done.",
        body: "See exactly how your output will look before it hits the printer. Confirm alignment, select your preferred exhibit base sheet, and print. Print-ready in one click.",
        videoId: "tdF9hT-4mF0",
        thumb: "/images/How to generate and print thumbnail 1.png",
        alt: "Watch how to print your labels and tabs",
    },
];

export default function ExhibitProHowItWorks() {
    useScrollToTop();
    useFavicon("/exhibitpro-favicon.ico");

    const [activeVideo, setActiveVideo] = useState<string | null>(null);

    useEffect(() => {
        updateSEO(SEO_CONFIGS.exhibitproHowItWorks);

        addStructuredData({
            "@context": "https://schema.org",
            "@type": "HowTo",
            name: "How ExhibitPro turns documents into print-ready exhibit labels",
            description:
                "From document to print-ready in minutes — select, extract, review, and print court exhibit labels.",
            url: "https://collegeproduce.com/exhibitpro/how-it-works",
            step: steps.map((s, i) => ({
                "@type": "HowToStep",
                position: i + 1,
                name: s.tag,
                text: s.body,
            })),
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

        const pricingEl = document.getElementById("pricing");
        if (pricingEl) {
            const pricingRef = { fired: false };
            new IntersectionObserver((entries) => {
                if (pricingRef.fired) return;
                if (entries[0].isIntersecting) {
                    pricingRef.fired = true;
                    trackViewContent("pricing_section");
                }
            }, { threshold: 0.5 }).observe(pricingEl);
        }
    }, []);

    return (
        <div className="ep-page">
            <EpHeader />

            <main id="main-content">
                {/* Page hero */}
                <section className="ep-page-hero">
                    <div className="ep-container ep-page-hero-container">
                        <span className="ep-eyebrow">How It Works</span>
                        <h1>From Document to<br />Print-Ready Instantly.</h1>
                        <p>No manual setup. No reprints.</p>
                    </div>
                </section>

                {/* Alternating step sections */}
                {steps.map((step, i) => {
                    const reverse = i % 2 === 1;
                    return (
                        <section key={step.videoId} className={`ep-step-section${reverse ? " ep-step-section--alt" : ""}`}>
                            <div className={`ep-container ep-step-inner${reverse ? " ep-step-inner--reverse" : ""}`}>
                                <div className="ep-step-content">
                                    <span className="ep-step-tag">{step.tag}</span>
                                    <h2 className="ep-step-h">{step.heading}</h2>
                                    <p className="ep-step-body">{step.body}</p>
                                </div>
                                <div className="ep-step-media">
                                    <div
                                        className="ep-step-video"
                                        data-video-id={step.videoId}
                                        role="button"
                                        tabIndex={0}
                                        aria-label={step.alt}
                                        onClick={() => setActiveVideo(step.videoId)}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter" || e.key === " ") { e.preventDefault(); setActiveVideo(step.videoId); }
                                        }}
                                    >
                                        {activeVideo === step.videoId ? (
                                            <iframe
                                                src={`https://www.youtube.com/embed/${step.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                                                title={step.alt}
                                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                                allowFullScreen
                                            />
                                        ) : (
                                            <img src={step.thumb} alt={step.alt} />
                                        )}
                                    </div>
                                </div>
                            </div>
                        </section>
                    );
                })}

                {/* Page CTA */}
                <section className="ep-page-cta" id="pricing">
                    <div className="ep-container ep-page-cta-container">
                        <h2>Ready to experience the magic?</h2>
                        <p>$29/month. No contract. Cancel anytime.</p>
                        <a className="ep-btn ep-btn-primary ep-btn-lg" href={buildCTAUrl("how_it_works_cta")} onClick={() => trackTrialClick("how_it_works_cta")}>Try ExhibitPro</a>
                    </div>
                </section>
            </main>

            <EpFooter />
        </div>
    );
}
