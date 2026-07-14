import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { useScrollToTop } from "@/hooks/useScrollToTop";
import { useFavicon } from "@/hooks/useFavicon";
import { updateSEO, SEO_CONFIGS, addStructuredData } from "@/lib/seo";
import EpHeader from "@/components/exhibitpro/EpHeader";
import EpFooter from "@/components/exhibitpro/EpFooter";
import "./exhibitpro-skin.css";

interface FormData {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    message: string;
}

export default function ExhibitProContact() {
    useScrollToTop();
    useFavicon("/exhibitpro-favicon.ico");

    const [formData, setFormData] = useState<FormData>({ firstName: "", lastName: "", email: "", phone: "", message: "" });
    const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

    useEffect(() => {
        updateSEO(SEO_CONFIGS.exhibitproContact);
        addStructuredData({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            name: "ExhibitPro Support Contact",
            description: "Get support for ExhibitPro, the automated exhibit labeling solution for legal professionals.",
            url: "https://collegeproduce.com/exhibitpro/contact",
            breadcrumb: {
                "@type": "BreadcrumbList",
                itemListElement: [
                    { "@type": "ListItem", position: 1, name: "Home", item: "https://collegeproduce.com/" },
                    { "@type": "ListItem", position: 2, name: "ExhibitPro", item: "https://collegeproduce.com/exhibitpro" },
                    { "@type": "ListItem", position: 3, name: "Contact", item: "https://collegeproduce.com/exhibitpro/contact" },
                ],
            },
            mainEntity: {
                "@type": "SoftwareApplication",
                name: "ExhibitPro",
                description: "Automated exhibit labeling and document preparation for legal professionals",
                url: "https://exhibitpro.collegeproduce.com",
                applicationCategory: "BusinessApplication",
                contactPoint: {
                    "@type": "ContactPoint",
                    telephone: "+1-239-332-3369",
                    email: "support@collegeproduce.com",
                    contactType: "Customer Support",
                    areaServed: "US",
                    availableLanguage: "English",
                },
            },
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus("loading");
        try {
            const response = await fetch("/api/send-email", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });
            if (!response.ok) throw new Error("Failed to send");
            setStatus("success");
            setFormData({ firstName: "", lastName: "", email: "", phone: "", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("error");
        }
    };

    return (
        <div className="ep-page">
            <EpHeader />

            <main id="main-content" role="main" aria-label="ExhibitPro support contact form">
                <section className="ep-contact-hero">
                    <div className="ep-container">
                        <h1>Questions About Exhibit<span className="ep-orange">Pro</span>?</h1>
                        <p>Our support team is here to help. Get in touch with any questions about features, pricing, or how ExhibitPro can work for your practice.</p>
                    </div>
                </section>

                <section className="ep-contact-section">
                    <div className="ep-container">
                        <div className="ep-contact-card">
                            {status === "success" ? (
                                <div className="ep-contact-success">
                                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                                        <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
                                        <polyline points="22 4 12 14.01 9 11.01" />
                                    </svg>
                                    <h3>Message Sent!</h3>
                                    <p>Thank you for reaching out. Our support team will review your inquiry shortly.</p>
                                    <button type="button" className="ep-btn ep-btn-outline ep-btn-lg" onClick={() => setStatus("idle")}>Send Another Message</button>
                                </div>
                            ) : (
                                <>
                                    <h2 className="ep-contact-card-title">Send us a Message</h2>
                                    <form className="ep-contact-form" onSubmit={handleSubmit}>
                                        <div className="ep-contact-row">
                                            <div className="ep-contact-field">
                                                <label htmlFor="epFirstName">First Name <span className="ep-req">*</span></label>
                                                <input id="epFirstName" name="firstName" value={formData.firstName} onChange={handleChange} required type="text" placeholder="First Name" aria-label="First name" aria-required="true" />
                                            </div>
                                            <div className="ep-contact-field">
                                                <label htmlFor="epLastName">Last Name <span className="ep-req">*</span></label>
                                                <input id="epLastName" name="lastName" value={formData.lastName} onChange={handleChange} required type="text" placeholder="Last Name" aria-label="Last name" aria-required="true" />
                                            </div>
                                        </div>

                                        <div className="ep-contact-field">
                                            <label htmlFor="epEmail">Company Email Address <span className="ep-req">*</span></label>
                                            <input id="epEmail" name="email" value={formData.email} onChange={handleChange} required type="email" placeholder="Company Email Address" aria-label="Company email address" aria-required="true" />
                                        </div>

                                        <div className="ep-contact-field">
                                            <label htmlFor="epPhone">Contact Number <span className="ep-req">*</span></label>
                                            <input id="epPhone" name="phone" value={formData.phone} onChange={handleChange} required type="tel" placeholder="Contact Number" aria-label="Contact phone number" aria-required="true" />
                                        </div>

                                        <div className="ep-contact-field">
                                            <label htmlFor="epMessage">Message</label>
                                            <textarea id="epMessage" name="message" value={formData.message} onChange={handleChange} placeholder="Your message..." rows={4} aria-label="Message content" />
                                        </div>

                                        <div className="ep-contact-checks">
                                            <label className="ep-contact-check">
                                                <input type="checkbox" />
                                                <span>I agree to receive newsletter and updates from College Produce.</span>
                                            </label>
                                            <label className="ep-contact-check">
                                                <input type="checkbox" required />
                                                <span>I have read, understood, and accepted the <Link to="/terms">Terms &amp; Conditions</Link> and <Link to="/privacy">Privacy Policy</Link></span>
                                            </label>
                                        </div>

                                        {status === "error" && (
                                            <div className="ep-contact-error">Something went wrong. Please try again or call us directly.</div>
                                        )}

                                        <button type="submit" disabled={status === "loading"} className="ep-btn ep-btn-primary ep-btn-lg ep-contact-submit">
                                            {status === "loading" ? "Sending..." : "Submit Inquiry"}
                                        </button>
                                    </form>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </main>

            <EpFooter />
        </div>
    );
}
