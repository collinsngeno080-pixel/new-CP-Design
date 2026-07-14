import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/fl-logo.png";
import footerLogoImg from "@/assets/images/fl-footer-logo.png";
import hiw1Img from "@/assets/images/fl-hiw1.png";
import hiw2Img from "@/assets/images/fl-hiw2.png";
import hiw3Img from "@/assets/images/fl-hiw3.png";
import hiw4Img from "@/assets/images/fl-hiw4.png";
import "./filelabelpro.css";

const steps = [
  {
    id: "step1", stepClass: "fl-step-odd",
    title: "Select Your Files.",
    body: "Choose the files you want included in your label set. Process individual folders or complete case file collections in a single workflow. Prepare labels for pleadings, discovery, exhibits, correspondence, and case materials without formatting each label individually.",
    img: hiw1Img, videoId: "tFMbNgK8iws",
  },
  {
    id: "step2", stepClass: "fl-step-even",
    title: "Generate Labels Automatically.",
    body: "File LabelPro reads your file names and creates a formatted label set ready for review. No repetitive typing. No manual formatting.",
    img: hiw2Img, videoId: "iqFYTyPaTeU",
  },
  {
    id: "step3", stepClass: "fl-step-odd",
    title: "Review And Customize.",
    body: "Review your labels before printing. Rename entries, reorder items, remove labels, and adjust formatting as needed. Control capitalization, typography, spacing, and emphasis to match your preferred filing standards.",
    img: hiw3Img, videoId: "0vqgyPZVeWo",
  },
  {
    id: "step4", stepClass: "fl-step-even",
    title: "Print With Confidence.",
    body: "Preview the final layout, verify formatting and alignment, and print directly to your preferred label sheets. Consistent output across every file set.",
    img: hiw4Img, videoId: "O88TX9_4y9Q",
  },
];

export default function FileLabelProHowItWorks() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.fileLabelProHowItWorks);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  return (
    <div className="fl-page">
      {/* Nav */}
      <nav className="fl-nav">
        <Link to="/file-labelpro" className="fl-nav-logo"><img src={logoImg} alt="File LabelPro" /></Link>
        <ul className="fl-nav-links">
          <li><Link to="/file-labelpro">Home</Link></li>
          <li><Link to="/file-labelpro/how-it-works" className="active">How It Works</Link></li>
          <li><Link to="/file-labelpro/features">Features</Link></li>
          <li><Link to="/file-labelpro/contact">Contact</Link></li>
        </ul>
        <div className="fl-nav-right">
          <Link to="/file-labelpro/pricing" className="fl-nav-cta">Launch File LabelPro</Link>
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

      {/* Page header */}
      <div className="fl-page-header">
        <span className="fl-orange-label">How It Works</span>
        <h1>From File Names to <span className="fl-highlight">Print-Ready Labels</span> in Minutes.</h1>
        <p>No manual formatting. No extra steps. No reprints.</p>
      </div>

      {/* Steps */}
      {steps.map(s => (
        <div key={s.id} className={`fl-hiw-step ${s.stepClass}`}>
          <div className="fl-hiw-step-content">
            <h2 className="fl-step-title">{s.title}</h2>
            <p className="fl-step-body">{s.body}</p>
          </div>
          <div className="fl-hiw-step-media">
            <div className={`fl-hiw-media-wrap${activeVideo === s.videoId ? " playing" : ""}`}>
              <div className="fl-hiw-player">
                {activeVideo === s.videoId && (
                  <iframe
                    src={`https://www.youtube.com/embed/${s.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                    title={s.title}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  />
                )}
              </div>
              {activeVideo !== s.videoId && (
                <>
                  <img src={s.img} alt={s.title} className="fl-hiw-thumb" />
                  <div className="fl-play-overlay" onClick={() => setActiveVideo(s.videoId)}>
                    <div className="fl-play-icon">
                      <svg width="20" height="20" viewBox="0 0 24 24" fill="#1a2744"><polygon points="5,3 19,12 5,21"/></svg>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      ))}

      {/* CTA */}
      <div className="fl-cta-block">
        <h2>Ready to try it on your next project?</h2>
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
