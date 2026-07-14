import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import CollegeProduceLogo from "@/assets/college_produce_logo.png";
import { Link, useNavigate, useLocation } from "react-router-dom";

export function Header() {
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
                // Close menu after scroll starts
                setTimeout(() => setMobileMenuOpen(false), 300);
            }
        }
    };

    return (
        <header className="fixed top-0 w-full z-50 bg-card/95 backdrop-blur-sm shadow-sm">
            <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">
                <Link to="/" className="font-bold text-lg flex items-center gap-2" aria-label="College Produce home">
                    <img src={CollegeProduceLogo} alt="College Produce Logo" className="h-12" />
                </Link>

                <nav className="hidden md:flex gap-8 items-center" aria-label="Main navigation">
                    <button
                        onClick={() => handleSectionClick('philosophy')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Go to philosophy section"
                    >
                        Philosophy
                    </button>
                    <button
                        onClick={() => handleSectionClick('tools')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Go to tools section"
                    >
                        Tools
                    </button>
                    <button
                        onClick={() => handleSectionClick('makers')}
                        className="text-muted-foreground hover:text-foreground transition-colors"
                        aria-label="Go to makers section"
                    >
                        Makers
                    </button>
                    <Link to="/contact">
                        <Button variant="heroOutline" className="border-primary text-muted-foreground hover:border-primary/80 hover:text-foreground transition-colors" aria-label="Open contact page">Contact</Button>
                    </Link>
                    <Link to="/exhibitpro" >
                        <Button aria-label="Open ExhibitPro Page">Try ExhibitPro</Button>
                    </Link>
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
                        className="md:hidden bg-card border-t border-border"
                        id="mobile-menu"
                    >
                        <nav className="flex flex-col p-6 gap-4" aria-label="Mobile navigation">
                            <button
                                onClick={() => handleSectionClick('philosophy')}
                                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Go to philosophy section"
                            >
                                Philosophy
                            </button>
                            <button
                                onClick={() => handleSectionClick('tools')}
                                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Go to tools section"
                            >
                                Tools
                            </button>
                            <button
                                onClick={() => handleSectionClick('makers')}
                                className="text-left text-muted-foreground hover:text-foreground transition-colors"
                                aria-label="Go to makers section"
                            >
                                Makers
                            </button>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full" aria-label="Open contact page">Contact</Button>
                            </Link>
                            <Link to="/contact" onClick={() => setMobileMenuOpen(false)}>
                                <Button className="w-full" aria-label="Open contact page">Contact</Button>
                            </Link>
                        </nav>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    );
}
