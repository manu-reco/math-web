
import {
    ArticleHeader,
    ArticleSection,
    KeyPoints,
    ConceptPopover
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
                    <ConceptPopover
                        key="concepto-de-cantidad"
                        conceptId="concepto-de-cantidad"
                    />,
                    <ConceptPopover
                        key="conteo"
                        conceptId="conteo"
                    />,
                    <ConceptPopover
                        key="cardinalidad"
                        conceptId="cardinalidad"
                    />,
                    <ConceptPopover
                        key="subitizacion"
                        conceptId="subitizacion"
                    />,
                    <ConceptPopover
                        key="composicion-y-descomposicion"
                        conceptId="composicion-y-descomposicion"
                    />,
                    <ConceptPopover
                        key="correspondencia-uno-a-uno"
                        conceptId="correspondencia-uno-a-uno"
                    />,
                    <ConceptPopover
                        key="construccion-recta-numerica"
                        conceptId="construccion-recta-numerica"
                    />,
                ]} />
                <p>Con estas actividades podemos trabajar conceptos tan importantes como la <ConceptPopover
                    conceptId="subitizacion"
                    text="subitización"
                />.
                </p>
            </ArticleSection>
        </>
    );
}
