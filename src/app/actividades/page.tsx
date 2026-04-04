import type { Metadata } from "next";
import Link from "next/link";
import { games } from "@/data/actividades";
import GamesGrid from "@/components/actividades/GamesGrid";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Actividades educativas",
    description:
        "Actividades interactivas para trabajar matematicas en Infantil y Primaria de forma divertida y guiada.",
    path: "/actividades",
});

export default function ActividadesPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-blue-50 to-white pb-20">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-100">
                <div className="container-custom py-12">
                    <nav aria-label="Breadcrumb">
                        <Link href="/" className="text-primary hover:text-primary-hover font-medium mb-4 inline-block">
                            ← Volver al inicio
                        </Link>
                    </nav>                    
                    <h1 className="text-5xl font-bold mb-4">
                        Actividades Educativas
                    </h1>
                    <p className="text-xl text-text-secondary max-w-3xl">
                        Aprende matemáticas de forma divertida e interactiva con nuestras actividades interactivas.
                    </p>
                </div>
            </header>

            <GamesGrid games={games} />
        </main>
    );
}
