"use client"

import { useEffect } from "react"
import { fireStarsConfetti } from "@/lib/confetti"

export function ConfettiOnMount() {
    useEffect(() => {
        fireStarsConfetti()
    }, []) // El array vacío asegura que solo ocurra al montar

    return null // No renderiza nada visualmente
}