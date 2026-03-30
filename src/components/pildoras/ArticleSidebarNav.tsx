"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { ArrowLeft, SquareMenu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

type NavArticle = {
    id: string;
    title: string;
    isHidden?: boolean;
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
        <nav aria-label="Temario de artículos" className="space-y-6 text-md">
            {chapters.map((chapter) => (
                <section key={chapter.id} className="space-y-2">
                    <h3 className="text-lg font-semibold text-text-primary">
                        {chapter.title}
                    </h3>
                    <ul className="space-y-1">
                        {chapter.articles.filter((article) => !article.isHidden).map((article) => {
                            const isActive = article.id === activeArticleId;

                            return (
                                <li key={article.id}>
                                    <Link
                                        href={`/formacion/pildoras/${saberId}/${nivelId}/${article.id}`}
                                        onClick={() => setIsDrawerOpen(false)}
                                        className={`block rounded-md px-3 py-2 transition-colors ${isActive
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
            <AnimatePresence>
                {isDrawerOpen && (
                    <motion.div
                        className="fixed inset-0 z-50 bg-black/30 lg:hidden"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.2, ease: "easeOut" }}
                        onClick={() => setIsDrawerOpen(false)}
                    >
                        <motion.aside
                            id="mobile-article-drawer"
                            className="h-full w-[85vw] max-w-sm overflow-y-auto bg-white px-4 py-6"
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ type: "tween", duration: 0.28, ease: "easeOut" }}
                            onClick={(event) => event.stopPropagation()}
                        >
                            <div className="mb-4 text-sm flex items-center justify-between">
                                <Link
                                    href={`/formacion/pildoras/${saberId}/${nivelId}`}
                                    className="inline-flex items-center text-text-secondary hover:text-primary transition-colors font-medium"
                                >
                                    <ArrowLeft size={20} className="mr-2" />
                                    Volver al temario
                                </Link>
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
                        </motion.aside>
                    </motion.div>
                )}
            </AnimatePresence>

            <aside className="sticky top-20 hidden h-[calc(100vh-6rem)] rounded-xl border border-gray-100 bg-white p-4 lg:flex lg:flex-col">
                <Link
                    href={`/formacion/pildoras/${saberId}/${nivelId}`}
                    className="inline-flex items-center mb-4 text-sm text-text-secondary hover:text-primary transition-colors font-medium"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Volver al temario
                </Link>

                <div className="min-h-0 text-md flex-1 overflow-y-auto pr-1">
                    {renderNav()}
                </div>
            </aside>
        </>
    );
}
