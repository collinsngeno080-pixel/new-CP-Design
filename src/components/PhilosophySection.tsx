import { motion } from "framer-motion";

const philosophyItems = [
    {
        icon: "/images/Tech Icon.png",
        iconSize: 42,
        title: "Start with the real world",
        description: "Technology only matters if it solves an everyday problem.",
    },
    {
        icon: "/images/Human Head Icon.png",
        iconSize: 70,
        title: "Solutions designed around the human",
        description: "Not forced technology.",
    },
    {
        icon: "/images/Keyboard Icon.png",
        iconSize: 50,
        title: "Craft meets code",
        description: "We still build by hand and test every feature in the real world.",
    },
];

export function PhilosophySection() {
    return (
        <section id="philosophy" className="py-20 bg-background overflow-hidden">
            <div className="max-w-7xl mx-auto px-6">
                <motion.h2
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="text-center text-2xl font-semibold text-muted-foreground mb-10"
                >
                    Three Pillars
                </motion.h2>

                <div className="flex flex-wrap md:flex-nowrap justify-center gap-6">
                    {philosophyItems.map((item, index) => (
                        <motion.div
                            key={item.title}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className="flex flex-col text-center bg-white w-full md:w-[364px] min-h-[280px] rounded-[23px] shrink-0 overflow-hidden"
                            style={{ boxShadow: "0px 3px 10px rgba(0,0,0,0.08)" }}
                        >
                            <div className="relative bg-[#E7E3DA] pt-8 pb-9 flex justify-center">
                                <div className="w-16 h-16 rounded-full border-2 border-[#3F6B3B] flex items-center justify-center bg-transparent">
                                    <img
                                        src={item.icon}
                                        alt={item.title}
                                        className="object-contain"
                                        style={{ width: `${item.iconSize}px`, height: `${item.iconSize}px` }}
                                    />
                                </div>
                                <div
                                    className="absolute -bottom-4 left-1/2 -translate-x-1/2"
                                    style={{
                                        width: 0,
                                        height: 0,
                                        borderLeft: "18px solid transparent",
                                        borderRight: "18px solid transparent",
                                        borderTop: "18px solid #E7E3DA",
                                    }}
                                />
                            </div>
                            <div className="flex-1 flex flex-col items-center px-6 pt-7 pb-8">
                                <h3 className="font-bold text-lg mb-2 text-[#3F6B3B]">{item.title}</h3>
                                <p className="text-sm text-muted-foreground">{item.description}</p>
                                <div className="flex items-center gap-2 mt-auto pt-6">
                                    <div className="w-10 h-px bg-[#3F6B3B]/50" />
                                    <div className="w-1.5 h-1.5 rounded-full bg-[#3F6B3B]" />
                                    <div className="w-10 h-px bg-[#3F6B3B]/50" />
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
