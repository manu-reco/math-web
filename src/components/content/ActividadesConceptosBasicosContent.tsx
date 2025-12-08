
import {
    ArticleHeader,
    ArticleSection,
    KeyPoints,
    ConceptTooltip
} from "@/components/pildoras/ArticleComponents";


export default function ActividadesConceptosBasicosContent() {
    return (
        <>
            <ArticleHeader
                title="Actividades Aritmética - Conceptos básicos"
                subtitle="Para practicar lo aprendido"
                description="Una vez vistos los conceptos básicos, es importante reforzar con actividades prácticas."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Actividades que entrenan: ">
                <KeyPoints points={[
                    "Concepto de cantidad",
                    "Conteo",
                    "Cardinalidad",
                    "Subitización",
                    "Composición y descomposición",
                    "Correspondencia uno a uno",
                    "Construcción de la recta numérica"
                ]} />
                <p>Con estas actividades podemos trabajar conceptos tan importantes como la <ConceptTooltip
                        title="subitización"
                        description="La capacidad de reconocer la cantidad de objetos en un conjunto sin necesidad de contarlos uno a uno."
                    />.
                </p>
            </ArticleSection>
        </>
    );
}
