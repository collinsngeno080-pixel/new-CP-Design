import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS } from "@/lib/seo";
import logoImg from "@/assets/images/ct-logo.png";
import "./copiertabspro.css";

export default function CopierTabsProContact() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [form, setForm] = useState({ firstName: "", lastName: "", email: "", phone: "", message: "", newsletter: false, terms: false });

  useFavicon("/favicon.png");

  useEffect(() => {
    window.scrollTo(0, 0);
    updateSEO(SEO_CONFIGS.copierTabsProContact);
    return () => updateSEO({ title: "College Produce", description: "Precision automation forged in the trenches of trial work.", canonical: "https://collegeproduce.com" });
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    setForm(prev => ({ ...prev, [name]: type === "checkbox" ? (e.target as HTMLInputElement).checked : value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(false);
    setSubmitting(true);
    try {
      const res = await fetch("/api/send-email", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ firstName: form.firstName, lastName: form.lastName, email: form.email, phone: form.phone, message: form.message }),
      });
      if (!res.ok) throw new Error("Failed");
      setSuccess(true);
    } catch {
      setError(true);
    } finally {
      setSubmitting(false);
    }
  };

  const Nav = () => (
    <>
      <nav className="ct-nav">
        <Link to="/copier-tabspro" className="ct-nav-logo"><img src={logoImg} alt="Copier TabsPro" /></Link>
        <ul className="ct-nav-links">
          <li><Link to="/copier-tabspro">Home</Link></li>
          <li><Link to="/copier-tabspro/how-it-works">How It Works</Link></li>
          <li><Link to="/copier-tabspro/features">Features</Link></li>
          <li><Link to="/copier-tabspro/contact" className="active">Contact</Link></li>
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
    </>
  );

  return (
    <div className="ct-page">
      <Nav />

      <div className="ct-page-header">
        <p className="ct-eyebrow">Contact</p>
        <h1>Get in Touch.</h1>
        <p>Have a question about Copier TabsPro? Our support team will get back to you shortly.</p>
      </div>

      <section className="ct-contact-section">
        <div className="ct-contact-card">
          <h3>Send us a Message</h3>

          {success ? (
            <div className="ct-contact-success">
              <p>Thank you for reaching out. Our support team will review your inquiry shortly.</p>
              <button className="ct-btn-primary" onClick={() => { setSuccess(false); setForm({ firstName: "", lastName: "", email: "", phone: "", message: "", newsletter: false, terms: false }); }}>
                Send Another Message
              </button>
            </div>
          ) : (
            <form className="ct-contact-form" onSubmit={handleSubmit} noValidate>
              <div className="ct-contact-row">
                <div className="ct-contact-field">
                  <label htmlFor="firstName">First Name <span className="ct-req">*</span></label>
                  <input id="firstName" name="firstName" type="text" required placeholder="First Name" value={form.firstName} onChange={handleChange} />
                </div>
                <div className="ct-contact-field">
                  <label htmlFor="lastName">Last Name <span className="ct-req">*</span></label>
                  <input id="lastName" name="lastName" type="text" required placeholder="Last Name" value={form.lastName} onChange={handleChange} />
                </div>
              </div>
              <div className="ct-contact-field">
                <label htmlFor="email">Company Email Address <span className="ct-req">*</span></label>
                <input id="email" name="email" type="email" required placeholder="Company Email Address" value={form.email} onChange={handleChange} />
              </div>
              <div className="ct-contact-field">
                <label htmlFor="phone">Contact Number <span className="ct-req">*</span></label>
                <input id="phone" name="phone" type="tel" required placeholder="Contact Number" value={form.phone} onChange={handleChange} />
              </div>
              <div className="ct-contact-field">
                <label htmlFor="message">Message</label>
                <textarea id="message" name="message" placeholder="Your message..." rows={4} value={form.message} onChange={handleChange} />
              </div>
              <div className="ct-contact-check">
                <input type="checkbox" id="newsletter" name="newsletter" checked={form.newsletter} onChange={handleChange} />
                <label htmlFor="newsletter">I agree to receive newsletter and updates from Copier TabsPro.</label>
              </div>
              <div className="ct-contact-check">
                <input type="checkbox" id="terms" name="terms" required checked={form.terms} onChange={handleChange} />
                <label htmlFor="terms">I have read, understood, and accepted the <a href="https://exhibitpro.io/terms" target="_blank" rel="noopener noreferrer">Terms &amp; Conditions</a> and <a href="https://exhibitpro.io/privacy" target="_blank" rel="noopener noreferrer">Privacy Policy</a></label>
              </div>
              {error && <p className="ct-contact-error">Something went wrong. Please try again or contact us directly.</p>}
              <button className="ct-btn-primary" type="submit" disabled={submitting}>
                {submitting ? "Sending..." : "Submit Inquiry"}
              </button>
            </form>
          )}
        </div>
      </section>

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
