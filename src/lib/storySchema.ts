import { z } from "zod";

export const PositionSchema = z.object({
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
});

export const AppearSchema = z.object({
    actor: z.string(),
    action: z.literal("appear"),
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
    confetti: z.boolean().optional(),
});

export const DisappearSchema = z.object({
    actor: z.string(),
    action: z.literal("disappear"),
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
});

export const MoveSchema = z.object({
    actor: z.string(),
    action: z.literal("move"),
    to: PositionSchema,
    duration: z.number().optional(),
    delay: z.number().optional(),
    easing: z.string().optional(),
});

export const DragSchema = z.object({
    actor: z.string(),
    action: z.literal("drag"),
    targetId: z.string().optional(),
    duration: z.number().optional(),
    delay: z.number().optional(),
});

export const PlaySoundSchema = z.object({
    actor: z.string(),
    action: z.literal("playSound"),
    sound: z.string(),
    delay: z.number().optional(),
});

export const ChangeSrcSchema = z.object({
    actor: z.string(),
    action: z.literal("change-src"),
    to: z.object({ src: z.string() }),
    delay: z.number().optional(),
});

export const ChangeTextSchema = z.object({
    actor: z.string(),
    action: z.literal("change-text"),
    to: z.object({ text: z.string() }),
    delay: z.number().optional(),
});

export const ActionDefinitionSchema = z.discriminatedUnion("action", [
    AppearSchema,
    DisappearSchema,
    MoveSchema,
    DragSchema,
    PlaySoundSchema,
    ChangeSrcSchema,
    ChangeTextSchema,
]);

export const ActorDefinitionSchema = z.object({
    id: z.string(),
    type: z.enum(["image", "text", "subtitle"]),
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
}).superRefine((value, context) => {
    if (value.type === "image" && !value.src) {
        context.addIssue({
            code: "custom",
            path: ["src"],
            message: "image actors require a source image",
        });
    }
    if (value.type === "image" && (value.text || value.textFontSize || value.textColor || value.textOutline || value.textOutlineSize || value.textOutlineColor)) {
        context.addIssue({
            code: "custom",
            path: ["text"],
            message: "image actors cannot define text properties",
        });
    }
    if ((value.type === "text" || value.type === "subtitle") && value.src) {
        context.addIssue({
            code: "custom",
            path: ["src"],
            message: "text and subtitle actors cannot define src",
        });
    }
    if (value.type === "subtitle" && value.draggable) {
        context.addIssue({
            code: "custom",
            path: ["draggable"],
            message: "subtitle actors cannot be draggable",
        });
    }
});

export const DragTargetSchema = z.object({
    id: z.string(),
    x: z.number().min(0).max(100),
    y: z.number().min(0).max(100),
    width: z.number().min(0).max(100),
    height: z.number().min(0).max(100),
    acceptsActors: z.array(z.string()),
});

export const PageDefinitionSchema = z.object({
    id: z.string(),
    background: z.string().optional(),
    backgroundColor: z.string().optional(),
    onEnter: z.array(ActionDefinitionSchema).optional(),
    onExit: z.array(ActionDefinitionSchema).optional(),
    advanceOn: z.enum(["spaceOrClick", "dragComplete", "auto", "animation"]).default("spaceOrClick"),
    dragTargets: z.array(DragTargetSchema).optional(),
    autoAdvanceDelay: z.number().optional(),
});

export const StoryDataSchema = z.object({
    title: z.string(),
    author: z.string().optional(),
    narrator: z.string().optional(),
    background: z.string().optional(),
    backgroundColor: z.string().optional(),
    actors: z.array(ActorDefinitionSchema),
    pages: z.array(PageDefinitionSchema).min(1),
});

export type Position = z.infer<typeof PositionSchema>;
export type ActionDefinition = z.infer<typeof ActionDefinitionSchema>;
export type ActorDefinition = z.infer<typeof ActorDefinitionSchema>;
export type DragTargetDefinition = z.infer<typeof DragTargetSchema>;
export type PageDefinition = z.infer<typeof PageDefinitionSchema>;
export type StoryData = z.infer<typeof StoryDataSchema>;
