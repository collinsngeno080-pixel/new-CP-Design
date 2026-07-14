import { motion } from "framer-motion";

const philosophyItems = [
    {
        icon: "/images/Bulb Icon.png",
        title: "Start with the real world",
        description: "Technology only matters if it solves an everyday problem.",
    },
    {
        icon: "/images/Human Icon.png",
        title: "Solutions designed around the human",
        description: "Not forced technology.",
    },
    {
        icon: "/images/Hammer Icon.png",
        title: "Craft meets code",
        description: "We still build by hand and test every feature in the real world.",
        flip: true,
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
                            className="flex flex-col items-center text-center bg-white p-8 w-full md:w-[364px] h-[257px] rounded-[23px] shrink-0"
                            style={{
                                boxShadow: "0px 3px 10px rgba(0,0,0,0.08)",
                            }}
                        >
                            <img
                                src={item.icon}
                                alt={item.title}
                                className="w-10 h-10 mb-4 object-contain"
                                style={item.flip ? { transform: "scaleX(-1)" } : undefined}
                            />
                            <h3 className="font-bold text-base mb-2 text-[#3F6B3B]">{item.title}</h3>
                            <p className="text-muted-foreground text-sm leading-relaxed">{item.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
