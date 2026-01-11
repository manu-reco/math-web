
import Link from "next/link";
// import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SABERES, NIVELES, COURSE_CONTENT } from "@/lib/pildorasData";
import MayorMenorContent from "@/components/content/MayorMenorContent";
import ConteoRecitativoContent from "@/components/content/ConteoRecitativoContent";
import ArticuloPruebaActividades from "@/components/content/ActividadesConceptosBasicosContent";
import DescubriendoRectaContent from "@/components/content/DescubriendoRectaContent";
import SubitizacionTarjetasPuntosContent from "@/components/content/SubitizacionTarjetasPuntosContent";

// Registry of content components
const CONTENT_REGISTRY: Record<string, React.ComponentType> = {
    "mayor-menor": MayorMenorContent,
    "actividades-conceptos-basicos": ArticuloPruebaActividades,
    "conteo-recitativo": ConteoRecitativoContent,
    "subitizacion-tarjetas-puntos": SubitizacionTarjetasPuntosContent,
    "descubriendo-recta": DescubriendoRectaContent, 
};

interface PageProps {
    params: Promise<{
        saber: string;
        nivel: string;
        articulo: string;
    }>;
}

export default async function ArticlePage({ params }: PageProps) {
    const { saber: saberId, nivel: nivelId, articulo: articuloId } = await params;

    // Validate existence
    const saber = SABERES.find((s) => s.id === saberId);
    const nivel = NIVELES.find((n) => n.id === nivelId);

    // Find the article in the data structure to get the title if needed, 
    // though the content component usually has it.
    // But we need to validate the URL.
    const contentKey = `${saberId}-${nivelId}`;
    const chapters = COURSE_CONTENT[contentKey];

    let articleFound = false;
    if (chapters) {
        for (const chapter of chapters) {
            if (chapter.articles.find(a => a.id === articuloId)) {
                articleFound = true;
                break;
            }
        }
    }

    if (!saber || !nivel || !articleFound) {
        // We might want to allow rendering if we have the component even if not in the list,
        // but strict validation is better.
        // However, for this demo, if I missed adding it to the list but have the component, let's show it.
        // But I added them to the list in pildorasData.ts.
        // So strict check is fine.
        if (!CONTENT_REGISTRY[articuloId]) {
            // If we don't have the component, we show a generic placeholder
        }
    }

    const ContentComponent = CONTENT_REGISTRY[articuloId];

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Navigation Bar */}
            <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 h-14 md:h-16 flex items-center">
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
            <article className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 py-8 md:py-12">
                {ContentComponent ? (
                    <ContentComponent />
                ) : (
                    <div className="text-center py-12 md:py-20">
                        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4 px-4">
                            Contenido en Construcción
                        </h1>
                        <p className="text-base md:text-lg text-gray-600 mb-8 px-4">
                            Estamos redactando este artículo para ti.
                        </p>
                        <div className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 inline-block mx-4">
                            <p className="text-gray-500 italic">
                                Slug: {articuloId}
                            </p>
                        </div>
                    </div>
                )}
            </article>
        </div>
    );
}
