import { motion } from "framer-motion";

export function ExhibitAlignAnimation() {
    return (
        <div className="relative w-full h-80 md:h-96 flex items-center justify-center">
            {/* Background grid */}
            <div className="absolute inset-0 opacity-10">
                <div className="w-full h-full" style={{
                    backgroundImage: 'linear-gradient(to right, rgb(249 115 22) 1px, transparent 1px), linear-gradient(to bottom, rgb(249 115 22) 1px, transparent 1px)',
                    backgroundSize: '40px 40px'
                }} />
            </div>

            {/* Exhibit documents container */}
            <div className="relative w-64 h-56">
                {/* Document 1 - starts misaligned */}
                <motion.div
                    className="absolute w-16 h-20 bg-white rounded-lg shadow-lg border-l-4 border-orange-500"
                    initial={{ x: -20, y: 10, rotate: -15 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                    }}
                    style={{ left: '10%', top: '10%' }}
                >
                    <div className="p-2">
                        <div className="text-[8px] font-bold text-orange-500">EX-001</div>
                        <div className="mt-1 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-3/4" />
                            <div className="h-1 bg-gray-200 rounded w-5/6" />
                        </div>
                    </div>
                </motion.div>

                {/* Document 2 */}
                <motion.div
                    className="absolute w-16 h-20 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
                    initial={{ x: 30, y: -15, rotate: 12 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.3,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                    }}
                    style={{ left: '35%', top: '10%' }}
                >
                    <div className="p-2">
                        <div className="text-[8px] font-bold text-blue-500">EX-002</div>
                        <div className="mt-1 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                            <div className="h-1 bg-gray-200 rounded w-4/5" />
                        </div>
                    </div>
                </motion.div>

                {/* Document 3 */}
                <motion.div
                    className="absolute w-16 h-20 bg-white rounded-lg shadow-lg border-l-4 border-orange-500"
                    initial={{ x: 15, y: 20, rotate: 8 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.6,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                    }}
                    style={{ left: '60%', top: '10%' }}
                >
                    <div className="p-2">
                        <div className="text-[8px] font-bold text-orange-500">EX-003</div>
                        <div className="mt-1 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-5/6" />
                            <div className="h-1 bg-gray-200 rounded w-1/2" />
                        </div>
                    </div>
                </motion.div>

                {/* Document 4 */}
                <motion.div
                    className="absolute w-16 h-20 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
                    initial={{ x: -25, y: -10, rotate: -10 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 1.9,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                    }}
                    style={{ left: '10%', top: '55%' }}
                >
                    <div className="p-2">
                        <div className="text-[8px] font-bold text-blue-500">EX-004</div>
                        <div className="mt-1 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-3/4" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                        </div>
                    </div>
                </motion.div>

                {/* Document 5 */}
                <motion.div
                    className="absolute w-16 h-20 bg-white rounded-lg shadow-lg border-l-4 border-orange-500"
                    initial={{ x: 20, y: 25, rotate: 15 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 2.2,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                    }}
                    style={{ left: '35%', top: '55%' }}
                >
                    <div className="p-2">
                        <div className="text-[8px] font-bold text-orange-500">EX-005</div>
                        <div className="mt-1 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-4/5" />
                            <div className="h-1 bg-gray-200 rounded w-3/4" />
                        </div>
                    </div>
                </motion.div>

                {/* Document 6 */}
                <motion.div
                    className="absolute w-16 h-20 bg-white rounded-lg shadow-lg border-l-4 border-blue-500"
                    initial={{ x: -10, y: 30, rotate: -8 }}
                    animate={{ x: 0, y: 0, rotate: 0 }}
                    transition={{
                        duration: 0.8,
                        delay: 2.5,
                        ease: "easeOut",
                        repeat: Infinity,
                        repeatDelay: 4
                    }}
                    style={{ left: '60%', top: '55%' }}
                >
                    <div className="p-2">
                        <div className="text-[8px] font-bold text-blue-500">EX-006</div>
                        <div className="mt-1 space-y-1">
                            <div className="h-1 bg-gray-200 rounded w-full" />
                            <div className="h-1 bg-gray-200 rounded w-2/3" />
                            <div className="h-1 bg-gray-200 rounded w-5/6" />
                        </div>
                    </div>
                </motion.div>

                {/* Digital Arm */}
                <motion.div
                    className="absolute z-20"
                    initial={{ x: 200, y: -50 }}
                    animate={{
                        x: [200, 50, 100, 150, 50, 100, 150, 200],
                        y: [-50, 20, 20, 20, 100, 100, 100, -50]
                    }}
                    transition={{
                        duration: 5,
                        ease: "easeInOut",
                        repeat: Infinity,
                        repeatDelay: 0.5
                    }}
                >
                    {/* Arm base */}
                    <motion.div
                        className="relative"
                        animate={{ rotate: [0, -5, 5, -5, 5, -5, 5, 0] }}
                        transition={{
                            duration: 5,
                            ease: "easeInOut",
                            repeat: Infinity,
                            repeatDelay: 0.5
                        }}
                    >
                        {/* Arm segment */}
                        <div className="w-20 h-3 bg-gradient-to-r from-orange-500 to-orange-500/80 rounded-full shadow-md" />

                        {/* Joint */}
                        <div className="absolute -right-1 -top-1 w-5 h-5 bg-orange-500 rounded-full shadow-lg flex items-center justify-center">
                            <div className="w-2 h-2 bg-white rounded-full" />
                        </div>

                        {/* Gripper */}
                        <motion.div
                            className="absolute -right-4 top-1/2 -translate-y-1/2"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{
                                duration: 0.5,
                                repeat: Infinity,
                                repeatDelay: 0.3
                            }}
                        >
                            <div className="flex gap-0.5">
                                <div className="w-1.5 h-4 bg-gray-600 rounded-full transform -rotate-12" />
                                <div className="w-1.5 h-4 bg-gray-600 rounded-full transform rotate-12" />
                            </div>
                        </motion.div>

                        {/* Connection line to off-screen */}
                        <div className="absolute -left-16 top-1/2 -translate-y-1/2 w-16 h-2 bg-gradient-to-l from-orange-500/80 to-transparent rounded-full" />
                    </motion.div>
                </motion.div>

                {/* Alignment guides that appear */}
                <motion.div
                    className="absolute inset-0 pointer-events-none"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: [0, 0, 1, 1, 0] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 0.5
                    }}
                >
                    {/* Vertical guides */}
                    <div className="absolute left-[18%] top-0 bottom-0 w-px bg-orange-500/30" style={{ height: '100%' }} />
                    <div className="absolute left-[43%] top-0 bottom-0 w-px bg-orange-500/30" style={{ height: '100%' }} />
                    <div className="absolute left-[68%] top-0 bottom-0 w-px bg-orange-500/30" style={{ height: '100%' }} />

                    {/* Horizontal guides */}
                    <div className="absolute top-[20%] left-0 right-0 h-px bg-orange-500/30" />
                    <div className="absolute top-[65%] left-0 right-0 h-px bg-orange-500/30" />
                </motion.div>

                {/* Success checkmark */}
                <motion.div
                    className="absolute -bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-2"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: [0, 0, 0, 1, 1, 0], y: [10, 10, 10, 0, 0, 10] }}
                    transition={{
                        duration: 5,
                        repeat: Infinity,
                        repeatDelay: 0.5
                    }}
                >
                    <div className="w-5 h-5 bg-green-500 rounded-full flex items-center justify-center">
                        <svg className="w-3 h-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                    </div>
                    <span className="text-sm font-medium text-gray-600">Aligned</span>
                </motion.div>
            </div>
        </div>
    );
}
