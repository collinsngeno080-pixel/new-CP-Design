import { motion } from "framer-motion";
import { Link } from "react-router-dom";

import exhibitProLogo from "@/assets/images/exhibit_pro_logo.png";
import fileLabelProLogo from "@/assets/images/fl-logo.png";
import copierTabsProLogo from "@/assets/images/ct-logo.png";

const tools = [
    {
        name: "ExhibitPro",
        logo: exhibitProLogo,
        description: "Exhibit labels and tabs, ready to assemble into your set.",
        cta: "Try exhibit pro",
        link: "/exhibitpro",
    },
    {
        name: "File labelPro",
        logo: fileLabelProLogo,
        description: "Exhibit labels and tabs, ready to assemble into your set.",
        cta: "Try file label pro",
        link: "/file-labelpro",
    },
    {
        name: "Copier tabsPro",
        logo: copierTabsProLogo,
        logoWidth: 115,
        description: "File names to print-ready tabs.",
        cta: "Try copier tabs pro",
        link: "/copier-tabspro",
    },
];

export function ToolsSection() {
    return (
        <section id="tools" className="py-20 bg-background">
            <div className="max-w-7xl mx-auto px-6">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-2xl md:text-3xl font-bold mb-2">
                        Explore the College Produce Tools
                    </h2>
                    <p className="text-muted-foreground">
                        Built where the work happens.
                    </p>
                </motion.div>

                <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
                    {tools.map((tool, index) => (
                        <motion.div
                            key={tool.name}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="bg-white p-8 flex flex-col w-full md:w-[364px] h-[370px] rounded-[23px] shrink-0"
                            style={{ boxShadow: "0px 3px 10px rgba(0,0,0,0.08)" }}
                        >
                            <img
                                src={tool.logo}
                                alt={tool.name}
                                className="mx-auto mb-6 object-contain"
                                style={{ width: `${tool.logoWidth ?? 150}px`, height: "110px" }}
                            />
                            <p
                                className="mb-6 flex-1"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    color: "#000000",
                                }}
                            >
                                {tool.description}
                            </p>
                            <Link to={tool.link} className="mx-auto">
                                <button
                                    className="text-white font-semibold hover:opacity-90 transition-opacity"
                                    style={{
                                        width: "201px",
                                        height: "44px",
                                        borderRadius: "22px",
                                        backgroundColor: "#263550",
                                    }}
                                >
                                    {tool.cta}
                                </button>
                            </Link>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
