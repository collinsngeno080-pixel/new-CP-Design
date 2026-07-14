import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { buildCTAUrl, trackTrialClick } from "@/lib/tracking";

const APP_URL = buildCTAUrl("nav");

const Socials = () => (
    <>
        <a href="https://web.facebook.com/profile.php?id=61587514605022" target="_blank" rel="noopener noreferrer" className="ep-social-icon" aria-label="Facebook">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" /></svg>
        </a>
        <a href="https://www.instagram.com/collegeproducetools" target="_blank" rel="noopener noreferrer" className="ep-social-icon" aria-label="Instagram">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><rect x="2" y="2" width="20" height="20" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" y1="6.5" x2="17.51" y2="6.5" strokeWidth="3" /></svg>
        </a>
        <a href="https://www.linkedin.com/company/112228917/" target="_blank" rel="noopener noreferrer" className="ep-social-icon" aria-label="LinkedIn">
            <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg" aria-hidden="true"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" /><circle cx="4" cy="4" r="2" /></svg>
        </a>
    </>
);

export default function EpHeader() {
    const [navOpen, setNavOpen] = useState(false);
    const { pathname } = useLocation();

    const closeNav = () => setNavOpen(false);
    const navClass = (path: string) => (pathname === path ? "ep-nav-active" : undefined);

    return (
        <header className="ep-header">
            <div className="ep-container ep-header-inner">
                <Link to="/exhibitpro" className="ep-brand" aria-label="ExhibitPro home">
                    <img src="/images/ep-logo.png" alt="ExhibitPro" />
                </Link>

                <nav className={`ep-site-nav${navOpen ? " ep-open" : ""}`} aria-label="Main navigation">
                    <Link to="/exhibitpro" className={navClass("/exhibitpro")} onClick={closeNav}>Home</Link>
                    <Link to="/exhibitpro/how-it-works" className={navClass("/exhibitpro/how-it-works")} onClick={closeNav}>How It Works</Link>
                    <Link to="/exhibitpro/features" className={navClass("/exhibitpro/features")} onClick={closeNav}>Features</Link>
                    <Link to="/exhibitpro/blog" className={navClass("/exhibitpro/blog")} onClick={closeNav}>Blog</Link>
                    <Link to="/exhibitpro/contact" className={navClass("/exhibitpro/contact")} onClick={closeNav}>Contact</Link>
                    <div className="ep-nav-socials"><Socials /></div>
                </nav>

                <div className="ep-header-actions">
                    <a className="ep-btn ep-btn-outline" href="https://exhibitpro.collegeproduce.com/pricing">See Pricing</a>
                    <a className="ep-btn ep-btn-primary" href={APP_URL} onClick={() => trackTrialClick("nav")}>Try ExhibitPro</a>
                    <div className="ep-social-icons"><Socials /></div>
                </div>

                <button className="ep-nav-toggle" aria-label="Toggle navigation" aria-expanded={navOpen} onClick={() => setNavOpen((o) => !o)}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                        <line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" />
                    </svg>
                </button>
            </div>
        </header>
    );
}
