import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/ct-logo.png";
import iconBatch from "@/assets/images/ct-icon-batch.png";
import iconFlexible from "@/assets/images/ct-icon-flexible.png";
import iconRealtime from "@/assets/images/ct-icon-realtime.png";
import iconOperator from "@/assets/images/ct-icon-operator.png";
import iconPreview from "@/assets/images/ct-icon-preview.png";
import iconSupport from "@/assets/images/ct-icon-support.png";
import "./copiertabspro.css";

const features = [
  { icon: iconBatch, title: "Batch Processing", body: "Process entire document sets at once. Select multiple documents in a single step and prepare your complete copier tab set without processing files one by one. Works with exhibits, pleadings, correspondence, or any combination." },
  { icon: iconFlexible, title: "Flexible File Support", body: "Work with documents from multiple sources and formats without additional steps. Bring in files as they are." },
  { icon: iconRealtime, title: "Real Time Controls", body: "Adjust typography, capitalization, bold styling, and spacing. Every change is reflected live in the preview, no waiting, no guessing." },
  { icon: iconOperator, title: "Operator Control", body: "Maintain full control over tab naming, ordering, and formatting throughout the entire process. Reorder, rename, or remove any entry at any time." },
  { icon: iconPreview, title: "Live Preview", body: "Review formatting and verify alignment before a single sheet goes through the copier. The preview reflects every adjustment in real time, no surprises at the printer." },
  { icon: iconSupport, title: "Help & Support", body: "Access support when you need it and keep document production moving. We're here to help you stay on schedule." },
];

export default function CopierTabsProFeatures() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.copierTabsProFeatures);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  return (
    <div className="ct-page">
      {/* Nav */}
      <nav className="ct-nav">
        <Link to="/copier-tabspro" className="ct-nav-logo"><img src={logoImg} alt="Copier TabsPro" /></Link>
        <ul className="ct-nav-links">
          <li><Link to="/copier-tabspro">Home</Link></li>
          <li><Link to="/copier-tabspro/how-it-works">How It Works</Link></li>
          <li><Link to="/copier-tabspro/features" className="active">Features</Link></li>
          <li><Link to="/copier-tabspro/contact">Contact</Link></li>
        </ul>
        <div className="ct-nav-right">
          <Link to="/copier-tabspro/early-access" className="ct-nav-cta">Try Copier tabs<strong>Pro</strong></Link>
          <div className="ct-nav-social">
            <a href="https://web.facebook.com/profile.php?id=61587514605022" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.instagram.com/collegeproducetools" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><circle cx="12" cy="12" r="4"/><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/></svg></a>
            <a href="https://www.linkedin.com/company/112228917/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect x="2" y="9" width="4" height="12"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
          <button className="ct-hamburger" aria-label="Menu" onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
        </div>
      </nav>
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

      {/* Page header */}
      <div className="ct-page-header">
        <p className="ct-eyebrow">Features</p>
        <h1>Built For Production<br />Workflows.</h1>
        <p>Every control you need. Tap any card to learn more.</p>
      </div>

      <p className="ct-tap-hint">Tap a card to flip it</p>

      {/* Flip cards */}
      <div className="ct-features-section">
      <div className="ct-features-grid">
        {features.map((f, i) => (
          <div
            key={f.title}
            className={`ct-feature-card${flipped === i ? " flipped" : ""}`}
            onClick={() => setFlipped(flipped === i ? null : i)}
          >
            <div className="ct-feature-card-inner">
              <div className="ct-feature-card-front">
                <img src={f.icon} alt={f.title} className="ct-feature-card-icon" />
                <h3 className="ct-feature-card-title">{f.title}</h3>
              </div>
              <div className="ct-feature-card-back">
                <h3 className="ct-feature-card-title">{f.title}</h3>
                <p className="ct-feature-card-body">{f.body}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
      </div>

      {/* CTA */}
      <div className="ct-cta-block">
        <h2>Less Formatting.<br />More Production.</h2>
        <p>Everything you need. Nothing that slows you down.</p>
        <div className="ct-btn-group">
          <Link to="/copier-tabspro/early-access" className="ct-btn-primary">Launch Copier TabsPro</Link>
          <Link to="/copier-tabspro/how-it-works" className="ct-btn-outline">See how it works</Link>
        </div>
      </div>

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
