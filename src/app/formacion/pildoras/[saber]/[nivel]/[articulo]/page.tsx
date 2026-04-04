import type { Metadata } from "next";
import { SABERES, NIVELES, COURSE_CONTENT, getVisibleTrackData, hasVisibleArticle } from "@/data/pildorasData";
import { notFound } from "next/navigation";
import MayorMenorContent from "@/components/content/MayorMenorContent";
import ConteoRecitativoContent from "@/components/content/ConteoRecitativoContent";
import ArticuloPruebaActividades from "@/components/content/ActividadesConceptosBasicosContent";
import DescubriendoRectaContent from "@/components/content/DescubriendoRectaContent";
import DemoArticleComponentsContent from "@/components/content/DemoArticleComponentsContent";
import SubitizacionTarjetasPuntos1Content from "@/components/content/SubitizacionTarjetasPuntos1Content";
import SubitizacionTarjetasPuntos2Content from "@/components/content/SubitizacionTarjetasPuntos2Content";
import SubitizacionTarjetasPuntos3Content from "@/components/content/SubitizacionTarjetasPuntos3Content";
import ArticleSidebarNav from "@/components/pildoras/ArticleSidebarNav";
import { ArticleNavigationButton } from "@/components/pildoras/ArticleComponents";
import { getCanonicalUrl } from "@/lib/siteUrl";

// Registry of content components
const CONTENT_REGISTRY: Record<string, React.ComponentType> = {
    "demo-article-components": DemoArticleComponentsContent,
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

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
    const { saber: saberId, nivel: nivelId, articulo: articuloId } = await params;
    const { saber, nivel, visibleChapters } = getVisibleTrackData(saberId, nivelId);
    const orderedArticles = visibleChapters?.flatMap((chapter) => chapter.articles) ?? [];
    const article = orderedArticles.find((item) => item.id === articuloId);

    if (!saber || !nivel || !article) {
        return {
            title: "Articulo no encontrado",
            robots: {
                index: false,
                follow: false,
            },
        };
    }

    const title = article.title;
    const description = article.subtitle;
    const path = `/formacion/pildoras/${saberId}/${nivelId}/${articuloId}`;

    return {
        title,
        description,
        alternates: {
            canonical: path,
        },
        openGraph: {
            title,
            description,
            url: getCanonicalUrl(path),
            type: "article",
            locale: "es_ES",
            siteName: "MathEdu",
        },
        twitter: {
            card: "summary_large_image",
            title,
            description,
        },
    };
}

export default async function ArticlePage({ params }: PageProps) {
    const { saber: saberId, nivel: nivelId, articulo: articuloId } = await params;

    // Validate existence
    const { saber, nivel, visibleChapters } = getVisibleTrackData(saberId, nivelId);

    const articleFound = hasVisibleArticle(visibleChapters, articuloId);
    const hasRegisteredContent = Boolean(CONTENT_REGISTRY[articuloId]);

    if (!saber || !nivel || (!articleFound && !hasRegisteredContent)) {
        notFound();
    }

    const ContentComponent = CONTENT_REGISTRY[articuloId];
    const orderedArticles = visibleChapters?.flatMap((chapter) => chapter.articles) ?? [];
    const currentArticleIndex = orderedArticles.findIndex((article) => article.id === articuloId);
    const previousArticle = currentArticleIndex > 0 ? orderedArticles[currentArticleIndex - 1] : undefined;
    const nextArticle = currentArticleIndex >= 0 ? orderedArticles[currentArticleIndex + 1] : undefined;
    const previousArticleHref = previousArticle
        ? `/formacion/pildoras/${saberId}/${nivelId}/${previousArticle.id}`
        : undefined;
    const nextArticleHref = nextArticle
        ? `/formacion/pildoras/${saberId}/${nivelId}/${nextArticle.id}`
        : undefined;

    return (
        <div className="min-h-screen bg-primary/5 pb-20">
            <div className="mx-auto grid max-w-7xl lg:gap-8 px-4 sm:px-6 lg:grid-cols-[300px_minmax(0,1fr)] lg:px-8">
                <div className="lg:py-8">
                    <ArticleSidebarNav
                        chapters={visibleChapters ?? []}
                        saberId={saberId}
                        nivelId={nivelId}
                        activeArticleId={articuloId}
                    />
                </div>

                {/* Article Content */}
                <article className="min-w-0 max-w-4xl bg-white rounded-xl p-8 md:p-12 mt-6 lg:mt-2">
                    {ContentComponent ? (
                        <ContentComponent />
                    ) : (
                        <div className="text-center py-12 md:py-20">
                            <h1 className="text-2xl md:text-3xl font-bold mb-4 px-4">
                                Contenido en desarrollo
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
                    <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
                        {previousArticleHref ? (
                            <ArticleNavigationButton
                                href={previousArticleHref}
                                direction="previous"
                            />
                        ) : null}
                        {nextArticleHref ? (
                            <ArticleNavigationButton
                                href={nextArticleHref}
                                direction="next"
                            />
                        ) : null}
                    </div>

                    {!nextArticleHref && (
                        <div className="mt-6 rounded-xl border border-gray-200 bg-gray-50 p-6 md:p-8">
                            <h3 className="text-xl md:text-2xl font-bold text-text-primary mb-3">
                                ¡Has llegado a la última lección del temario!
                            </h3>
                            <p className="text-text-secondary leading-relaxed">
                                Ahora puedes repasar este temario si crees que lo necesitas, avanzar a un nivel superior si quieres contenido para estudiantes de mayor edad, o cambiar a otro saber para seguir aprendiendo.
                            </p>
                        </div>
                    )}
                </article>
            </div>
        </div>
    );
}
