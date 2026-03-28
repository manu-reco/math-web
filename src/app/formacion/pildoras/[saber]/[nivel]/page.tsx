
import Link from "next/link";
import { notFound } from "next/navigation";
import {
    ArrowLeft,
    BookOpen,
    ChevronRight
} from "lucide-react";
import { SABERES, NIVELES, COURSE_CONTENT } from "@/data/pildorasData";
import { clsx } from "clsx";

interface PageProps {
    params: Promise<{
        saber: string;
        nivel: string;
    }>;
}

// Generar rutas estáticas para GitHub Pages
export async function generateStaticParams() {
    const params: { saber: string; nivel: string }[] = [];

    for (const contentKey of Object.keys(COURSE_CONTENT)) {
        for (const saber of SABERES) {
            const prefix = `${saber.id}-`;
            if (contentKey.startsWith(prefix)) {
                const nivel = contentKey.slice(prefix.length);
                if (NIVELES.some((n) => n.id === nivel)) {
                    params.push({ saber: saber.id, nivel });
                }
                break;
            }
        }
    }

    return params;
}

export default async function SaberPage({ params }: PageProps) {
    const { saber: saberId, nivel: nivelId } = await params;

    const saber = SABERES.find((s) => s.id === saberId);
    const nivel = NIVELES.find((n) => n.id === nivelId);

    if (!saber || !nivel) {
        notFound();
    }

    const contentKey = `${saberId}-${nivelId}`;
    const chapters = COURSE_CONTENT[contentKey];
    const Icon = saber.icon;

    return (
        <div className="min-h-screen bg-slate-50 pb-20">
            {/* Header */}
            <div className={clsx("w-full py-8 md:py-12 px-6 sm:px-8 lg:px-12 shadow-sm", saber.color.replace("text-", "bg-").replace("100", "50"))}>
                <div className="max-w-5xl mx-auto">
                    <Link
                        href="/formacion/pildoras"
                        className="inline-flex items-center text-text-secondary hover:text-text mb-6 transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Volver a la selección
                    </Link>

                    <div className="flex items-start md:items-center gap-6 flex-col md:flex-row">
                        <div className={clsx("p-4 rounded-2xl bg-white shadow-sm text-primary", saber.color)}>
                            <Icon size={48} />
                        </div>
                        <div>
                            <div className="flex items-center gap-3 mb-2">
                                <span className="px-3 py-1 rounded-full bg-white/60 text-sm font-medium border border-gray-200">
                                    {nivel.title}
                                </span>
                                <span className="text-gray-400">•</span>
                                <span className="text-text-secondary text-sm">{chapters ? `${chapters.length} Capítulos` : "Próximamente"}</span>
                            </div>
                            <h1 className="text-4xl font-extrabold text-text mb-2">
                                {saber.title}
                            </h1>
                            <p className="text-lg text-text-secondary max-w-2xl">
                                {saber.description}
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 mt-8 md:mt-12">
                {!chapters ? (
                    <div className="text-center py-20 bg-white rounded-3xl shadow-sm border border-gray-100">
                        <div className="bg-gray-100 w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6">
                            <BookOpen size={32} className="text-gray-400" />
                        </div>
                        <h2 className="text-2xl font-bold text-text mb-2">Contenido en desarrollo</h2>
                        <p className="text-text-secondary max-w-md mx-auto">
                            Estamos trabajando en las píldoras para {saber.title} ({nivel.title}).
                            ¡Vuelve pronto!
                        </p>
                        <Link
                            href="/formacion/pildoras"
                            className="inline-block mt-6 px-6 py-3 bg-primary text-white rounded-lg font-medium hover:bg-primary-hover transition-colors"
                        >
                            Explorar otros temas
                        </Link>
                    </div>
                ) : (
                    <div className="grid gap-6 md:gap-8">
                        {chapters.map((chapter, index) => (
                            <div key={chapter.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
                                <div className="p-4 md:p-6 border-b border-gray-50 bg-gray-50/50 flex justify-between items-center">
                                    <h2 className="text-xl font-bold text-text flex items-center gap-3">
                                        <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary/10 text-primary text-sm font-bold">
                                            {index + 1}
                                        </span>
                                        {chapter.title.replace(/^\d+\.\s*/, '')} {/* Remove number prefix if present in title */}
                                    </h2>
                                </div>
                                <div className="divide-y divide-gray-50">
                                    {chapter.articles.map((article) => (
                                        <Link
                                            key={article.id}
                                            href={`/formacion/pildoras/${saberId}/${nivelId}/${article.id}`}
                                            className="block p-4 md:p-6 hover:bg-slate-50 transition-colors group"
                                        >
                                            <div className="flex justify-between items-center gap-3">
                                                <div className="flex-1">
                                                    <h3 className="text-base md:text-lg font-semibold text-text group-hover:text-primary transition-colors mb-1">
                                                        {article.title}
                                                    </h3>
                                                    <p className="text-text-secondary text-sm">
                                                        {article.subtitle}
                                                    </p>
                                                </div>
                                                <ChevronRight className="text-gray-400 group-hover:text-primary transition-colors shrink-0" size={20} />
                                            </div>
                                        </Link>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                )}
            </div>
        </div>
    );
}
