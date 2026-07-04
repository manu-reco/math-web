'use client';

import * as React from 'react';
import { motion, type HTMLMotionProps } from 'motion/react';

import { Slot, type WithAsChild } from '@/components/animate-ui/primitives/animate/slot';

type ButtonProps = WithAsChild<
  HTMLMotionProps<'button'> & {
    hoverScale?: number;
    tapScale?: number;
    animate?: boolean;
  }
>;

function Button({
  hoverScale = 1.02,
  tapScale = 0.98,
  animate = true,
  asChild = false,
  ...props
}: ButtonProps) {
  const Component = asChild ? Slot : motion.button;

  return (
    <Component
      whileTap={animate ? { scale: tapScale } : undefined}
      whileHover={animate ? { scale: hoverScale } : undefined}
      {...props}
    />
  );
}

export { Button, type ButtonProps };
