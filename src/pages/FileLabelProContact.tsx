import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/fl-logo.png";
import footerLogoImg from "@/assets/images/fl-footer-logo.png";
import "./filelabelpro.css";

interface FormState {
  firstName: string; lastName: string; email: string;
  phone: string; message: string; newsletter: boolean; terms: boolean;
}

const empty: FormState = { firstName: "", lastName: "", email: "", phone: "", message: "", newsletter: false, terms: false };

export default function FileLabelProContact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [form, setForm] = useState<FormState>(empty);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.fileLabelProContact);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.terms) return;
    setSubmitting(true);
    setError(false);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ ...form, product: "File LabelPro" }),
      });
      if (!res.ok) throw new Error("failed");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="fl-page">
      {/* Nav */}
      <nav className="fl-nav">
        <Link to="/file-labelpro" className="fl-nav-logo"><img src={logoImg} alt="File LabelPro" /></Link>
        <ul className="fl-nav-links">
          <li><Link to="/file-labelpro">Home</Link></li>
          <li><Link to="/file-labelpro/how-it-works">How It Works</Link></li>
          <li><Link to="/file-labelpro/features">Features</Link></li>
          <li><Link to="/file-labelpro/contact" className="active">Contact</Link></li>
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
        <span className="fl-orange-label">Contact</span>
        <h1>Get in Touch.</h1>
        <p>Have a question about File LabelPro? Our support team will get back to you shortly.</p>
      </div>

      {/* Contact form */}
      <section className="fl-contact-section">
        <div className="fl-contact-card">
          <h3>Send us a Message</h3>

          {success ? (
            <div className="fl-contact-success">
              <p>Thank you for reaching out. Our support team will review your inquiry shortly.</p>
              <button className="fl-btn-primary" onClick={() => { setSuccess(false); setForm(empty); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="fl-contact-form" onSubmit={handleSubmit} noValidate>
              <div className="fl-contact-row">
                <div className="fl-contact-field">
                  <label htmlFor="fl-firstName">First Name <span className="fl-req">*</span></label>
                  <input id="fl-firstName" name="firstName" type="text" required placeholder="First Name" value={form.firstName} onChange={handleChange} />
                </div>
                <div className="fl-contact-field">
                  <label htmlFor="fl-lastName">Last Name <span className="fl-req">*</span></label>
                  <input id="fl-lastName" name="lastName" type="text" required placeholder="Last Name" value={form.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="fl-contact-field">
                <label htmlFor="fl-email">Company Email Address <span className="fl-req">*</span></label>
                <input id="fl-email" name="email" type="email" required placeholder="Company Email Address" value={form.email} onChange={handleChange} />
              </div>
              <div className="fl-contact-field">
                <label htmlFor="fl-phone">Contact Number <span className="fl-req">*</span></label>
                <input id="fl-phone" name="phone" type="tel" required placeholder="Contact Number" value={form.phone} onChange={handleChange} />
              </div>
              <div className="fl-contact-field">
                <label htmlFor="fl-message">Message</label>
                <textarea id="fl-message" name="message" placeholder="Your message..." rows={4} value={form.message} onChange={handleChange} />
              </div>
              <div className="fl-contact-check">
                <label>
                  <input type="checkbox" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                  I agree to receive newsletter and updates from File LabelPro.
                </label>
              </div>
              <div className="fl-contact-check">
                <label>
                  <input type="checkbox" name="terms" required checked={form.terms} onChange={handleChange} />
                  <span>I have read, understood, and accepted the <a href="https://exhibitpro.io/terms" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and <a href="https://exhibitpro.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></span>
                </label>
              </div>
              {error && <p className="fl-contact-error">Something went wrong. Please try again or contact us directly.</p>}
              <button className="fl-btn-primary" type="submit" disabled={submitting}>
                {submitting ? "Sending…" : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

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
