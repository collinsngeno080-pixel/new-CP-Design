import { Facebook, Instagram, Linkedin, MapPin, Phone, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";


export function Footer() {
    const navigate = useNavigate();
    const location = useLocation();

    const handleSectionClick = (sectionId: string) => {
        if (location.pathname !== '/') {
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
            }
        }
    };

    return (
        <footer className="bg-[#2a2a2a] text-white" aria-label="Site footer">
            <div className="max-w-7xl mx-auto px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    {/* Brand Section */}
                    <div>
                        <h3 className="text-2xl font-bold mb-4">College Produce</h3>
                        <p className="text-white/70 text-sm leading-relaxed">
                            College Produce builds automation for the legal industry - tools forged from decades inside real trial workflows. We don't consult. We build.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <nav aria-label="Footer quick links">
                        <h4 className="text-sm font-bold mb-4 tracking-wider">QUICK LINKS</h4>
                        <ul className="space-y-2">
                            <li>
                                <button onClick={() => handleSectionClick('philosophy')} className="text-white/80 hover:text-white transition-colors text-sm text-left">
                                    Philosophy
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleSectionClick('tools')} className="text-white/80 hover:text-white transition-colors text-sm text-left">
                                    Tools
                                </button>
                            </li>
                            <li>
                                <button onClick={() => handleSectionClick('makers')} className="text-white/80 hover:text-white transition-colors text-sm text-left">
                                    Makers
                                </button>
                            </li>
                        </ul>
                    </nav>

                    {/* Contact Info */}
                    <div aria-label="Contact information">
                        <h4 className="text-sm font-bold mb-4 tracking-wider">CONTACT INFO</h4>
                        <ul className="space-y-3">
                            {/* <li className="flex items-start gap-2 text-sm">
                                <MapPin className="w-4 h-4 mt-0.5 flex-shrink-0" aria-hidden="true" />
                                <address className="text-white/80 not-italic leading-relaxed">
                                    339 8TH AVE SW<br />
                                    CALGARY, AB<br />
                                    T2P 1C4 <br />
                                    Canada
                                </address>
                            </li> */}
                            <li className="flex items-center gap-2 text-sm">
                                <Phone className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                                <a href="tel:239-332-3369" className="text-white/80 hover:text-white transition-colors" aria-label="Call 239-332-3369">
                                    239-332-3369
                                </a>
                            </li>
                            <li className="flex items-center gap-2 text-sm">
                                <Mail className="w-4 h-4 flex-shrink-0" aria-hidden="true" />
                                <a href="mailto:info@collegeproduce.com" className="text-white/80 hover:text-white transition-colors" aria-label="Email info@collegeproduce.com">
                                    info@collegeproduce.com
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Social Media */}
                    <div>
                        <h4 className="text-sm font-bold mb-4 tracking-wider">FOLLOW US ON</h4>
                        <div className="flex flex-col gap-3" aria-label="Social media links">
                            <div className="flex gap-3">
                                <a href="https://x.com/collegeproduce" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on X">
                                    <img src="/images/Twitter.png" alt="X" style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                                </a>
                                <a href="https://www.tiktok.com/@collegeproducetools?lang=en-GB" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on TikTok">
                                    <img src="/images/Tiktok.png" alt="TikTok" style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                                </a>
                                <a href="https://www.youtube.com/@CollegeProducetools" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on YouTube">
                                    <img src="/images/Youtube.png" alt="YouTube" style={{ width: 26, height: 26, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                                </a>
                                <a href="https://www.reddit.com/user/CollegeProduce/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on Reddit">
                                    <img src="/images/Reddit.png" alt="Reddit" style={{ width: 26, height: 26, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                                </a>
                            </div>
                            <div className="flex gap-3">
                                <a href="https://web.facebook.com/profile.php?id=61587514605022" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on Facebook">
                                    <Facebook className="w-5 h-5" aria-hidden="true" />
                                </a>
                                <a href="https://www.instagram.com/collegeproducetools" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on Instagram">
                                    <Instagram className="w-5 h-5" aria-hidden="true" />
                                </a>
                                <a href="https://www.linkedin.com/company/112228917/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on LinkedIn">
                                    <Linkedin className="w-5 h-5" aria-hidden="true" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-white/60">
                    <p>© {new Date().getFullYear()} CollegeProduce All Rights Reserved</p>
                    <p>
                        By using this site, you agree to our{" "}
                        <Link to="/terms" className="underline hover:text-white transition-colors">
                            Terms & Conditions
                        </Link>{" "}
                        and{" "}
                        <Link to="/privacy" className="underline hover:text-white transition-colors">
                            Privacy Policy
                        </Link>
                    </p>
                </div>
            </div>
        </footer>
    );
}
