'use client';

import * as React from 'react';
import { cva, type VariantProps } from 'class-variance-authority';

import {
  Button as ButtonPrimitive,
  type ButtonProps as ButtonPrimitiveProps,
} from '@/components/animate-ui/primitives/buttons/button';
import { cn } from '@/lib/utils';

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-[box-shadow,_color,_background-color,_border-color,_outline-color,_text-decoration-color,_fill,_stroke] disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg:not([class*='size-'])]:size-4 shrink-0 [&_svg]:shrink-0 outline-none focus-visible:border-ring focus-visible:ring-ring/50 focus-visible:ring-[3px] aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive",
  {
    variants: {
      variant: {
        primary: 
          'bg-primary text-primary-foreground hover:bg-primary-hover shadow-sm focus-visible:outline-primary',
        secondary: 
          'bg-secondary text-primary-foreground hover:bg-secondary-hover shadow-sm focus-visible:outline-secondary',
        outline: 
          'border-2 border-primary/35 bg-card text-primary hover:border-primary/50 hover:bg-gradient-to-b hover:from-primary/5 hover:to-primary/5 focus-visible:outline-primary',
        white: 
          'bg-card text-primary hover:bg-muted focus-visible:outline-card',
        destructive:
          'bg-destructive text-white shadow-xs hover:bg-destructive/90 focus-visible:outline-destructive',
        ghost:
          'hover:bg-primary hover:text-primary-foreground dark:hover:bg-accent/50',
        link: 'text-primary underline-offset-4 hover:underline',
      },
      size: {
        md: 'min-h-11 px-5 py-2.5 text-base font-semibold',
        lg: 'min-h-12 px-6 py-3 text-md font-bold',
        sm: 'min-h-10 px-4 py-2 text-sm font-semibold',
        icon: 'size-9',
        'icon-sm': 'size-8 rounded-md',
        'icon-lg': 'size-10 rounded-md',
      },
    },
    defaultVariants: {
      variant: 'primary',
      size: 'md',
    },
  },
);

type ButtonProps = ButtonPrimitiveProps & VariantProps<typeof buttonVariants>;

function Button({ className, variant, size, ...props }: ButtonProps) {
  return (
    <ButtonPrimitive
      className={cn(buttonVariants({ variant, size, className }))}
      {...props}
    />
  );
}

export { Button, buttonVariants, type ButtonProps };