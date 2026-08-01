import * as React from "react"

import { cn } from "@/lib/utils"

/*
Composition to build a Card:

Card
├── CardHeader
│   ├── CardTitle
│   ├── CardDescription
│   └── CardAction
├── CardContent
└── CardFooter
*/

/**
 * The Card component is the root container for card content.
 * It acts as a vertical flex container.
 * It comes with rounded corners (2xl), padding (py-6) and gap (gap-6) by default.
 * @param className Additional Tailwind classes to customize the container or overwrite the default styles (e.g., hover effects, fixed widths, padding...).
 * @param props All standard HTML `div` tag properties.
 */
function Card({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card"
      className={cn(
        "flex flex-col gap-6 rounded-2xl border border-border bg-card py-6 text-card-foreground shadow-sm overflow-hidden",
        className
      )}
      {...props}
    />
  )
}

/**
 * The CardHeader component is used for a title, description, and optional action.
 * It has a default padding (px-6) and a small gap (gap-2) between subcomponents.
 * @param className Additional Tailwind classes to adjust spacing or alignment (e.g., `text-center`).
 * @param props All standard HTML `div` tag properties.
 */
function CardHeader({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-header"
      className={cn(
        "@container/card-header grid auto-rows-min grid-rows-[auto_auto] items-start gap-2 px-6 has-data-[slot=card-action]:grid-cols-[1fr_auto] [.border-b]:pb-6",
        className
      )}
      {...props}
    />
  )
}

function CardOverline({ className, ...props }: React.ComponentProps<"p">) {
  return (
    <p
      data-slot="card-overline"
      className={cn(
        "text-sm font-semibold uppercase tracking-[0.2em] text-text-secondary",
        className
      )}
      {...props}
    />
  )
}

/**
 * The CardTitle component is used for the card title.
 * It has a bigger font size (xl) and a bold font weight.
 * @param className Additional Tailwind classes to customize the title (e.g., size, weight).
 * @param props All standard HTML `div` tag properties.
 */
function CardTitle({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-title"
      className={cn("text-text text-xl font-bold leading-none tracking-tight", className)}
      {...props}
    />
  )
}

/**
 * The CardDescription component is used for helper text under the title.
 * It has a smaller font size (sm) and a secondary text color.
 * @param className Additional Tailwind classes to customize the description (e.g., color, size, weight).
 * @param props All standard HTML `div` tag properties.
 */
function CardDescription({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-description"
      className={cn("text-sm leading-relaxed text-text-secondary", className)}
      {...props}
    />
  )
}

/**
 * The CardAction component places content in the top-right of the header (for example, a button or a badge).
 * It has a smaller font size (sm).
 * @param className Additional Tailwind classes to customize the action (e.g., color, size).
 * @param props All standard HTML `div` tag properties.
 */
function CardAction({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-action"
      className={cn(
        "col-start-2 row-span-2 row-start-1 self-start justify-self-end text-sm",
        className
      )}
      {...props}
    />
  )
}

/**
 * The CardContent component is used for the main card body.
 * It has horizontal padding (px-6) by default.
 * @param className Additional Tailwind classes to customize the content (e.g., spacing, alignment).
 * @param props All standard HTML `div` tag properties.
 */
function CardContent({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-content"
      className={cn("px-6", className)}
      {...props}
    />
  )
}

/**
 * The CardFooter component is used for actions and secondary content at the bottom of the card.
 * It has horizontal padding (px-6) and a top border with padding (pt-6) by default.
 * @param className Additional Tailwind classes to customize the footer (e.g., spacing, alignment).
 * @param props All standard HTML `div` tag properties.
 */
function CardFooter({ className, ...props }: React.ComponentProps<"div">) {
  return (
    <div
      data-slot="card-footer"
      className={cn("flex items-center px-6 [.border-t]:pt-6", className)}
      {...props}
    />
  )
}

export {
  Card,
  CardHeader,
  CardOverline,
  CardTitle,
  CardDescription,
  CardAction,
  CardContent,
  CardFooter,
}
