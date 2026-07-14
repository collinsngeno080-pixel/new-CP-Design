import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/ct-logo.png";
import "./copiertabspro.css";

export default function CopierTabsPro() {
  const [menuOpen, setMenuOpen] = useState(false);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.copierTabsPro);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  return (
    <div className="ct-page">
      {/* Nav */}
      <nav className="ct-nav">
        <Link to="/copier-tabspro" className="ct-nav-logo">
          <img src={logoImg} alt="Copier TabsPro" />
        </Link>
        <ul className="ct-nav-links">
          <li><Link to="/copier-tabspro" className="active">Home</Link></li>
          <li><Link to="/copier-tabspro/how-it-works">How It Works</Link></li>
          <li><Link to="/copier-tabspro/features">Features</Link></li>
          <li><Link to="/copier-tabspro/contact">Contact</Link></li>
        </ul>
        <div className="ct-nav-right">
          <Link to="/copier-tabspro/early-access" className="ct-nav-cta">Try Copier tabs<strong>Pro</strong></Link>
          <div className="ct-nav-social">
            <a href="https://web.facebook.com/profile.php?id=61587514605022" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg>
            </a>
            <a href="https://www.instagram.com/collegeproducetools" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg>
            </a>
            <a href="https://www.linkedin.com/company/112228917/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg>
            </a>
          </div>
          <button className="ct-hamburger" aria-label="Menu" onClick={() => setMenuOpen(v => !v)}>
            <span /><span /><span />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`ct-mobile-menu${menuOpen ? " open" : ""}`}>
        <Link to="/copier-tabspro" onClick={() => setMenuOpen(false)}>Home</Link>
        <Link to="/copier-tabspro/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link>
        <Link to="/copier-tabspro/features" onClick={() => setMenuOpen(false)}>Features</Link>
        <Link to="/copier-tabspro/contact" onClick={() => setMenuOpen(false)}>Contact</Link>
        <div className="ct-mobile-socials">
          <a href="https://web.facebook.com/profile.php?id=61587514605022" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://www.instagram.com/collegeproducetools" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
          <a href="https://www.linkedin.com/company/112228917/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>
      </div>

      {/* Hero */}
      <section className="ct-hero">
        <p className="ct-eyebrow">Built for Legal Support Professionals</p>
        <h1>From File Names To <span className="ct-orange">Print-Ready</span> Tabs.</h1>
        <p className="ct-hero-sub">Select Your Files. Review The Output. Print.</p>
        <div className="ct-btn-group">
          <Link to="/copier-tabspro/early-access" className="ct-btn-primary">Try Copier TabsPro</Link>
          <Link to="/copier-tabspro/how-it-works" className="ct-btn-outline">See how it works</Link>
        </div>
      </section>

      {/* Hero video */}
      <div className="ct-hero-video-wrap">
        <video className="ct-hero-video" src="/images/copiertab pro hero 1 (1).mp4" autoPlay loop muted playsInline />
      </div>

      {/* Brand */}
      <section className="ct-brand">
        <h2>Made For The People Who Keep<br />Production Moving.</h2>
        <div className="ct-brand-body">
          <p>Copier TabsPro was built for professionals responsible for <strong>preparing exhibits, pleadings, and organized document sets</strong> for production.</p>
          <p>It formats file names for copier tab printing <strong>automatically</strong> — reducing manual effort while keeping operators in full control of the final output.</p>
        </div>
      </section>

      {/* Footer */}
      <footer className="ct-footer">
        <span className="ct-footer-logo">Copier Tabs<span className="ct-orange">Pro</span></span>
        <p className="ct-footer-tagline">Select. Review. Adjust. Print.</p>
        <div className="ct-footer-legal">
          <a href="https://exhibitpro.io/privacy">Privacy Policy</a>
          <span className="ct-footer-sep">|</span>
          <a href="https://exhibitpro.io/terms">Terms of Service</a>
        </div>
        <p className="ct-footer-copy">© 2026 Copier TabsPro. All rights reserved.</p>
        <div className="ct-footer-social">
          <span className="ct-footer-social-label">Follow us on</span>
          <div className="ct-footer-social-icons">
            <a href="https://x.com/collegeproduce" className="ct-footer-social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <img src="/images/Twitter.png" alt="X" />
            </a>
            <a href="https://www.tiktok.com/@collegeproducetools?lang=en-GB" className="ct-footer-social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <img src="/images/Tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@CollegeProducetools" className="ct-footer-social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src="/images/Youtube.png" alt="YouTube" />
            </a>
            <a href="https://www.reddit.com/user/CollegeProduce/" className="ct-footer-social-icon" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
              <img src="/images/Reddit.png" alt="Reddit" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
