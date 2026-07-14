import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/fl-logo.png";
import footerLogoImg from "@/assets/images/fl-footer-logo.png";
import iconBatch from "@/assets/images/fl-icon-batch.png";
import iconFlexible from "@/assets/images/fl-icon-flexible.png";
import iconRealtime from "@/assets/images/fl-icon-realtime.png";
import iconUser from "@/assets/images/fl-icon-user.png";
import iconPreview from "@/assets/images/fl-icon-preview.png";
import iconSupport from "@/assets/images/fl-icon-support.png";
import "./filelabelpro.css";

const features = [
  {
    icon: iconBatch, name: "Batch File Processing",
    back: "Generate complete label sets from multiple files in a single workflow. No repeating the process file by file.",
  },
  {
    icon: iconFlexible, name: "Flexible File Support",
    back: "Work with files from different sources without additional preparation. File LabelPro handles them all.",
  },
  {
    icon: iconRealtime, name: "Real-Time Formatting Controls",
    back: "Adjust formatting and instantly see updates reflected in the preview. Full control over how your output looks before it prints.",
  },
  {
    icon: iconUser, name: "Complete User Control",
    back: "Edit names, reorder labels, and refine formatting before printing. Nothing goes to production until you are satisfied.",
  },
  {
    icon: iconPreview, name: "Live Preview",
    back: "Verify formatting and alignment before labels go to production. See exactly how your output will look before it hits the printer.",
  },
  {
    icon: iconSupport, name: "Reliable Support",
    back: "Get assistance when questions arise and keep your workflow moving. Support is always within reach.",
  },
];

export default function FileLabelProFeatures() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [flipped, setFlipped] = useState<number | null>(null);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.fileLabelProFeatures);
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
          <li><Link to="/file-labelpro/features" className="active">Features</Link></li>
          <li><Link to="/file-labelpro/contact">Contact</Link></li>
        </ul>
        <div className="fl-nav-right">
          <Link to="/file-labelpro/pricing" className="fl-nav-cta">Launch File LabelPro</Link>
          <div className="fl-nav-social">
            <a href="https://web.facebook.com/profile.php?id=61587514605022" aria-label="Facebook" target="_blank" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"/></svg></a>
            <a href="https://www.instagram.com/collegeproducetools" aria-label="Instagram" target="_blank" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/></svg></a>
            <a href="https://www.linkedin.com/company/112228917/" aria-label="LinkedIn" target="_blank" rel="noopener noreferrer"><svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z"/><circle cx="4" cy="4" r="2"/></svg></a>
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

      {/* Page header */}
      <div className="fl-page-header">
        <span className="fl-orange-label">Features</span>
        <h1>Precise. Automatic.<br /><span className="fl-highlight">Print-Ready.</span></h1>
        <p>Every feature in File LabelPro was built around one goal — consistent, print-ready file folder labels without the manual work.</p>
      </div>

      {/* Bridge */}
      <div className="fl-features-bridge">
        <p>Here is what is working behind the scenes every time you select a file.</p>
      </div>

      {/* Feature flip cards */}
      <div className="fl-features-grid-section">
        <div className="fl-cards-grid">
          {features.map((f, i) => (
            <div
              key={f.name}
              className={`fl-step-flip-card${flipped === i ? " flipped" : ""}`}
              onClick={() => setFlipped(flipped === i ? null : i)}
              role="button"
              tabIndex={0}
              aria-label={f.name}
              onKeyDown={e => { if (e.key === "Enter" || e.key === " ") setFlipped(flipped === i ? null : i); }}
            >
              <div className="fl-step-flip-inner">
                <div className="fl-step-flip-front">
                  <img src={f.icon} alt="" className="fl-step-icon" />
                  <span className="fl-step-flip-name">{f.name}</span>
                </div>
                <div className="fl-step-flip-back">
                  <h3>{f.name}</h3>
                  <p>{f.back}</p>
                  <div className="fl-step-underline"></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA */}
      <div className="fl-cta-block">
        <h2>See Every Feature in Action.</h2>
        <p>No manual formatting. No extra steps. No reprints.</p>
        <div className="fl-cta-actions">
          <Link to="/file-labelpro/pricing" className="fl-btn-primary">Try File LabelPro</Link>
        </div>
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
            <li><a href="https://exhibitpro.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></li>
            <li><a href="https://exhibitpro.io/terms" target="_blank" rel="noopener noreferrer">Terms of service</a></li>
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
        <p className="fl-footer-copy">© 2026 File LabelPro. All rights reserved.</p>
      </footer>
    </div>
  );
}
