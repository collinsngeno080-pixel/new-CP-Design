import { Footer } from '@/components/Footer'
import { Header } from '@/components/Header'
import { motion } from 'framer-motion'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { Textarea } from '@/components/ui/textarea'
import { Mail, Phone, MapPin, Loader2, CheckCircle } from 'lucide-react'
import React, { useState, useEffect } from 'react'
import { useScrollToTop } from '@/hooks/useScrollToTop'
import { updateSEO, SEO_CONFIGS, addStructuredData } from '@/lib/seo'

interface FormData {
    firstName: string
    lastName: string
    email: string
    phone: string
    message: string
}

function Contact() {
    const [formData, setFormData] = useState<FormData>({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        message: ''
    })

    const [status, setStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle')

    useScrollToTop()

    useEffect(() => {
        // Update meta tags for SEO
        updateSEO(SEO_CONFIGS.contact);

        // Add ContactPage structured data
        addStructuredData({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "name": "Contact College Produce",
            "description": "Contact College Produce for exhibit management solutions and legal support.",
            "url": "https://collegeproduce.com/contact",
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
                        "name": "Contact",
                        "item": "https://collegeproduce.com/contact"
                    }
                ]
            },
            "mainEntity": {
                "@type": "Organization",
                "name": "College Produce",
                "url": "https://collegeproduce.com",
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+1-239-332-3369",
                    "email": "info@collegeproduce.com",
                    "contactType": "Customer Service",
                    "areaServed": "US",
                    "availableLanguage": "English"
                },
                "address": {
                    "@type": "PostalAddress",
                    "streetAddress": "339 8TH AVE SW",
                    "addressLocality": "Calgary",
                    "addressRegion": "AB",
                    "postalCode": "T2P 1C4",
                    "addressCountry": "CA"
                }
            }
        });
    }, []);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setFormData(prev => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus('loading')

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            })

            if (!response.ok) throw new Error('Failed to send')

            setStatus('success')
            setFormData({ firstName: '', lastName: '', email: '', phone: '', message: '' })
        } catch (error) {
            console.error(error)
            setStatus('error')
        }
    }

    return (
        <div className='min-h-screen'>
            <Header />

            <main id="main-content" role="main" aria-label="Contact page content">
                {/* Hero Section - Contact Variant */}
                <section className="pt-32 pb-24 gradient-hero text-primary-foreground">
                    <div className="max-w-7xl mx-auto px-6">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                            className="text-center mb-16"
                        >
                            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
                                Your Case Deserves Immediate Support!
                            </h1>
                            <p className="text-lg text-primary-foreground/80 max-w-4xl mx-auto">
                                At College Produce, connecting with our team is always simple, secure, and supported 24/7. <br /> From contact to execution, you have our team to support you.
                            </p>
                        </motion.div>

                        <div className="grid gap-12 justify-center items-center">
                            {/* Left - Contact Form */}
                            <motion.div
                                initial={{ opacity: 0, x: -30 }}
                                animate={{ opacity: 1, x: 0 }}
                                transition={{ duration: 0.6, delay: 0.2 }}
                                className="bg-white/95 backdrop-blur-sm rounded-3xl p-8 shadow-xl"
                            >
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Reach Us</h2>

                                {status === 'success' ? (
                                    <div className="bg-green-50 border border-green-200 rounded-xl p-8 text-center">
                                        <CheckCircle className="w-16 h-16 text-green-500 mx-auto mb-4" />
                                        <h3 className="text-xl font-bold text-green-800 mb-2">Message Sent!</h3>
                                        <p className="text-green-700">Thank you for reaching out. Our support team will review your inquiry shortly.</p>
                                        <Button
                                            onClick={() => setStatus('idle')}
                                            variant="outline"
                                            className="mt-6 border-green-200 text-green-700 hover:bg-green-100"
                                        >
                                            Send Another Message
                                        </Button>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    First Name <span className="text-red-500">*</span>
                                                </label>
                                                <Input
                                                    id="firstName"
                                                    name="firstName"
                                                    value={formData.firstName}
                                                    onChange={handleChange}
                                                    required
                                                    type="text"
                                                    placeholder="First Name"
                                                    className="bg-gray-50"
                                                    aria-label="First name"
                                                    aria-required="true"
                                                />
                                            </div>
                                            <div>
                                                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                                                    Last Name <span className="text-red-500">*</span>
                                                </label>
                                                <Input
                                                    id="lastName"
                                                    name="lastName"
                                                    value={formData.lastName}
                                                    onChange={handleChange}
                                                    required
                                                    type="text"
                                                    placeholder="Last Name"
                                                    className="bg-gray-50"
                                                    aria-label="Last name"
                                                    aria-required="true"
                                                />
                                            </div>
                                        </div>

                                        <div>
                                            <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                                                Company Email Address <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleChange}
                                                required
                                                type="email"
                                                placeholder="Company Email Address"
                                                className="bg-gray-50"
                                                aria-label="Company email address"
                                                aria-required="true"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                                                Contact Number <span className="text-red-500">*</span>
                                            </label>
                                            <Input
                                                id="phone"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleChange}
                                                required
                                                type="tel"
                                                placeholder="Contact Number"
                                                className="bg-gray-50"
                                                aria-label="Contact phone number"
                                                aria-required="true"
                                            />
                                        </div>

                                        <div>
                                            <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                                                Message
                                            </label>
                                            <Textarea
                                                id="message"
                                                name="message"
                                                value={formData.message}
                                                onChange={handleChange}
                                                placeholder="Your message..."
                                                rows={4}
                                                className="bg-gray-50 resize-none"
                                                aria-label="Message content"
                                            />
                                        </div>

                                        <div className="space-y-3">
                                            <label className="flex items-start gap-2 cursor-pointer">
                                                <input type="checkbox" className="mt-1" />
                                                <span className="text-sm text-gray-600">
                                                    I agree to receive newsletter and updates from College Produce.
                                                </span>
                                            </label>

                                            <label className="flex items-start gap-2 cursor-pointer">
                                                <input type="checkbox" className="mt-1" required />
                                                <span className="text-sm text-gray-600">
                                                    I have read, understood, and accepted the{' '}
                                                    <a href="https://exhibitpro.collegeproduce.com/terms" target='_blank' className="text-blue-600 hover:underline">Terms & Conditions</a>
                                                    {' '}and{' '}
                                                    <a href="https://exhibitpro.collegeproduce.com/terms" target='_blank' className="text-blue-600 hover:underline">Privacy Policy</a>
                                                </span>
                                            </label>
                                        </div>

                                        {status === 'error' && (
                                            <div className="text-red-500 text-sm bg-red-50 p-3 rounded">
                                                Something went wrong. Please try again or call us directly.
                                            </div>
                                        )}

                                        <Button
                                            type="submit"
                                            disabled={status === 'loading'}
                                            className="w-full bg-green-700 hover:bg-green-800 text-white rounded-full py-6"
                                            size="lg"
                                        >
                                            {status === 'loading' ? (
                                                <>
                                                    <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                                                    Sending...
                                                </>
                                            ) : (
                                                'Submit Inquiry'
                                            )}
                                        </Button>
                                    </form>
                                )}
                            </motion.div>

                            {/* Right - Contact Info & Map */}

                        </div>
                    </div>
                </section>
            </main>

            <Footer />
        </div>
    )
}

export default Contact
