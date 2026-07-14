import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/ct-logo.png";
import step1Img from "@/assets/images/ct-step1.png";
import step2Img from "@/assets/images/ct-step2.png";
import step3Img from "@/assets/images/ct-step3.png";
import step4Img from "@/assets/images/ct-step4.png";
import "./copiertabspro.css";

const steps = [
  { number: "Step 01", title: "Select Your Files", body: "Choose the files you want included in your copier tab set. Select multiple documents at once — exhibits, pleadings, correspondence, or complete document sets.", img: step1Img, videoId: "H8JQWzlf4f0" },
  { number: "Step 02", title: "Format Automatically", body: "Copier TabsPro reads your file names and formats them for copier tab printing, creating a tab set that's ready for review.", img: step2Img, videoId: "Sn8wZhHk0nU" },
  { number: "Step 03", title: "Fine-Tune Every Detail", body: "Review your tab set before printing. Reorder entries, rename tabs, and adjust formatting as needed.", img: step3Img, videoId: "zfDoYz7_Tvw" },
  { number: "Step 04", title: "Print", body: "Preview your final tab layout, verify alignment, and print directly to your preferred copier tab sheets.", img: step4Img, videoId: "lo9ePSj-Pww" },
];

export default function CopierTabsProHowItWorks() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeVideo, setActiveVideo] = useState<string | null>(null);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.copierTabsProHowItWorks);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  return (
    <div className="ct-page">
      {/* Nav */}
      <nav className="ct-nav">
        <Link to="/copier-tabspro" className="ct-nav-logo"><img src={logoImg} alt="Copier TabsPro" /></Link>
        <ul className="ct-nav-links">
          <li><Link to="/copier-tabspro">Home</Link></li>
          <li><Link to="/copier-tabspro/how-it-works" className="active">How It Works</Link></li>
          <li><Link to="/copier-tabspro/features">Features</Link></li>
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
        <p className="ct-eyebrow">Process</p>
        <h1>Four Steps To<br />Print-Ready.</h1>
        <p>Copier TabsPro handles the formatting. You stay in control of the output.</p>
      </div>

      {/* Steps */}
      <div className="ct-steps-wrapper">
      {steps.map((s) => (
        <div key={s.number} className="ct-step">
          <div className="ct-step-content">
            <span className="ct-step-number">{s.number}</span>
            <h2 className="ct-step-title">{s.title}</h2>
            <p className="ct-step-body">{s.body}</p>
          </div>
          <div
            className={`ct-step-media${activeVideo === s.videoId ? " playing" : ""}`}
            onClick={() => setActiveVideo(s.videoId)}
          >
            {activeVideo === s.videoId ? (
              <iframe
                src={`https://www.youtube.com/embed/${s.videoId}?autoplay=1&rel=0&modestbranding=1&playsinline=1`}
                title={s.title}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                style={{ position: "absolute", inset: 0, width: "100%", height: "100%", border: "none", borderRadius: "16px" }}
              />
            ) : (
              <>
                <img src={s.img} alt={s.title} />
                <div className="ct-play-btn">
                  <div className="ct-play-icon">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="#123155"><polygon points="5,3 19,12 5,21"/></svg>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      ))}
      </div>

      {/* CTA */}
      <div className="ct-cta-block">
        <h2>Ready To Try It?</h2>
        <p>From file selection to production in four steps.</p>
        <div className="ct-btn-group">
          <Link to="/copier-tabspro/early-access" className="ct-btn-primary">Launch Copier TabsPro</Link>
          <Link to="/copier-tabspro/features" className="ct-btn-outline">Explore features</Link>
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
