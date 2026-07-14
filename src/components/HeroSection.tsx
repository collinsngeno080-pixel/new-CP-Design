import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useNavigate, useLocation } from "react-router-dom";

export function HeroSection() {
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
        <section className="pt-32 pb-20 text-center" style={{ backgroundColor: "#C4B4AB17" }}>
            <div className="max-w-5xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6 }}
                >
                    <h1
                        className="mb-6 text-center"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 700,
                            fontSize: "55px",
                            lineHeight: "62px",
                            letterSpacing: "-0.04em",
                            color: "#905B35",
                        }}
                    >
                        Precision automation, forged in the trenches of trial work.
                    </h1>
                    <p
                        className="mb-8 max-w-2xl mx-auto text-center"
                        style={{
                            fontFamily: "Montserrat, sans-serif",
                            fontWeight: 400,
                            fontSize: "19px",
                            lineHeight: "28px",
                            color: "#000000",
                        }}
                    >
                        Your team knows this work. We built the tools that handle the repetitive parts, so your time goes to the case-built by people who've done it for decades.
                    </p>
                    <Button
                        size="lg"
                        onClick={() => handleSectionClick('tools')}
                        className="rounded-full bg-[#3F6B3B] text-white hover:bg-[#345a31] shadow-md hover:shadow-lg px-8"
                    >
                        Explore the tools
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
