import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/fl-logo.png";
import footerLogoImg from "@/assets/images/fl-footer-logo.png";
import "./filelabelpro.css";
import "./filelabelpropricing.css";

export default function FileLabelProPricing() {
  const [menuOpen, setMenuOpen] = useState(false);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.fileLabelPro);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  return (
    <div className="fl-page">
      {/* Nav */}
      <nav className="fl-nav">
        <Link to="/file-labelpro" className="fl-nav-logo"><img src={logoImg} alt="File LabelPro" /></Link>
        <ul className="fl-nav-links">
          <li><Link to="/file-labelpro">Home</Link></li>
          <li><Link to="/file-labelpro/how-it-works">How It Works</Link></li>
          <li><Link to="/file-labelpro/features">Features</Link></li>
          <li><Link to="/file-labelpro/contact">Contact</Link></li>
        </ul>
        <div className="fl-nav-right">
          <Link to="/file-labelpro/pricing" className="fl-nav-cta active">Launch File LabelPro</Link>
          <div className="fl-nav-social">
            <a href="https://web.facebook.com/profile.php?id=61587514605022" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.instagram.com/collegeproducetools" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://www.linkedin.com/company/112228917/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
          </div>
          <button className={`fl-hamburger${menuOpen ? " is-open" : ""}`} aria-label="Menu" onClick={() => setMenuOpen(v => !v)}><span /><span /><span /></button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div className={`fl-mobile-menu${menuOpen ? " open" : ""}`}>
        <ul className="fl-mobile-nav-links">
          <li><Link to="/file-labelpro" onClick={() => setMenuOpen(false)}>Home</Link></li>
          <li><Link to="/file-labelpro/how-it-works" onClick={() => setMenuOpen(false)}>How It Works</Link></li>
          <li><Link to="/file-labelpro/features" onClick={() => setMenuOpen(false)}>Features</Link></li>
          <li><Link to="/file-labelpro/contact" onClick={() => setMenuOpen(false)}>Contact</Link></li>
        </ul>
        <div className="fl-mobile-social">
          <a href="https://web.facebook.com/profile.php?id=61587514605022" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
          <a href="https://www.instagram.com/collegeproducetools" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
          <a href="https://www.linkedin.com/company/112228917/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
        </div>
      </div>

      <div className="flpp-landing">
        {/* Hero */}
        <section className="flpp-hero">
          <h1>Looking for a <span className="flpp-accent">better way</span> to label your files?</h1>
          <p>Create your account and see how quickly File Labels Pro turns a list of file names into a full set of print-ready file folder labels.</p>
          <Link to="/file-labelpro/contact" className="flpp-btn-primary">Get started</Link>
        </section>

        {/* Pricing */}
        <section className="flpp-pricing">
          <h2>Simple pricing. No guesswork.</h2>
          <p className="flpp-pricing-sub">Every plan starts with a 7-day free trial. Cancel any time before it ends.</p>

          <div className="flpp-plan-card">
            <div className="flpp-plan-header">FILE LABELS PRO</div>
            <div className="flpp-plan-body">
              <div className="flpp-plan-price">
                <span className="flpp-amount">$9.99</span>
                <span className="flpp-period">Per Month</span>
              </div>
              <ul className="flpp-plan-features">
                <li><span className="flpp-check">✓</span> Full functionality</li>
                <li style={{ display: "block" }}>
                  <span className="flpp-check" style={{ display: "inline" }}>✓</span> Five label formats included:
                  <ul className="flpp-format-sublist">
                    <li>Avery 5366</li>
                    <li>Avery 5163</li>
                    <li>Avery 5167</li>
                    <li>Avery 5160</li>
                    <li>Avery 8163</li>
                  </ul>
                </li>
                <li><span className="flpp-check">✓</span> Unlimited labels</li>
                <li><span className="flpp-check">✓</span> Email support</li>
              </ul>
              <Link to="/file-labelpro/contact" className="flpp-btn-plan">Start 7-day free trial</Link>
            </div>
          </div>

          <div className="flpp-upgrade-strip">
            <h3>Need more label formats?</h3>
            <p>
              Upgrade to ExhibitPro for every format File Labels Pro offers, plus exhibit-specific formatting — Solo from $29/month, Firm from $199/month.
              <br /><Link to="/exhibitpro" className="flpp-upgrade-link">See ExhibitPro plans →</Link>
            </p>
          </div>
        </section>
      </div>

      {/* Footer */}
      <footer className="fl-footer">
        <div className="fl-footer-top">
          <div className="fl-footer-brand">
            <img src={footerLogoImg} alt="File LabelPro" className="fl-footer-logo-img" />
            <div className="fl-footer-divider"></div>
            <div className="fl-footer-brand-text">
              <span className="fl-footer-name">File LabelPro</span>
              <span className="fl-footer-tagline">Less Formatting. More Filing.</span>
            </div>
          </div>
          <ul className="fl-footer-links">
            <li><Link to="/file-labelpro/features">Features</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of service</Link></li>
          </ul>
        </div>
        <div className="fl-footer-social">
          <span className="fl-footer-social-label">Follow us on</span>
          <div className="fl-footer-social-icons">
            <a href="https://x.com/collegeproduce" className="fl-footer-social-icon" aria-label="X (Twitter)" target="_blank" rel="noopener noreferrer">
              <img src="/images/Twitter.png" alt="X" />
            </a>
            <a href="https://www.tiktok.com/@collegeproducetools?lang=en-GB" className="fl-footer-social-icon" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
              <img src="/images/Tiktok.png" alt="TikTok" />
            </a>
            <a href="https://www.youtube.com/@CollegeProducetools" className="fl-footer-social-icon" aria-label="YouTube" target="_blank" rel="noopener noreferrer">
              <img src="/images/Youtube.png" alt="YouTube" />
            </a>
            <a href="https://www.reddit.com/user/CollegeProduce/" className="fl-footer-social-icon" aria-label="Reddit" target="_blank" rel="noopener noreferrer">
              <img src="/images/Reddit.png" alt="Reddit" />
            </a>
          </div>
        </div>
        <p className="fl-footer-copy">© 2026 File Labels Pro. All rights reserved.</p>
      </footer>
    </div>
  );
}
