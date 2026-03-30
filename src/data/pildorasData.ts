
import { Baby, BarChart3, BrainCircuit, Calculator, GraduationCap, Ruler, School, Shapes } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export type LearningTrackOption = {
    id: string;
    title: string;
    icon: LucideIcon;
    color: string;
    description: string;
};

export type Article = {
    id: string;
    title: string;
    subtitle: string;
    isHidden?: boolean;
};

export type Chapter = {
    id: string;
    title: string;
    articles: Article[];
};

export const SABERES: LearningTrackOption[] = [
    {
        id: "aritmetica",
        title: "Aritmética",
        icon: Calculator,
        color: "bg-blue-100 text-blue-600",
        description: "Domina los números y las operaciones básicas.",
    },
    {
        id: "geometria",
        title: "Geometría",
        icon: Shapes,
        color: "bg-green-100 text-green-600",
        description: "Explora formas, espacios y dimensiones.",
    },
    {
        id: "problemas",
        title: "Problemas",
        icon: BrainCircuit,
        color: "bg-purple-100 text-purple-600",
        description: "Desarrolla el pensamiento lógico y la resolución.",
    },
    {
        id: "medidas",
        title: "Medidas",
        icon: Ruler,
        color: "bg-orange-100 text-orange-600",
        description: "Aprende a medir el mundo que te rodea.",
    },
    {
        id: "probabilidad",
        title: "Probabilidad y Estadística",
        icon: BarChart3,
        color: "bg-red-100 text-red-600",
        description: "Analiza datos y predice resultados.",
    },
];

export const NIVELES: LearningTrackOption[] = [
    {
        id: "primeros-pasos",
        title: "Primeros Pasos",
        icon: Baby,
        color: "bg-emerald-100 text-emerald-700",
        description: "Infantil y 1º ciclo de Primaria",
    },
    {
        id: "segundo-ciclo",
        title: "Segundo Ciclo",
        icon: School,
        color: "bg-sky-100 text-sky-700",
        description: "3º y 4º de Primaria",
    },
    {
        id: "tercer-ciclo",
        title: "Tercer Ciclo",
        icon: GraduationCap,
        color: "bg-indigo-100 text-indigo-700",
        description: "5º y 6º de Primaria",
    },
];

// Mock data for content
export const COURSE_CONTENT: Record<string, Chapter[]> = {
    "aritmetica-primeros-pasos": [
        {
            id: "conceptos-basicos",
            title: "1. Conceptos básicos",
            articles: [
                {
                    id: "demo-article-components",
                    title: "Componentes para artículos",
                    subtitle: "Muestra todos los componentes y sus usos en una sola píldora.",
                    isHidden: true,
                },
                {
                    id: "mayor-menor",
                    title: "Mayor que / Menor que",
                    subtitle: "Aprende a comparar cantidades.",
                },
                {
                    id: "izquierda-derecha",
                    title: "Izquierda - Derecha",
                    subtitle: "Orientación espacial básica.",
                },
                {
                    id: "actividades-conceptos-basicos",
                    title: "Actividades Aritmética - Conceptos básicos",
                    subtitle: "Para practicar lo aprendido.",
                }
            ],
        },
        {
            id: "conteo",
            title: "2. Conteo",
            articles: [
                {
                    id: "conteo-recitativo",
                    title: "Conteo Recitativo",
                    subtitle: "La secuencia numérica verbal.",
                },
                {
                    id: "conteo-resultativo",
                    title: "Conteo Resultativo",
                    subtitle: "Contar para saber cuántos hay.",
                },
            ],
        },
        {
            id: "subitizacion",
            title: "Subitización",
            articles: [
                {
                    id: "subitizacion-tarjetas-puntos-1",
                    title: "Subitización con Tarjetas de Puntos: Nivel 1",
                    subtitle: "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos. Números del 1 al 3.",
                },
                {
                    id: "subitizacion-tarjetas-puntos-2",
                    title: "Subitización con Tarjetas de Puntos: Nivel 2",
                    subtitle: "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos. Números del 3 al 5.",
                },
                {
                    id: "subitizacion-tarjetas-puntos-3",
                    title: "Subitización con Tarjetas de Puntos: Nivel 3",
                    subtitle: "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos. Números del 5 al 7.",
                },
            ]
        },
        {
            id: "recta-numerica",
            title: "1. Introducción a la Recta Numérica",
            articles: [
                {
                    id: "descubriendo-recta",
                    title: "Descubriendo la Recta Numérica",
                    subtitle: "Cómo crear una conversación en el aula para que los niños/as descubran el concepto",
                }
            ],
        },

    ],
};

// Función helper para obtener datos de saber, nivel y capítulos visibles (no ocultos) para una ruta dada
export function getVisibleTrackData(saberId: string, nivelId: string): {
    saber?: LearningTrackOption;
    nivel?: LearningTrackOption;
    visibleChapters?: Chapter[];
} {
    const saber = SABERES.find((item) => item.id === saberId);
    const nivel = NIVELES.find((item) => item.id === nivelId);
    const contentKey = `${saberId}-${nivelId}`;

    const visibleChapters = COURSE_CONTENT[contentKey]
        ?.map((chapter) => ({
            ...chapter,
            articles: chapter.articles.filter((article) => !article.isHidden),
        }))
        .filter((chapter) => chapter.articles.length > 0);

    return { saber, nivel, visibleChapters };
}

export function hasVisibleArticle(chapters: Chapter[] | undefined, articleId: string): boolean {
    return chapters?.some((chapter) => chapter.articles.some((article) => article.id === articleId)) ?? false;
}

// Función helper para encontrar un artículo por su ID en saberes y niveles
export function findArticleById(articleId: string): Article | undefined {
    for (const chapters of Object.values(COURSE_CONTENT)) {
        for (const chapter of chapters) {
            const article = chapter.articles.find(a => a.id === articleId);
            if (article) {
                return article;
            }
        }
    }
    return undefined;
}
