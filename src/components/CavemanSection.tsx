import { motion } from "framer-motion";
import cavemanMark from "@/assets/images/caveman-mark.png";

export function CavemanSection() {
    return (
        <section className="pt-4 pb-20">
            <div className="max-w-6xl mx-auto px-6">
                <div className="rounded-3xl overflow-hidden bg-[#F3F3F3]">
                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="relative overflow-hidden text-center px-8 pt-10 pb-10"
                    >
                        <img
                            src="/images/Grains.png"
                            alt=""
                            aria-hidden="true"
                            className="absolute left-0 top-0 h-full w-auto opacity-20"
                        />
                        <div className="relative z-10">
                            <h2
                                className="mb-4"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "40px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    textAlign: "center",
                                    color: "#3C7D3C",
                                }}
                            >
                                The gap we fill
                            </h2>
                            <p
                                className="mb-4"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 600,
                                    fontSize: "22px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    textAlign: "center",
                                    color: "#000000",
                                }}
                            >
                                The part of the work that still happens with your hands.
                            </p>
                            <p
                                className="max-w-4xl mx-auto"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 300,
                                    fontSize: "16px",
                                    lineHeight: "150%",
                                    letterSpacing: "0%",
                                    textAlign: "left",
                                    color: "#000000",
                                }}
                            >
                                Legal technology is racing to automate the intellectual work - research, drafting, analysis. Almost none of it touches the physical work that still has to happen every time: the exhibits, the labels, the tabs, the binders. That work isn't going away as fast as everyone assumes. We build the tools for it, so your team spends less time on the repetitive parts and more time on the case.
                            </p>
                            <div className="w-32 h-0.5 bg-[#3C7D3C] mx-auto mt-6" />
                        </div>
                    </motion.div>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6, delay: 0.1 }}
                        className="grid md:grid-cols-2 gap-8 items-center px-8 py-10"
                        style={{ backgroundColor: "#EAE8E4" }}
                    >
                        <img
                            src={cavemanMark}
                            alt="Caveman pushing a cart of stones"
                            className="w-full max-w-sm mx-auto"
                        />
                        <div className="border-l border-[#B33A2E] pl-6 py-5">
                            <blockquote
                                className="mb-6"
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 600,
                                    fontStyle: "italic",
                                    fontSize: "24px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    color: "#850000",
                                }}
                            >
                                "It's not automation. It's evolution."
                            </blockquote>
                            <p
                                style={{
                                    fontFamily: "Montserrat, sans-serif",
                                    fontWeight: 400,
                                    fontSize: "18px",
                                    lineHeight: "100%",
                                    letterSpacing: "0%",
                                    color: "#000000",
                                    textAlign: "center",
                                }}
                            >
                                College Produce was founded on that instinct-simple ideas, carefully made.
                            </p>
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
