import type { Metadata } from "next";
import storyData from "@/data/cuentos/owl-tree.story.json";
import { SingleChapterStoryPageTemplate } from "@/components/actividades/cuentos/StoryPageTemplate";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Cuento: Owl tree",
    description:
        "Cuento interactivo para practicar nociones matematicas con narrativa guiada y actividades visuales.",
    path: "/actividades/cuentos/owl-tree",
});

export default function OwlTreeStoryPage() {
    return <SingleChapterStoryPageTemplate storyData={storyData} />;
}
