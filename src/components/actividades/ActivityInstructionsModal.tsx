"use client";

import { ReactNode, useEffect, useId, useState } from "react";
import { CircleHelp, X } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ActivityInstructionsModalProps {
    title: string;
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
            <button
                type="button"
                onClick={() => setIsOpen(true)}
                className="fixed top-20 right-4 z-50 bg-white/95 backdrop-blur-sm text-text-secondary px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center gap-2 font-medium"
                aria-label="Abrir instrucciones"
            >
                <CircleHelp size={18} />
                Instrucciones
            </button>

            {isOpen && (
                <div
                    className="fixed inset-0 z-70 flex items-center justify-center bg-black/45 p-4 sm:p-6"
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby={titleId}
                >
                    <div className="relative w-full max-w-4xl max-h-[90vh] overflow-y-auto rounded-2xl bg-white shadow-2xl p-6 sm:p-8">
                        <button
                            type="button"
                            onClick={() => setIsOpen(false)}
                            className="absolute top-4 right-4 rounded-md p-2 text-text-secondary hover:bg-gray-100 transition-colors"
                            aria-label="Cerrar instrucciones"
                        >
                            <X size={20} />
                        </button>

                        <div className="pr-10">
                            <h2 id={titleId} className="text-2xl sm:text-3xl font-bold mb-6">
                                {title}
                            </h2>
                            <div className="space-y-6 text-base sm:text-lg">
                                {children}
                            </div>
                        </div>

                        <div className="mt-8 flex justify-end">
                            <Button onClick={() => setIsOpen(false)} className="px-6">
                                Entendido
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}
