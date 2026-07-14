import { Phone, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CollegeProduceLogo from "@/assets/college_produce_logo.png";

export function HomeFooter() {
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
        <footer className="bg-[#262B3D] text-white" aria-label="Site footer">
            <div className="max-w-6xl mx-auto px-6 py-10">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-10 items-center">
                    <div>
                        <img src={CollegeProduceLogo} alt="College Produce" className="h-20 mb-3" />
                    </div>

                    <div className="text-center">
                        <h2 className="text-2xl font-bold mb-2">
                            Get back to the work that matters.
                        </h2>
                        <p className="italic text-white/70 mb-6">
                            Built where the work happens.
                        </p>
                        <Button
                            size="lg"
                            variant="outline"
                            onClick={() => handleSectionClick('tools')}
                            className="rounded-full border-2 border-white/60 bg-transparent text-white hover:bg-white hover:text-[#262B3D]"
                        >
                            See all tools
                        </Button>
                    </div>

                    <div className="md:text-right" aria-label="Contact information">
                        <h4 className="text-sm font-bold mb-3 tracking-wider text-white/80">CONTACT INFO</h4>
                        <ul className="space-y-2 md:flex md:flex-col md:items-end">
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
                        <div className="flex gap-3 mt-4 md:justify-end" aria-label="Social media links">
                            <a href="https://x.com/collegeproduce" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on X">
                                <img src="/images/Twitter.png" alt="X" style={{ width: 16, height: 16, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            </a>
                            <a href="https://www.youtube.com/@CollegeProducetools" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on YouTube">
                                <img src="/images/Youtube.png" alt="YouTube" style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            </a>
                            <a href="https://www.tiktok.com/@collegeproducetools?lang=en-GB" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on TikTok">
                                <img src="/images/Tiktok.png" alt="TikTok" style={{ width: 16, height: 16, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            </a>
                            <a href="https://www.reddit.com/user/CollegeProduce/" target="_blank" rel="noopener noreferrer" className="w-9 h-9 rounded-full bg-white/10 hover:bg-white/20 flex items-center justify-center transition-colors" aria-label="Visit College Produce on Reddit">
                                <img src="/images/Reddit.png" alt="Reddit" style={{ width: 20, height: 20, objectFit: 'contain', filter: 'brightness(0) invert(1)' }} />
                            </a>
                        </div>
                    </div>
                </div>

                <div className="border-t border-white/10 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/50">
                    <p>© {new Date().getFullYear()} College Produce. All Rights Reserved.</p>
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
