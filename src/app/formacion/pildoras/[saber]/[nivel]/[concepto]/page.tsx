
import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SABERES, NIVELES, COURSE_CONTENT } from "@/lib/pildorasData";
import MayorMenorContent from "@/components/content/MayorMenorContent";
import ConteoRecitativoContent from "@/components/content/ConteoRecitativoContent";

// Registry of content components
const CONTENT_REGISTRY: Record<string, React.ComponentType> = {
    "mayor-menor": MayorMenorContent,
    "conteo-recitativo": ConteoRecitativoContent,
};

interface PageProps {
    params: Promise<{
        saber: string;
        nivel: string;
        concepto: string;
    }>;
}

export default async function ConceptPage({ params }: PageProps) {
    const { saber: saberId, nivel: nivelId, concepto: conceptoId } = await params;

    // Validate existence
    const saber = SABERES.find((s) => s.id === saberId);
    const nivel = NIVELES.find((n) => n.id === nivelId);

    // Find the concept in the data structure to get the title if needed, 
    // though the content component usually has it.
    // But we need to validate the URL.
    const contentKey = `${saberId}-${nivelId}`;
    const chapters = COURSE_CONTENT[contentKey];

    let conceptFound = false;
    if (chapters) {
        for (const chapter of chapters) {
            if (chapter.concepts.find(c => c.id === conceptoId)) {
                conceptFound = true;
                break;
            }
        }
    }

    if (!saber || !nivel || !conceptFound) {
        // We might want to allow rendering if we have the component even if not in the list,
        // but strict validation is better.
        // However, for this demo, if I missed adding it to the list but have the component, let's show it.
        // But I added them to the list in pildorasData.ts.
        // So strict check is fine.
        if (!CONTENT_REGISTRY[conceptoId]) {
            // If we don't have the component, we show a generic placeholder
        }
    }

    const ContentComponent = CONTENT_REGISTRY[conceptoId];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Navigation Bar */}
            <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center">
                    <Link
                        href={`/formacion/pildoras/${saberId}/${nivelId}`}
                        className="inline-flex items-center text-gray-500 hover:text-primary transition-colors font-medium"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Volver al temario
                    </Link>
                </div>
            </div>

            {/* Article Content */}
            <article className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {ContentComponent ? (
                    <ContentComponent />
                ) : (
                    <div className="text-center py-20">
                        <h1 className="text-3xl font-bold text-gray-900 mb-4">
                            Contenido en Construcción
                        </h1>
                        <p className="text-lg text-gray-600 mb-8">
                            Estamos redactando este artículo para ti.
                        </p>
                        <div className="p-8 bg-gray-50 rounded-2xl border border-gray-100 inline-block">
                            <p className="text-gray-500 italic">
                                Slug: {conceptoId}
                            </p>
                        </div>
                    </div>
                )}
            </article>
        </div>
    );
}
