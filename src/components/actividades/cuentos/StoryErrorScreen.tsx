import { ArrowLeft } from "lucide-react";
import Link from "next/link";

interface StoryErrorScreenProps {
    errorMessage: string;
    backHref: string;
}

export default function StoryErrorScreen({ errorMessage, backHref }: StoryErrorScreenProps) {
    return (
                    <div className="min-h-screen bg-linear-to-br from-red-50 to-orange-50 flex items-center justify-center">
                <div className="bg-white p-8 rounded-2xl shadow-xl max-w-md">
                    <h1 className="text-2xl font-bold text-red-600 mb-4">Error al cargar el cuento</h1>
                    <p className="mb-6">
                        {errorMessage}
                    </p>
                    <Link
                        href={backHref}
                        className="inline-flex items-center gap-2 bg-primary text-white px-6 py-3 rounded-lg hover:bg-primary/90 transition-colors"
                    >
                        <ArrowLeft size={20} />
                        Volver a Actividades
                    </Link>
                </div>
            </div>

    )
}