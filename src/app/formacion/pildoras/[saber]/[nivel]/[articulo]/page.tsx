
import Link from "next/link";
// import { notFound } from "next/navigation";
import { ArrowLeft } from "lucide-react";
import { SABERES, NIVELES, COURSE_CONTENT } from "@/lib/pildorasData";
import MayorMenorContent from "@/components/content/MayorMenorContent";
import ConteoRecitativoContent from "@/components/content/ConteoRecitativoContent";
import ArticuloPruebaActividades from "@/components/content/ActividadesConceptosBasicosContent";
import DescubriendoRectaContent from "@/components/content/DescubriendoRectaContent";
import SubitizacionTarjetasPuntos1Content from "@/components/content/SubitizacionTarjetasPuntos1Content";
import SubitizacionTarjetasPuntos2Content from "@/components/content/SubitizacionTarjetasPuntos2Content";
import SubitizacionTarjetasPuntos3Content from "@/components/content/SubitizacionTarjetasPuntos3Content";
import { NextArticleButton } from "@/components/pildoras/ArticleComponents";

// Registry of content components
const CONTENT_REGISTRY: Record<string, React.ComponentType> = {
    "mayor-menor": MayorMenorContent,
    "actividades-conceptos-basicos": ArticuloPruebaActividades,
    "conteo-recitativo": ConteoRecitativoContent,
    "subitizacion-tarjetas-puntos-1": SubitizacionTarjetasPuntos1Content,
    "subitizacion-tarjetas-puntos-2": SubitizacionTarjetasPuntos2Content,
    "subitizacion-tarjetas-puntos-3": SubitizacionTarjetasPuntos3Content,
    "descubriendo-recta": DescubriendoRectaContent,
};

interface PageProps {
    params: Promise<{
        saber: string;
        nivel: string;
        articulo: string;
    }>;
}

// Generar rutas estáticas para GitHub Pages
export async function generateStaticParams() {
    const params: { saber: string; nivel: string; articulo: string }[] = [];

    for (const [contentKey, chapters] of Object.entries(COURSE_CONTENT)) {
        for (const saber of SABERES) {
            const prefix = `${saber.id}-`;
            if (contentKey.startsWith(prefix)) {
                const nivel = contentKey.slice(prefix.length);
                if (!NIVELES.some((n) => n.id === nivel)) {
                    break;
                }

                for (const chapter of chapters) {
                    for (const article of chapter.articles) {
                        params.push({
                            saber: saber.id,
                            nivel,
                            articulo: article.id,
                        });
                    }
                }

                break;
            }
        }
    }

    return params;
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
    const orderedArticles = chapters?.flatMap((chapter) => chapter.articles) ?? [];
    const currentArticleIndex = orderedArticles.findIndex((article) => article.id === articuloId);
    const nextArticle = currentArticleIndex >= 0 ? orderedArticles[currentArticleIndex + 1] : undefined;
    const nextArticleHref = nextArticle
        ? `/formacion/pildoras/${saberId}/${nivelId}/${nextArticle.id}`
        : undefined;

    return (
        <div className="min-h-screen bg-white pb-20">
            {/* Navigation Bar */}
            <div className="sticky top-16 z-40 bg-white/80 backdrop-blur-md border-b border-gray-100">
                <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12 h-14 md:h-16 flex items-center">
                    <Link
                        href={`/formacion/pildoras/${saberId}/${nivelId}`}
                        className="inline-flex items-center text-text-secondary hover:text-primary transition-colors font-medium"
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
                        <h1 className="text-2xl md:text-3xl font-bold mb-4 px-4">
                            Contenido en Construcción
                        </h1>
                        <p className="text-base md:text-lg text-text-secondary mb-8 px-4">
                            Estamos redactando este artículo para ti.
                        </p>
                        <div className="p-6 md:p-8 bg-gray-50 rounded-2xl border border-gray-100 inline-block mx-4">
                            <p className="text-text-secondary italic">
                                Slug: {articuloId}
                            </p>
                        </div>
                    </div>
                )}
                <div className="mt-10">
                    {nextArticleHref ? (
                        <NextArticleButton href={nextArticleHref} label="Ir al siguiente artículo" />
                    ) : (
                        <div className="rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                                ¡Has llegado a la última lección del temario!
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                Ahora puedes repasar este temario si crees que lo necesitas, avanzar a un nivel superior si quieres contenido para estudiantes de mayor edad, o cambiar a otro saber para seguir aprendiendo.
                            </p>
                        </div>
                    )}
                </div>
            </article>
        </div>
    );
}
