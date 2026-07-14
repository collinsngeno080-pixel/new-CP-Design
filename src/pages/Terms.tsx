"use client"

import React, { useState, useEffect } from 'react'
import { updateSEO, SEO_CONFIGS, addStructuredData } from '@/lib/seo'

const TERMS_CONTENT = [
    {
        id: 'introduction',
        label: 'Introduction',
        title: '1. Introduction',
        content: <>
            These <strong>Terms of Service</strong> (&quot;Terms&quot;) govern your access to and use of the <strong>ExhibitPro application, services, and related online platforms</strong> (collectively, the &quot;Service&quot;). By using the Service, you agree to be bound by these Terms.
        </>,
        lastUpdated: '2026-06-17'
    },
    {
        id: 'company',
        label: 'Company Information',
        title: '2. Company Information',
        content: <>
            <strong>College Produce Inc.</strong>, headquartered at 123-205 5 AVE SW, Calgary, Alberta T2P 2V7, Canada (&quot;College Produce Inc.&quot;, &quot;we&quot;, &quot;us&quot;, or &quot;our&quot;), provides <strong>technology and automation for litigation workflows</strong>. All legal notices may be directed to <a href="mailto:info@collegeproduce.com" className="text-blue-600 hover:text-blue-800 underline">info@collegeproduce.com</a>.
        </>
    },
    {
        id: 'eligibility',
        label: 'Eligibility & Account Responsibilities',
        title: '3. Eligibility & Account Responsibilities',
        content: <>
            You must be <strong>18 years or older</strong> to create an account. You are responsible for maintaining the <strong>confidentiality of your login credentials</strong> and all activity that occurs under your account.
        </>
    },
    {
        id: 'services',
        label: 'Services & Use Restrictions',
        title: '4. Services & Use Restrictions',
        content: <>
            You agree not to <strong>misuse the Service</strong>, including attempting unauthorized access, distributing malicious code, or interfering with platform functionality. <strong>College Produce Inc. does not provide legal advice and is not a law firm</strong>.
        </>
    },
    {
        id: 'payments',
        label: 'Payment, Billing & Refund Policy',
        title: '5. Payment, Billing & Refund Policy (Stripe)',
        content: <>
            Payments are securely processed via <strong>Stripe</strong>. <strong>Subscriptions renew automatically</strong> unless cancelled prior to the renewal date.
            <br /><br />
            <strong>Refund Policy:</strong> Users may request a refund within <strong>14 days</strong> of the original transaction for billing errors or duplicate payments. After the subscription period begins, fees are <strong>non-refundable</strong> except as required by law.
        </>
    },
    {
        id: 'data',
        label: 'Data Handling, Retention & Legal Materials',
        title: '6. Data Handling, Retention & Legal Materials',
        content: <>
            Users may select <strong>legal documents, filings, and trial materials</strong>. While College Produce Inc. deploys industry-standard safeguards, users remain responsible for compliance with <strong>attorney–client privilege and confidentiality obligations</strong>. Data is retained for the <strong>duration of the subscription plus 90 days</strong>, after which it is deleted unless required by law.
        </>
    },
    {
        id: 'hipaa',
        label: 'Legal Data & HIPAA Disclaimer',
        title: '7. Legal Data & HIPAA Disclaimer',
        content: <>
            <strong>College Produce Inc. is not a Covered Entity under HIPAA</strong>. If handling <strong>Protected Health Information (PHI)</strong>, users must request a <strong>Business Associate Agreement (BAA)</strong>. We do not review, interpret, or verify legal content.
        </>
    },
    {
        id: 'ip',
        label: 'Intellectual Property',
        title: '8. Intellectual Property',
        content: <>
            All <strong>platform technology, branding, and content</strong> are owned by College Produce Inc. Users retain ownership of selected documents but grant College Produce Inc. a <strong>limited license to process files</strong> for the provision of services.
        </>
    },
    {
        id: 'liability',
        label: 'Limitation of Liability',
        title: '9. Limitation of Liability',
        content: <>
            To the fullest extent permitted by law, College Produce Inc. is not liable for <strong>indirect or consequential damages</strong>, including filing delays, misformatted exhibits, or automation output errors. Our <strong>total liability shall not exceed the amount paid in the preceding 12 months</strong>.
        </>
    },
    {
        id: 'insurance',
        label: 'Insurance',
        title: '10. Insurance',
        content: <>
            College Produce Inc. maintains <strong>general liability and errors & omissions (E&O) coverage</strong> for its services.
        </>
    },
    {
        id: 'termination',
        label: 'Termination & Suspension',
        title: '11. Termination & Suspension',
        content: <>
            We may <strong>suspend or terminate access</strong> if Terms are violated. Users may terminate their account at any time via their dashboard. Upon termination, <strong>access to selected data may be revoked</strong>.
        </>
    },
    {
        id: 'governing',
        label: 'Governing Law & Dispute Resolution',
        title: '12. Governing Law & Dispute Resolution',
        content: <>
            These Terms are governed by the laws of the <strong>Province of Alberta, Canada</strong>, without regard to conflict-of-law principles. Disputes will be resolved through <strong>binding arbitration in Calgary, Alberta</strong>. <strong>Class action waivers apply</strong>.
        </>
    },
    {
        id: 'changes',
        label: 'Changes to Terms',
        title: '13. Changes to Terms',
        content: <>
            We may <strong>update these Terms with notice</strong>. Continued use of the Service constitutes <strong>acceptance of the updated Terms</strong>.
        </>
    },
    {
        id: 'contact',
        label: 'Contact',
        title: '14. Contact',
        content: <>
            For legal notices or questions, email: <a href="mailto:info@collegeproduce.com" className="text-blue-600 hover:text-blue-800 underline">info@collegeproduce.com</a>.
        </>
    }
]

// Table of Contents Component
interface TocItem {
    id: string
    label: string
    title?: string
    content?: React.ReactNode
    lastUpdated?: string
}

interface TableOfContentsProps {
    items: TocItem[]
    activeSection: string | null
    onItemClick: (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void
}

const TableOfContents: React.FC<TableOfContentsProps> = ({ items, activeSection, onItemClick }) => {
    const [isMobileOpen, setIsMobileOpen] = useState<boolean>(false)

    return (
        <nav className="lg:w-1/4" aria-label="Table of Contents">
            <div className="sticky top-6">
                {/* Header */}
                <div className="mb-6">
                    <h1 className="text-2xl font-bold text-slate-900">College Produce Inc.</h1>
                    <p className="text-sm text-slate-600 mt-1">Terms of Service</p>
                    <p className="text-xs text-slate-500 mt-2">Last updated: 17 June 2026</p>
                </div>

                {/* Mobile TOC Toggle */}
                <button
                    className="lg:hidden w-full bg-white border border-slate-200 rounded-lg p-4 flex items-center justify-between mb-4"
                    onClick={() => setIsMobileOpen(!isMobileOpen)}
                    aria-expanded={isMobileOpen}
                >
                    <span className="font-medium text-slate-700">Table of Contents</span>
                    <svg
                        className={`w-5 h-5 transform transition-transform ${isMobileOpen ? 'rotate-180' : ''}`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                    >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                </button>

                {/* TOC List */}
                <div className={`bg-white border border-slate-200 rounded-lg p-4 lg:block ${isMobileOpen ? 'block' : 'hidden'}`}>
                    <ul className="space-y-2 text-sm" role="list">
                        {items.map((item) => (
                            <li key={item.id} role="listitem">
                                <a
                                    href={`#${item.id}`}
                                    onClick={(e) => onItemClick(e, item.id)}
                                    className={`block py-2 px-3 rounded-md transition-colors ${activeSection === item.id
                                        ? 'bg-blue-50 text-blue-700 font-medium border-l-4 border-blue-500'
                                        : 'text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                                        }`}
                                    aria-current={activeSection === item.id ? 'location' : undefined}
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </nav>
    )
}

const AcceptanceFooter = ({ onAccept, onDecline }: { onAccept: () => void; onDecline: () => void }) => {
    const [isVisible, setIsVisible] = useState(false)

    useEffect(() => {
        const timer = setTimeout(() => setIsVisible(true), 1000)
        return () => clearTimeout(timer)
    }, [])

    if (!isVisible) return null

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-lg p-4 transform transition-transform duration-300">
            <div className="max-w-7xl mx-auto px-6">
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                    <div className="flex-1">
                        <p className="text-sm text-slate-700">
                            By continuing to use our services, you acknowledge that you have read and understand our <strong>Terms of Service</strong>.
                        </p>
                    </div>
                    <div className="flex items-center space-x-4">
                        <button
                            onClick={onDecline}
                            className="px-4 py-2 text-sm font-medium text-slate-700 hover:text-slate-900 border border-slate-300 rounded-md hover:bg-slate-50 transition-colors"
                        >
                            Decline
                        </button>
                        <button
                            onClick={onAccept}
                            className="px-6 py-2 text-sm font-medium text-white bg-blue-600 rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                        >
                            Accept Terms
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default function TermsPage() {
    const [activeSection, setActiveSection] = useState('')
    const [hasAccepted, setHasAccepted] = useState(false)

    // Smooth scroll handler
    type TocClickHandler = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => void

    const handleTocClick: TocClickHandler = (e, sectionId): void => {
        e.preventDefault()
        const element = document.getElementById(sectionId)
        if (element) {
            const offset: number = 80 // Account for fixed header
            const elementPosition: number = element.offsetTop - offset

            window.scrollTo({
                top: elementPosition,
                behavior: 'smooth'
            })

            // Update URL without page jump
            window.history.pushState(null, `#${sectionId}`)
            setActiveSection(sectionId)
        }
    }

    // Scroll spy implementation
    useEffect(() => {
        const observerOptions = {
            root: null,
            rootMargin: '-20% 0px -70% 0px',
            threshold: 0
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    setActiveSection(entry.target.id)
                }
            })
        }, observerOptions)

        // Observe all sections
        TERMS_CONTENT.forEach((section) => {
            const element = document.getElementById(section.id)
            if (element) observer.observe(element)
        })

        return () => observer.disconnect()
    }, [])

    // Handle acceptance
    const handleAccept = () => {
        setHasAccepted(true)
        localStorage.setItem('termsAccepted', 'true')
        localStorage.setItem('termsAcceptedVersion', '2026-06-17')
        console.log('Terms accepted by user')
    }

    const handleDecline = () => {
        window.location.href = '/'
    }

    // Check if user already accepted terms
    useEffect(() => {
        const accepted = localStorage.getItem('termsAccepted')
        if (accepted) {
            setHasAccepted(true)
        }
    }, [])

    // SEO meta tags
    useEffect(() => {
        updateSEO(SEO_CONFIGS.terms);

        // Add WebPage structured data
        addStructuredData({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "name": "Terms of Service",
            "description": "Terms of Service for College Produce and ExhibitPro",
            "url": "https://collegeproduce.com/terms",
            "breadcrumb": {
                "@type": "BreadcrumbList",
                "itemListElement": [
                    {
                        "@type": "ListItem",
                        "position": 1,
                        "name": "Home",
                        "item": "https://collegeproduce.com/"
                    },
                    {
                        "@type": "ListItem",
                        "position": 2,
                        "name": "Terms",
                        "item": "https://collegeproduce.com/terms"
                    }
                ]
            }
        });
    }, [])

    return (
        <>
            <div className="sr-only" aria-live="polite">
                <h1>College Produce Inc. Terms of Service</h1>
                <p>Last updated June 17, 2026</p>
            </div>

            <div className="min-h-screen bg-slate-50">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
                    <div className="flex flex-col lg:flex-row gap-8">
                        {/* Table of Contents - Sidebar */}
                        <TableOfContents
                            items={TERMS_CONTENT}
                            activeSection={activeSection}
                            onItemClick={handleTocClick}
                        />

                        {/* Main Content - PDF-like document */}
                        <main className="lg:w-3/4">
                            {/* PDF-style Document Container */}
                            <div className="bg-white shadow-lg" style={{ minHeight: '11in' }}>
                                {/* Document Header */}
                                <div className="border-b border-slate-300 px-8 sm:px-16 py-10 bg-gradient-to-b from-slate-50 to-white">
                                    <div className="text-center">
                                        <h1 className="text-4xl sm:text-5xl font-bold text-slate-900 mb-3 tracking-tight">
                                            College Produce Inc.
                                        </h1>
                                        <p className="text-xl sm:text-2xl text-slate-700 font-semibold tracking-wide">Terms of Service</p>
                                        <div className="mt-4 pt-4 border-t border-slate-200 inline-block px-8">
                                            <p className="text-sm text-slate-600">Effective Date: <span className="font-semibold">June 17, 2026</span></p>
                                        </div>
                                    </div>
                                </div>

                                {/* Document Body */}
                                <div className="px-8 sm:px-16 py-12">
                                    <div className="max-w-none space-y-10">
                                        {/* Terms Content */}
                                        {TERMS_CONTENT.map((section, index) => (
                                            <section
                                                key={section.id}
                                                id={section.id}
                                                className="scroll-mt-20"
                                            >
                                                <h2 className="text-lg font-bold text-slate-800 mb-4 tracking-wide uppercase">
                                                    {section.title}
                                                </h2>
                                                <div className="text-slate-700 leading-loose text-base" style={{ lineHeight: '1.8', textAlign: 'justify' }}>
                                                    {section.content}
                                                </div>

                                                {/* Divider between sections (except last) */}
                                                {index < TERMS_CONTENT.length - 1 && (
                                                    <hr className="mt-10 border-slate-300" />
                                                )}
                                            </section>
                                        ))}
                                    </div>

                                    {/* Document Footer */}
                                    <div className="mt-20 pt-10 border-t-2 border-slate-400">
                                        <div className="text-center text-sm text-slate-600 space-y-2">
                                            <p className="font-bold text-base text-slate-800">College Produce Inc.</p>
                                            <p className="text-slate-600">123-205 5 AVE SW, Calgary, Alberta T2P 2V7, Canada</p>
                                            <p className="text-slate-600">
                                                Email: <a href="mailto:info@collegeproduce.com" className="text-blue-600 hover:text-blue-800 underline font-medium">info@collegeproduce.com</a>
                                            </p>
                                            <div className="mt-6 pt-4 border-t border-slate-200">
                                                <p className="text-xs text-slate-500">
                                                    Document Version: 2026-06-17 | Page 1 of 1
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Bottom spacing for acceptance footer */}
                            <div className="h-32"></div>
                        </main>
                    </div>
                </div>
            </div>

            {/* Acceptance Footer - Only show if not already accepted */}
            {!hasAccepted && (
                <AcceptanceFooter
                    onAccept={handleAccept}
                    onDecline={handleDecline}
                />
            )}

            {/* Print Styles */}
            <style>{`
        @media print {
          .fixed { display: none !important; }
          nav { break-inside: avoid; }
          section { break-inside: avoid; page-break-inside: avoid; }
          .bg-white { background: white !important; }
          .border { border: 1px solid #e2e8f0 !important; }
          strong { font-weight: 600 !important; }
        }
      `}</style>
        </>
    )
}
