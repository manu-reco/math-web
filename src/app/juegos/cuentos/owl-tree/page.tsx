import storyData from "@/data/cuentos/owl-tree.story.json";
import StoryPageTemplate from "@/app/juegos/cuentos/_components/StoryPageTemplate";

export default function OwlTreeStoryPage() {
    return <StoryPageTemplate storyData={storyData} />;
}
