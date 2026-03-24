"use client";

import { useEffect, useMemo, useRef, useState } from "react";
import { useRouter } from "next/navigation";
import { NIVELES, SABERES } from "@/lib/pildorasData";
import LoadingOverlay from "@/components/LoadingOverlay";
import OptionsCard, { type OptionsCardOption } from "@/components/OptionsCard";

export default function PildorasPage() {
    const router = useRouter();
    const [selectedSaber, setSelectedSaber] = useState<string | null>(null);
    const [selectedNivel, setSelectedNivel] = useState<string | null>(null);
    const navigationTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

    const isReadyToNavigate = Boolean(selectedSaber && selectedNivel);
    const isSelectionInProgress = (Boolean(selectedSaber) && !selectedNivel) || (!selectedSaber && Boolean(selectedNivel));

    const saberOptions = useMemo<OptionsCardOption[]>(
        () =>
            SABERES.map((saber) => ({
                id: saber.id,
                icon: saber.icon,
                label: saber.title,
                color: saber.color,
                description: saber.description,
            })),
        []
    );

    const nivelOptions = useMemo<OptionsCardOption[]>(
        () =>
            NIVELES.map((nivel) => ({
                id: nivel.id,
                icon: nivel.icon, 
                label: nivel.title,
                color: nivel.color, 
                description: nivel.description,
            })),
        []
    );

    useEffect(() => {
        // Si ya hay un timeout programado, limpiarlo
        if (navigationTimeoutRef.current) {
            clearTimeout(navigationTimeoutRef.current);
            navigationTimeoutRef.current = null;
        }

        // Solo navegar si tanto saber como nivel están seleccionados
        if (!selectedSaber || !selectedNivel) {
            return;
        }

        // Programar un pequeño delay antes de navegar a la página de resultados
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

    return (
        <div className="min-h-screen bg-slate-50 py-12 px-4 sm:px-6 lg:px-8">
            {isReadyToNavigate && <LoadingOverlay />}

            <div className="max-w-5xl mx-auto">
                <div className="text-center mb-12">
                    <h1 className="text-4xl font-extrabold mb-4">Píldoras de Formación</h1>
                    <p className="text-xl text-text-secondary max-w-2xl mx-auto">
                        Pequeñas dosis de conocimiento para grandes maestros. Personaliza tu ruta de aprendizaje eligiendo el área y el nivel.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:items-start gap-8 mb-12">
                    <OptionsCard
                        title="Elige un Saber"
                        number={1}
                        themeColor="primary"
                        options={saberOptions}
                        selectedId={selectedSaber}
                        onSelectionChange={setSelectedSaber}
                        extraInfo={isSelectionInProgress && !selectedSaber ? "Ahora, escoge el saber para continuar." : undefined}
                    />

                    <OptionsCard
                        title="Elige un Nivel"
                        number={2}
                        themeColor="secondary"
                        options={nivelOptions}
                        selectedId={selectedNivel}
                        onSelectionChange={setSelectedNivel}
                        extraInfo={isSelectionInProgress && !selectedNivel ? "Ahora, escoge el nivel para continuar." : undefined}
                    />
                </div>
            </div>
        </div>
    );
}
