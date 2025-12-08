
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
                    <ConceptTooltip
                        key={"Concepto de cantidad"}
                        title="Concepto de cantidad"
                        description="Entender la cantidad que representa un número."
                    />,
                    <ConceptTooltip
                        key={"Conteo"}
                        title="Conteo"
                        description="Ser capaz de contar objetos de manera ordenada y precisa."
                    />,
                    <ConceptTooltip
                        key={"Cardinalidad"}
                        title="Cardinalidad"
                        description="Comprender que el último número contado representa la cantidad total de objetos."
                    />,
                    <ConceptTooltip
                        key={"Subitización"}
                        title="Subitización"
                        description="La capacidad de reconocer la cantidad de objetos en un conjunto sin necesidad de contarlos uno a uno."
                    />,
                    <ConceptTooltip
                        key={"Composición y descomposición"}
                        title="Composición y descomposición"
                        description="Entender cómo los números se pueden descomponer en partes y recomponer."
                    />,
                    <ConceptTooltip
                        key={"Correspondencia uno a uno"}
                        title="Correspondencia uno a uno"
                        description="Emparejar cada objeto de un conjunto con un objeto de otro conjunto."
                    />,
                    <ConceptTooltip
                        key={"Construcción de la recta numérica"}
                        title="Construcción de la recta numérica"
                        description="Comprender la representación visual de los números en una línea continua."
                    />,
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
