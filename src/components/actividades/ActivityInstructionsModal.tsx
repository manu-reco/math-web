"use client";

import { ReactNode, useEffect, useId, useState } from "react";
import { CircleHelp, X } from "lucide-react";
import ExpandingFab from "../ExpandingFab";
import { AnimatePresence, motion } from "motion/react";

interface ActivityInstructionsModalProps {
    title?: string;
    children: ReactNode;
}

export default function ActivityInstructionsModal({
    title,
    children,
}: ActivityInstructionsModalProps) {
    const [isOpen, setIsOpen] = useState(true);
    const titleId = useId();

    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsOpen(false);
            }
        };

        document.body.style.overflow = "hidden";
        window.addEventListener("keydown", handleKeyDown);

        return () => {
            document.body.style.overflow = "";
            window.removeEventListener("keydown", handleKeyDown);
        };
    }, [isOpen]);

    return (
        <>
            <ExpandingFab
                top={5}
                right={1}
                icon={CircleHelp}
                label="Instrucciones"
                onClick={() => setIsOpen(true)}
                ariaLabel="Abrir instrucciones"
            />

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="fixed inset-0 top-10 z-40 flex items-center justify-center bg-black/45 p-4 sm:p-6"
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby={titleId}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                    >
                        <motion.div
                            className="relative w-full max-w-4xl max-h-[85vh] rounded-2xl bg-white shadow-2xl p-6 sm:p-8"
                            initial={{ opacity: 0, y: 20, scale: 0.98 }}
                            animate={{ opacity: 1, y: 0, scale: 1 }}
                            exit={{ opacity: 0, y: 16, scale: 0.98 }}
                            transition={{ duration: 0.25, ease: "easeOut" }}
                        >
                            <button
                                type="button"
                                onClick={() => setIsOpen(false)}
                                className="absolute top-2 right-2 rounded-md p-2 text-text-secondary hover:bg-gray-100 transition-colors"
                                aria-label="Cerrar instrucciones"
                            >
                                <X size={18} />
                            </button>
                            <div className="w-full max-w-4xl max-h-[75vh] overflow-y-auto p-6">
                                <div className="pr-10">
                                    <h2 id={titleId} className="text-2xl sm:text-3xl font-bold mb-6">
                                        {title || "Instrucciones"}
                                    </h2>
                                    <div className="space-y-6 text-base sm:text-lg">
                                        {children}
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <button
                                        className="px-8 py-4 bg-primary hover:bg-primary-hover text-white font-bold text-lg rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl hover:-translate-y-0.5"
                                        onClick={() => setIsOpen(false)}
                                    >
                                        Entendido
                                    </button>
                                </div>
                            </div>
                        </motion.div>
                    </motion.div>
                )}
            </AnimatePresence>
        </>
    );
}
