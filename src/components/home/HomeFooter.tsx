import { Phone, Mail } from "lucide-react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";

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
            <div className="max-w-[1400px] mx-auto px-6 py-10">
                <div className="flex flex-col md:flex-row gap-10 items-center">
                    <div className="shrink-0">
                        <img src="/images/Footer logo (2).png" alt="College Produce" className="h-24 w-auto" />
                    </div>

                    <div className="text-center flex-1 min-w-0">
                        <h2
                            className="mb-2 whitespace-nowrap"
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 500,
                                fontSize: "clamp(22px, 2.6vw, 44px)",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                color: "#FFFFFF",
                            }}
                        >
                            Get back to the work that matters.
                        </h2>
                        <p
                            className="mb-6 whitespace-nowrap"
                            style={{
                                fontFamily: "Montserrat, sans-serif",
                                fontWeight: 300,
                                fontStyle: "italic",
                                fontSize: "clamp(14px, 1.4vw, 24px)",
                                lineHeight: "100%",
                                letterSpacing: "0%",
                                color: "#FFFFFF",
                            }}
                        >
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

                    <div className="shrink-0 md:text-right" aria-label="Contact information">
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
