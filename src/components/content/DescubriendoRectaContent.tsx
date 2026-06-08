
import {
    ArticleHeader,
    ArticleSection,
    KeyPoints,
    DialogTeacherBubble,
    DialogStudentBubble,
    ConceptPopover,
    ArticleImages,
} from "@/components/pildoras/ArticleComponents";

import { findArticleById } from "@/data/pildorasData";

export default function DescubriendoRectaContent() {
    const article = findArticleById("descubriendo-recta");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Descubriendo la Recta Numérica"}
                subtitle={article?.subtitle || "Ejemplo de actividad que favorece la construcción de la recta numérica manipulativa."}
                description="En el artículo anterior, hemos visto que aprender a construir la recta numérica es fundamental para el desarrollo del sentido numérico en los niños y niñas. Hoy lo enseñamos de manera sencilla, utilizando una conversación guiada en el aula y material manipulativo."
                category="Aritmética"
                level="Primeros Pasos"
            />
        </>
    );
}