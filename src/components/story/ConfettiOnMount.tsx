"use client"

import { useEffect } from "react"

interface ConfettiOnMountProps {
    onMount: () => void;
}

export function ConfettiOnMount({ onMount }: ConfettiOnMountProps) {
useEffect(() => {
        onMount();
    }, [onMount]);

    return null;
}