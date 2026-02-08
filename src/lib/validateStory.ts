import { z } from 'zod';

const PositionSchema = z.object({
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
});

const ActionDefinitionSchema = z.object({
    actor: z.string(),
    action: z.enum(['appear', 'disappear', 'move', 'drag', 'playSound']),
    to: PositionSchema.optional(),
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
    sound: z.string().optional(),
    confetti: z.boolean().optional(),
    targetId: z.string().optional(),
});

const ActorDefinitionSchema = z.object({
    id: z.string(),
    type: z.enum(['image', 'text']),
    src: z.string().optional(),
    text: z.string().optional(),
    textFontSize: z.union([z.string(), z.number()]).optional(),
    textBackgroundOpacity: z.number().min(0).max(100).optional(),
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
    width: z.number().optional(),
    height: z.number().optional(),
    interactive: z.boolean().optional(),
    draggable: z.boolean().optional(),
    scale: z.number().optional(),
    rotation: z.number().optional(),
    zIndex: z.number().optional(),
});

const DragTargetSchema = z.object({
    id: z.string(),
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
    width: z.number().min(0).max(100),
    height: z.number().min(0).max(100),
    acceptsActors: z.array(z.string()),
});

const PageDefinitionSchema = z.object({
    id: z.string(),
    background: z.string().optional(),
    backgroundColor: z.string().optional(),
    actors: z.array(z.union([ActorDefinitionSchema, ActionDefinitionSchema])),
    onEnter: z.array(ActionDefinitionSchema).optional(),
    onExit: z.array(ActionDefinitionSchema).optional(),
    advanceOn: z.enum(['spaceOrClick', 'dragComplete', 'auto', 'animation']),
    dragTargets: z.array(DragTargetSchema).optional(),
    autoAdvanceDelay: z.number().optional(),
});

const StoryDataSchema = z.object({
    title: z.string(),
    author: z.string().optional(),
    narrator: z.string().optional(),
    background: z.string().optional(),
    backgroundColor: z.string().optional(),
    pages: z.array(PageDefinitionSchema).min(1),
});

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
