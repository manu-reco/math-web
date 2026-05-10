import { z } from 'zod';

const PositionSchema = z.object({
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
});

const AppearSchema = z.object({
    actor: z.string(),
    action: z.literal('appear'),
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
    confetti: z.boolean().optional(),
});

const DisappearSchema = z.object({
    actor: z.string(),
    action: z.literal('disappear'),
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
});

const MoveSchema = z.object({
    actor: z.string(),
    action: z.literal('move'),
    to: PositionSchema,
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
});

const DragSchema = z.object({
    actor: z.string(),
    action: z.literal('drag'),
    targetId: z.string().optional(),
    duration: z.number().optional(),
    delay: z.number().optional(),
});

const PlaySoundSchema = z.object({
    actor: z.string(),
    action: z.literal('playSound'),
    sound: z.string(),
    delay: z.number().optional(),
});

const ChangeSrcSchema = z.object({
    actor: z.string(),
    action: z.literal('change-src'),
    to: z.object({ src: z.string() }),
    delay: z.number().optional(),
});

const ChangeTextSchema = z.object({
    actor: z.string(),
    action: z.literal('change-text'),
    to: z.object({ text: z.string() }),
    delay: z.number().optional(),
});

const ActionDefinitionSchema = z.discriminatedUnion('action', [
    AppearSchema,
    DisappearSchema,
    MoveSchema,
    DragSchema,
    PlaySoundSchema,
    ChangeSrcSchema,
    ChangeTextSchema,
]);

const ActorDefinitionSchema = z.object({
    id: z.string(),
    type: z.enum(['image', 'text']),
    src: z.string().optional(),
    text: z.string().optional(),
    textFontSize: z.union([z.string(), z.number()]).optional(),
    textBackgroundOpacity: z.number().min(0).max(100).optional(),
    textColor: z.string().optional(),
    textOutline: z.boolean().optional(),
    textOutlineSize: z.string().optional(),
    textOutlineColor: z.string().optional(),
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
    onEnter: z.array(ActionDefinitionSchema).optional(),
    onExit: z.array(ActionDefinitionSchema).optional(),
    advanceOn: z.enum(['spaceOrClick', 'dragComplete', 'auto', 'animation']).default('spaceOrClick'),
    dragTargets: z.array(DragTargetSchema).optional(),
    autoAdvanceDelay: z.number().optional(),
});

const StoryDataSchema = z.object({
    title: z.string(),
    author: z.string().optional(),
    narrator: z.string().optional(),
    background: z.string().optional(),
    backgroundColor: z.string().optional(),
    actors: z.array(ActorDefinitionSchema),
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
