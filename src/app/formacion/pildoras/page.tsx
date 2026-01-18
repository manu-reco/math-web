
"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import {
    Calculator,
    Shapes,
    BrainCircuit,
    Ruler,
    BarChart3,
    CheckCircle2,
    ArrowRight,
    GraduationCap
} from "lucide-react";
import { SABERES, NIVELES } from "@/lib/pildorasData";
import { clsx } from "clsx";

const IconMap: Record<string, React.ComponentType<{ size: number }>> = {
    Calculator,
    Shapes,
    BrainCircuit,
    Ruler,
    BarChart3,
};

export default function PildorasPage() {
    const router = useRouter();
    const [selectedSaber, setSelectedSaber] = useState<string | null>(null);
    const [selectedNivel, setSelectedNivel] = useState<string | null>(null);

    const handleStart = () => {
        if (selectedSaber && selectedNivel) {
            router.push(`/formacion/pildoras/${selectedSaber}/${selectedNivel}`);
        }
    };

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-4">
                        Píldoras de Formación
                    </h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Pequeñas dosis de conocimiento para grandes maestros. Personaliza tu ruta de aprendizaje eligiendo el área y el nivel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                    {/* Saberes Selection */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary text-sm">1</span>
                            Elige un Saber
                        </h2>
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
                                        <div className={clsx(
                                            "p-2 rounded-lg transition-colors",
                                            isSelected ? "bg-white text-primary" : saber.color
                                        )}>
                                            <Icon size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={clsx("font-bold", isSelected ? "text-primary" : "")}>
                                                {saber.title}
                                            </h3>
                                            <p className="text-sm text-text-secondary">{saber.description}</p>
                                        </div>
                                        {isSelected && <CheckCircle2 className="text-primary" size={24} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>

                    {/* Niveles Selection */}
                    <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
                        <h2 className="text-2xl font-bold mb-6 flex items-center gap-2">
                            <span className="flex items-center justify-center w-8 h-8 rounded-full bg-secondary/20 text-secondary text-sm">2</span>
                            Elige un Nivel
                        </h2>
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
                                        <div className={clsx(
                                            "p-2 rounded-lg bg-gray-100 text-text-secondary",
                                            isSelected && "bg-white text-secondary"
                                        )}>
                                            <GraduationCap size={24} />
                                        </div>
                                        <div className="flex-1">
                                            <h3 className={clsx("font-bold", isSelected ? "text-secondary" : "")}>
                                                {nivel.title}
                                            </h3>
                                            <p className="text-sm text-text-secondary">{nivel.description}</p>
                                        </div>
                                        {isSelected && <CheckCircle2 className="text-secondary" size={24} />}
                                    </button>
                                );
                            })}
                        </div>
                    </div>
                </div>

                {/* Action Button */}
                <div className="flex justify-center">
                    <button
                        onClick={handleStart}
                        disabled={!selectedSaber || !selectedNivel}
                        className={clsx(
                            "px-8 py-4 rounded-full text-lg font-bold flex items-center gap-2 transition-all duration-300 transform",
                            selectedSaber && selectedNivel
                                ? "bg-primary text-white hover:bg-primary-hover shadow-lg hover:scale-105 hover:shadow-xl cursor-pointer"
                                : "bg-muted text-muted-foreground cursor-not-allowed"
                        )}
                    >
                        Comenzar a Aprender
                        <ArrowRight size={20} />
                    </button>
                </div>
            </div>
        </div>
    );
}
