import Link from "next/link";
import { games } from "@/data/juegos";
import GamesGrid from "@/components/juegos/GamesGrid";

export default function JuegosPage() {
    return (
        <main className="min-h-screen bg-linear-to-b from-blue-50 to-white pb-20">
            {/* Header */}
            <header className="bg-white shadow-sm border-b border-gray-100">
                <div className="container-custom py-12">
                    <nav aria-label="Breadcrumb">
                        <Link href="/" className="text-primary hover:text-primary-hover font-medium mb-4 inline-block">
                            ← Volver al inicio
                        </Link>
                    </nav>                    <h1 className="text-5xl font-bold text-gray-900 mb-4">
                        Juegos Educativos
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl">
                        Aprende matemáticas de forma divertida e interactiva con nuestros juegos educativos
                    </p>
                </div>
            </header>

            <GamesGrid games={games} />
        </main>
    );
}
