import { motion } from "framer-motion";

export default function LoadingOverlay() {
    return (
        <motion.div
            className="fixed inset-0 z-50 bg-black/20 backdrop-blur-[1px] flex items-center justify-center px-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
        >
            <motion.div
                className="bg-white rounded-2xl shadow-xl border border-gray-100 px-6 py-5"
                initial={{ opacity: 0, scale: 0.96, y: 8 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.2 }}
            >
                <p className="text-base md:text-lg text-text font-semibold text-center">
                    Abriendo el contenido...
                </p>
            </motion.div>
        </motion.div>
    );
}