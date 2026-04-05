import type { Metadata } from "next";
import chapter1 from "@/data/cuentos/arboles-y-manzanas-1.story.json";
import chapter2 from "@/data/cuentos/arboles-y-manzanas-2.story.json";
import chapter3 from "@/data/cuentos/arboles-y-manzanas-3.story.json";
import { MultiChapterStoryPageTemplate } from "@/components/actividades/cuentos/StoryPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Cuento: Arboles y manzanas",
    description:
        "Cuento interactivo por capitulos para trabajar conteo y representacion numerica en Educacion Infantil y Primaria.",
    path: "/actividades/cuentos/arboles-y-manzanas-1",
});

export default function ArbolesYManzanasStoryPage() {
    return (
        <MultiChapterStoryPageTemplate
            chapters={[
                { id: "capitulo-1", storyData: chapter1 },
                { id: "capitulo-2", storyData: chapter2 },
                { id: "capitulo-3", storyData: chapter3 },
            ]}
        />
    );
}
