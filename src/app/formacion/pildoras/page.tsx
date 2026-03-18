
"use client";

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import {
    Calculator,
    Shapes,
    BrainCircuit,
    Ruler,
    BarChart3,
    CheckCircle2,
    GraduationCap
} from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { SABERES, NIVELES } from "@/lib/pildorasData";
import { clsx } from "clsx";
import LoadingOverlay from "@/components/LoadingOverlay";

const IconMap: Record<string, React.ComponentType<{ size: number }>> = {
    Calculator,
    Shapes,
    BrainCircuit,
    Ruler,
    BarChart3,
};

const cardContentMotionProps = {
    initial: { opacity: 0, y: 8, height: 0 },
    animate: { opacity: 1, y: 0, height: "auto" },
    exit: { opacity: 0, y: -8, height: 0 },
    transition: { duration: 0.25 },
};

export default function PildorasPage() {
    const router = useRouter();
    const [selectedSaber, setSelectedSaber] = useState<string | null>(null);
    const [selectedNivel, setSelectedNivel] = useState<string | null>(null);
    const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const hasSaber = Boolean(selectedSaber);
    const hasNivel = Boolean(selectedNivel);
    const isSelectionInProgress = (hasSaber && !hasNivel) || (!hasSaber && hasNivel);
    const pendingSelectionType: "saber" | "nivel" = !hasSaber && hasNivel ? "saber" : "nivel";
    const isReadyToNavigate = hasSaber && hasNivel;
    const isSaberSummaryMode = isSelectionInProgress && pendingSelectionType === "nivel";
    const isNivelSummaryMode = isSelectionInProgress && pendingSelectionType === "saber";
    const selectedSaberData = SABERES.find((saber) => saber.id === selectedSaber);
    const selectedNivelData = NIVELES.find((nivel) => nivel.id === selectedNivel);
    const SelectedSaberIcon = selectedSaberData ? IconMap[selectedSaberData.icon] ?? Calculator : Calculator;

    useEffect(() => {
        if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current);
            navigationTimeoutRef.current = null;
        }

        if (!selectedSaber || !selectedNivel) {
            return;
        }

        navigationTimeoutRef.current = setTimeout(() => {
            router.push(`/formacion/pildoras/${selectedSaber}/${selectedNivel}`);
        }, 500);

        return () => {
            if (navigationTimeoutRef.current) {
                clearTimeout(navigationTimeoutRef.current);
                navigationTimeoutRef.current = null;
            }
        };
    }, [selectedSaber, selectedNivel, router]);

    const saberCard = (
        <motion.div layout className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm">1</span>
                {isSaberSummaryMode ? "Has elegido:" : "Elige un Saber"}
            </h2>
            <AnimatePresence mode="wait" initial={false}>
                {isSaberSummaryMode ? (
                    <motion.button
                        key="saber-summary"
                        type="button"
                        onClick={() => setSelectedSaber(null)}
                        className="w-full text-left"
                        {...cardContentMotionProps}
                    >
                        <div
                            className="w-full text-left my-2 p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group border-primary/50 shadow-sm"
                        >
                            <div
                                className={clsx("p-2 rounded-lg transition-colors", selectedSaberData?.color || "bg-gray-100 text-text-secondary")}
                            >
                                <SelectedSaberIcon size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold">{selectedSaberData?.title}</h3>
                                <p className="text-sm text-text-secondary">{selectedSaberData?.description}</p>
                            </div>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">Pulsa para volver y cambiar la selección.</p>
                    </motion.button>
                ) : (
                    <motion.div key="saber-selection" {...cardContentMotionProps}>
                        {isSelectionInProgress && pendingSelectionType === "saber" && (
                            <p className="text-sm text-primary font-medium mb-4">
                                Ahora, escoge el saber para continuar.
                            </p>
                        )}
                        <div className="space-y-3">
                            {SABERES.map((saber) => {
                                const Icon = IconMap[saber.icon];
                                const isSelected = selectedSaber === saber.id;
                                return (
                                    <button
                                        key={saber.id}
                                        onClick={() => setSelectedSaber(saber.id)}
                                        className={clsx(
                                            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group",
                                            isSelected
                                                ? "border-primary bg-primary/5 shadow-md"
                                                : "border-gray-100 hover:border-primary/50 hover:bg-gray-50"
                                        )}
                                    >
                                        <div
                                            className={clsx(
                                                "p-2 rounded-lg transition-colors",
                                                isSelected ? "bg-white text-primary" : saber.color
                                            )}
                                        >
                                            <Icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={clsx("font-bold", isSelected ? "text-primary" : "")}>{saber.title}</h3>
                                            <p className="text-sm text-text-secondary">{saber.description}</p>
                                        </div>
                                        {isSelected && <CheckCircle2 className="text-primary" size={24} />}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    const nivelCard = (
        <motion.div layout className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 overflow-hidden">
            <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 text-secondary text-sm">2</span>
                {isNivelSummaryMode ? "Has elegido:" : "Elige un Nivel"}
            </h2>
            <AnimatePresence mode="wait" initial={false}>
                {isNivelSummaryMode ? (
                    <motion.button
                        key="nivel-summary"
                        type="button"
                        onClick={() => setSelectedNivel(null)}
                        className="w-full text-left"
                        {...cardContentMotionProps}
                    >
                        <div
                            className="w-full text-left my-2 p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4 group border-primary/50 shadow-sm"
                        >
                            <div className="p-2 rounded-lg transition-colors bg-secondary/20 text-secondary">
                                <GraduationCap size={24} />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-bold">{selectedNivelData?.title}</h3>
                                <p className="text-sm text-text-secondary">{selectedNivelData?.description}</p>
                            </div>
                        </div>
                        <p className="text-sm text-text-secondary mt-1">Pulsa para volver y cambiar la selección.</p>
                    </motion.button>
                ) : (
                    <motion.div key="nivel-selection" {...cardContentMotionProps}>
                        {isSelectionInProgress && pendingSelectionType === "nivel" && (
                            <p className="text-sm text-secondary font-medium mb-4">
                                Ahora, escoge el nivel para continuar.
                            </p>
                        )}
                        <div className="space-y-3">
                            {NIVELES.map((nivel) => {
                                const isSelected = selectedNivel === nivel.id;
                                return (
                                    <button
                                        key={nivel.id}
                                        onClick={() => setSelectedNivel(nivel.id)}
                                        className={clsx(
                                            "w-full text-left p-4 rounded-xl border-2 transition-all duration-200 flex items-center gap-4",
                                            isSelected
                                                ? "border-secondary bg-secondary/5 shadow-md"
                                                : "border-gray-100 hover:border-secondary/50 hover:bg-gray-50"
                                        )}
                                    >
                                        <div
                                            className={clsx(
                                                "p-2 rounded-lg bg-gray-100 text-text-secondary",
                                                isSelected && "bg-white text-secondary"
                                            )}
                                        >
                                            <GraduationCap size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={clsx("font-bold", isSelected ? "text-secondary" : "")}>{nivel.title}</h3>
                                            <p className="text-sm text-text-secondary">{nivel.description}</p>
                                        </div>
                                        {isSelected && <CheckCircle2 className="text-secondary" size={24} />}
                                    </button>
                                );
                            })}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.div>
    );

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            {isReadyToNavigate && (
                <LoadingOverlay />
            )}

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-4">
                        Píldoras de Formación
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Pequeñas dosis de conocimiento para grandes maestros. Personaliza tu ruta de aprendizaje eligiendo el área y el nivel.
                    </p>
                </div>

                <motion.div layout className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8 mb-12">
                    {saberCard}
                    {nivelCard}
                </motion.div>
            </div>
        </div>
    );
}
