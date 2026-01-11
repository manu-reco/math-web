import {
    ArticleHeader,
    ArticleSection,
    ActivityBox,
    TipBox,
    InfoBox,
    KeyPoints,
    DialogBubble,
    ConceptPopover
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/lib/pildorasData";
import Image from "next/image";

export default function SubitizacionTarjetasPuntosContent() {
    const article = findArticleById("subitizacion-tarjetas-puntos");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Subitización con Tarjetas de Puntos"}
                subtitle={article?.subtitle || "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo."}
                description="Con esta pildora aprenderás a utilizar tarjetas de puntos para enseñar a identificar cantidades pequeñas rápidamente, asociándolas con los números arábigos que las representan."
                category="Aritmética"
                level="Primeros Pasos"
            />
        </>
    );
}