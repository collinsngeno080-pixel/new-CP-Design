import { HomeHeader } from "@/components/home/HomeHeader";
import { HeroSection } from "@/components/HeroSection";
import { PhilosophySection } from "@/components/PhilosophySection";
import { CavemanSection } from "@/components/CavemanSection";
import { ToolsSection } from "@/components/ToolsSection";
import { HomeFooter } from "@/components/home/HomeFooter";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useEffect } from "react";
import { initFacebookPixel } from "@/lib/facebook-pixel";
import { initGoogleTag } from "@/lib/google-tag";
import { updateSEO, SEO_CONFIGS, addStructuredData } from "@/lib/seo";

const Index = () => {
    useScrollToTop();

    useEffect(() => {
        // Update meta tags for SEO
        updateSEO(SEO_CONFIGS.home);

        // Add WebPage structured data
        addStructuredData({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "College Produce — Crafted Intelligence for Trial Work",
            "description": "Precision automation forged in the trenches of trial work. College Produce builds practical, powerful systems designed by people who understand the work.",
            "url": "https://collegeproduce.com/",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [{
                    "@type": "ListItem",
                    "position": 1,
                    "name": "Home",
                    "item": "https://collegeproduce.com/"
                }]
            }
        });

        // Initialize Facebook Pixel (landing page only)
        initFacebookPixel("1580561166323295");

        // Initialize Google Tag Manager (landing page only)
        initGoogleTag("AW-17944241080");
    }, []);

    return (
        <div className="min-h-screen">
            <HomeHeader />
            <main id="main-content" role="main" aria-label="Main content">
                <HeroSection />
                <PhilosophySection />
                <CavemanSection />
                <ToolsSection />
            </main>
            <HomeFooter />
        </div>
    );
};

export default Index;
