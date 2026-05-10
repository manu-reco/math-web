import { z } from "zod";
import { StoryDataSchema } from "@/lib/storySchema";

export function validateStoryData(data: unknown) {
    try {
        return StoryDataSchema.parse(data);
    } catch (error) {
        if (error instanceof z.ZodError) {
            console.error('Story validation errors:', error.issues);
            throw new Error(`Invalid story data: ${error.issues.map(e => `${e.path.join('.')}: ${e.message}`).join(', ')}`);
        }
        throw error;
    }
}

export type ValidatedStoryData = z.infer<typeof StoryDataSchema>;
