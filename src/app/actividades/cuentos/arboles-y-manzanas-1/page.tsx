import chapter1 from "@/data/cuentos/arboles-y-manzanas-1.story.json";
import chapter2 from "@/data/cuentos/arboles-y-manzanas-2.story.json";
import StoryPageTemplate from "@/components/actividades/cuentos/StoryPageTemplate";

export default function ArbolesYManzanasStoryPage() {
    return (
        <StoryPageTemplate
            chapters={[
                { id: "capitulo-1", storyData: chapter1 },
                { id: "capitulo-2", storyData: chapter2 },
            ]}
        />
    );
}
