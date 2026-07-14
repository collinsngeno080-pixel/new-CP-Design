import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";
import CollegeProduceLogo from "@/assets/college_produce_logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

const FacebookSolid = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 512 512" fill="currentColor" className={className} aria-hidden="true">
        <path d="M504 256C504 119 393 8 256 8S8 119 8 256c0 123.78 90.69 226.38 209.25 245V327.69h-63V256h63v-54.64c0-62.15 37-96.48 93.67-96.48 27.14 0 55.52 4.84 55.52 4.84v61h-31.28c-30.8 0-40.41 19.12-40.41 38.73V256h68.78l-11 71.69h-57.78V501C413.31 482.38 504 379.78 504 256z" />
    </svg>
);

const InstagramSolid = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 448 512" fill="currentColor" className={className} aria-hidden="true">
        <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM398.8 388c-7.8 19.6-22.9 34.7-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-19.6-7.8-34.7-22.9-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c7.8-19.6 22.9-34.7 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c19.6 7.8 34.7 22.9 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z" />
    </svg>
);

const LinkedinSolid = ({ className }: { className?: string }) => (
    <svg viewBox="0 0 24 24" fill="currentColor" className={className} aria-hidden="true">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
    </svg>
);

export function HomeHeader() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();

    const handleSectionClick = (sectionId: string) => {
        if (location.pathname !== '/') {
            setMobileMenuOpen(false);
            navigate('/');
            setTimeout(() => {
                const element = document.getElementById(sectionId);
                if (element) {
                    element.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        } else {
            const element = document.getElementById(sectionId);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
                setTimeout(() => setMobileMenuOpen(false), 300);
            }
        }
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-white/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link to="/" className="flex items-center gap-2" aria-label="College Produce home">
                    <img src={CollegeProduceLogo} alt="College Produce Logo" className="h-16" />
                </Link>

                <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
                    <button
                        onClick={() => handleSectionClick('tools')}
                        className="text-muted-foreground hover:text-foreground transition-colors text-sm"
                        aria-label="Go to tools section"
                    >
                        Tools
                    </button>
                    <Link to="/contact" className="text-muted-foreground hover:text-foreground transition-colors text-sm" aria-label="Open contact page">
                        Contact
                    </Link>
                    <div className="flex items-center gap-3 pl-2 border-l border-border">
                        <a href="https://web.facebook.com/profile.php?id=61587514605022" target="_blank" rel="noopener noreferrer" aria-label="Visit College Produce on Facebook" className="text-[#905B35] hover:opacity-75 transition-opacity">
                            <FacebookSolid className="w-6 h-6" />
                        </a>
                        <a href="https://www.instagram.com/collegeproducetools" target="_blank" rel="noopener noreferrer" aria-label="Visit College Produce on Instagram" className="text-[#905B35] hover:opacity-75 transition-opacity">
                            <InstagramSolid className="w-6 h-6" />
                        </a>
                        <a href="https://www.linkedin.com/company/112228917/" target="_blank" rel="noopener noreferrer" aria-label="Visit College Produce on LinkedIn" className="text-[#905B35] hover:opacity-75 transition-opacity">
                            <LinkedinSolid className="w-6 h-6" />
                        </a>
                    </div>
                </nav>

                <button
                    className="md:hidden p-2"
                    onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    aria-label={mobileMenuOpen ? "Close mobile menu" : "Open mobile menu"}
                    aria-expanded={mobileMenuOpen}
                    aria-controls="mobile-menu"
                >
                    {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>
            </div>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-t border-border"
                        id="mobile-menu"
                    >
                        <nav className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
                            <button
                                onClick={() => handleSectionClick('tools')}
                                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Go to tools section"
                            >
                                Tools
                            </button>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)} className="text-left text-muted-foreground hover:text-foreground transition-colors">
                                Contact
                            </Link>
                            <div className="flex items-center gap-4 pt-2">
                                <a href="https://web.facebook.com/profile.php?id=61587514605022" target="_blank" rel="noopener noreferrer" aria-label="Visit College Produce on Facebook" className="text-[#905B35] hover:opacity-75 transition-opacity">
                                    <FacebookSolid className="w-6 h-6" />
                                </a>
                                <a href="https://www.instagram.com/collegeproducetools" target="_blank" rel="noopener noreferrer" aria-label="Visit College Produce on Instagram" className="text-[#905B35] hover:opacity-75 transition-opacity">
                                    <InstagramSolid className="w-6 h-6" />
                                </a>
                                <a href="https://www.linkedin.com/company/112228917/" target="_blank" rel="noopener noreferrer" aria-label="Visit College Produce on LinkedIn" className="text-[#905B35] hover:opacity-75 transition-opacity">
                                    <LinkedinSolid className="w-6 h-6" />
                                </a>
                            </div>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
