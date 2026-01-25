"use client";

import { useState } from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import StoryPlayer from "@/components/story/StoryPlayer";
import storyData from "@/data/cuentos/owl-tree.story.json";
import { validateStoryData } from "@/lib/validateStory";
import type { StoryData } from "@/types/story";

export default function OwlTreeStoryPage() {
    const [gameCompleted, setGameCompleted] = useState(false);

    // Validar datos del cuento
    let validatedStory: StoryData;
    try {
        validatedStory = validateStoryData(storyData) as StoryData;
    } catch (error) {
        console.error('Error validating story:', error);
        return (
            <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error al cargar el cuento</h1>
                    <p className="mb-6">
                        Hubo un problema con los datos del cuento. Por favor, contacta al administrador.
                    </p>
                    <Link
                        href="/juegos"
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Volver a Juegos
                    </Link>
                </div>
            </div>
        );
    }

    if (gameCompleted) {
        return (
            <div className="min-h-screen bg-linear-to-br from-green-50 to-blue-50 flex items-center justify-center">
                <div className="bg-white p-12 rounded-2xl shadow-2xl text-center max-w-md">
                    <div className="text-6xl mb-6">🎉</div>
                    <h1 className="text-3xl font-bold mb-4">
                        ¡Cuento completado!
                    </h1>
                    <p className="text-text-secondary mb-8">
                        Has terminado de leer &quot;{validatedStory.title}&quot;
                    </p>
                    <div className="flex flex-col gap-4">
                        <button
                            onClick={() => setGameCompleted(false)}
                            className="bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors font-medium"
                        >
                            Leer de nuevo
                        </button>
                        <Link
                            href="/juegos"
                            className="inline-flex items-center justify-center gap-2 bg-gray-100 text-text-secondary px-6 py-3 rounded-lg hover:bg-gray-200 transition-colors font-medium"
                        >
                            <ArrowLeft size={20} />
                            Volver a Juegos
                        </Link>
                    </div>
                </div>
            </div>
        );
    }

    return (
        <div className="relative">
            {/* Botón de retroceso flotante */}
            <Link
                href="/juegos"
                className="fixed top-4 left-4 z-50 bg-white/90 backdrop-blur-sm text-text-secondary px-4 py-2 rounded-lg shadow-lg hover:bg-white hover:shadow-xl transition-all flex items-center gap-2 font-medium"
            >
                <ArrowLeft size={20} />
                Salir
            </Link>

            {/* Player del cuento */}
            <StoryPlayer
                story={validatedStory}
                onComplete={() => setGameCompleted(true)}
            />
        </div>
    );
}
