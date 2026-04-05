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
                className="group fixed top-20 right-4 z-50 h-14 min-w-14 px-4 flex items-center justify-center bg-white/80 backdrop-blur-sm text-text-secondary rounded-full shadow-lg hover:shadow-xl transition-all duration-300 ease-out overflow-hidden cursor-pointer"
                aria-label="Abrir instrucciones"
            >
                <CircleHelp size={20} className="shrink-0" />
                <span className="max-w-0 opacity-0 whitespace-nowrap font-semibold text-sm group-hover:max-w-[120px] group-hover:opacity-100 group-hover:ml-2 transition-all duration-300">
                    Instrucciones
                </span>
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
