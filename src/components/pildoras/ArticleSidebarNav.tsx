"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { SquareMenu, X } from "lucide-react";

type NavArticle = {
    id: string;
    title: string;
};

type NavChapter = {
    id: string;
    title: string;
    articles: NavArticle[];
};

interface ArticleSidebarNavProps {
    chapters: NavChapter[];
    saberId: string;
    nivelId: string;
    activeArticleId: string;
}

export default function ArticleSidebarNav({
    chapters,
    saberId,
    nivelId,
    activeArticleId,
}: ArticleSidebarNavProps) {
    const [isDrawerOpen, setIsDrawerOpen] = useState(false);

    useEffect(() => {
        if (!isDrawerOpen) {
            return;
        }

        const handleEscape = (event: KeyboardEvent) => {
            if (event.key === "Escape") {
                setIsDrawerOpen(false);
            }
        };

        document.addEventListener("keydown", handleEscape);
        return () => {
            document.removeEventListener("keydown", handleEscape);
        };
    }, [isDrawerOpen]);

    const renderNav = () => (
        <nav aria-label="Temario de artículos" className="space-y-6">
            {chapters.map((chapter) => (
                <section key={chapter.id} className="space-y-2">
                    <h3 className="text-sm font-semibold text-text-primary">
                        {chapter.title}
                    </h3>
                    <ul className="space-y-1">
                        {chapter.articles.map((article) => {
                            const isActive = article.id === activeArticleId;

                            return (
                                <li key={article.id}>
                                    <Link
                                        href={`/formacion/pildoras/${saberId}/${nivelId}/${article.id}`}
                                        onClick={() => setIsDrawerOpen(false)}
                                        className={`block rounded-md px-3 py-2 text-sm transition-colors ${
                                            isActive
                                                ? "bg-primary/10 text-primary font-medium"
                                                : "text-text-secondary hover:bg-gray-50 hover:text-text-primary"
                                        }`}
                                        aria-current={isActive ? "page" : undefined}
                                    >
                                        {article.title}
                                    </Link>
                                </li>
                            );
                        })}
                    </ul>
                </section>
            ))}
        </nav>
    );

    return (
        <>
            <button
                type="button"
                className="fixed top-18 left-4 z-50 inline-flex h-10 w-10 items-center justify-center rounded-md border border-gray-200 bg-white shadow-sm lg:hidden"
                aria-label="Abrir temario"
                aria-controls="mobile-article-drawer"
                aria-expanded={isDrawerOpen}
                onClick={() => setIsDrawerOpen(true)}
            >
                <SquareMenu size={20} />
            </button>

            {isDrawerOpen && (
                <div
                    className="fixed inset-0 z-50 bg-black/30 lg:hidden"
                    onClick={() => setIsDrawerOpen(false)}
                >
                    <aside
                        id="mobile-article-drawer"
                        className="h-full w-[85vw] max-w-sm overflow-y-auto bg-white px-4 py-6"
                        onClick={(event) => event.stopPropagation()}
                    >
                        <div className="mb-4 flex items-center justify-between">
                            <h2 className="text-base font-semibold text-text-primary">
                                Temario
                            </h2>
                            <button
                                type="button"
                                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-gray-200 text-text-secondary"
                                aria-label="Cerrar temario"
                                onClick={() => setIsDrawerOpen(false)}
                            >
                                <X size={18} />
                            </button>
                        </div>
                        {renderNav()}
                    </aside>
                </div>
            )}

            <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] rounded-xl border border-gray-100 bg-white p-4 lg:flex lg:flex-col">
                <h2 className="mb-4 text-sm font-semibold text-text-primary">
                    Temario
                </h2>
                <div className="min-h-0 flex-1 overflow-y-auto pr-1">
                    {renderNav()}
                </div>
            </aside>
        </>
    );
}
