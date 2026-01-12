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
                subtitle={article?.subtitle || "Utilizamos tarjetas con puntos para identificar cantidades pequeñas de forma súbita, sin conteo, y asociarlas con números arábigos."}
                description="Con esta actividad los niños/as de los primeros niveles aprenderán a reconocer pequeñas cantidades de elementos de manera instantánea, trabajando individualmente o en grupo. Esto, además de la subitización, trabaja conceptos fundamentales como la asociación cantidad-número, la composición y descomposición de los números y la propiedad conmutativa de la suma, entre otros."
                category="Aritmética"
                level="Primeros Pasos"
            />

            <ArticleSection title="Juego 1. Nivel 1.">
                <p><strong>Objetivo:</strong> Identificar las cantidades 1, 2 y 3, asociándolas con los números arábigos que las representan.</p>

                <p><strong>Habilidades que se entrenan:</strong></p>

                <KeyPoints points={[
                    <ConceptPopover
                        key="subitizacion"
                        conceptId="subitizacion"
                    />,
                    <ConceptPopover
                        key="concepto-de-cantidad"
                        conceptId="concepto-de-cantidad"
                        text="Asociación cantidad-número (o concepto de cantidad)"
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
                        key="composicion-y-descomposicion"
                        conceptId="composicion-y-descomposicion"
                    />,
                    <ConceptPopover
                        key="propiedad-conmutativa-suma"
                        conceptId="propiedad-conmutativa-suma"
                    />,
                    <span key="etc" className='font-semibold'>etc.</span>
                ]} />

                <p><strong>Materiales:</strong></p>

                <ul className="list-disc list-inside my-4 ml-8 space-y-3">
                    <li>Tarjetas con puntos negros. Las tarjetas tienen un punto, dos puntos o tres puntos, colocados de formas distintas. Necesitaremos, al menos, tres tarjetas de cada cantidad en cada lote.</li>
                    <li>Tarjetas con los dígitos 1, 2 y 3.</li>
                </ul>

                <div className="flex justify-center my-6">
                    <Image src="/subitizacion/subitizacion-puntos-1-3.jpeg" alt="Juego de tarjetas con puntos con cantidades del 1 al 3, para agrupar bajo tarjetas con los dígitos 1, 2 y 3" width={250} height={400} />
                </div>


                <InfoBox title="Consejo sobre el material">
                    <p>Se puede jugar individualmente o en grupo. </p>
                    <p>Si la actividad se realiza con el grupo clase, deberemos tener <strong>un lote para cada cuatro niños/as</strong>, aproximadamente.</p>
                </InfoBox>

                <p><strong>Dinámica: </strong></p>

                <p>Se colocan las tarjetas con los dígitos en una mesa o en el suelo, de forma que quede espacio debajo de ellas para poder colocar las tarjetas de puntos.</p>

                <p>Se establece un orden de intervención. Cada niño/a <strong>tomará una tarjeta de puntos</strong>, mirará detenidamente la cantidad <strong>y la colocará debajo de la tarjeta del dígito correspondiente.</strong></p>

                <p>Cuando todas las tarjetas estén colocadas, se hará una comprobación. Si alguna tarjeta ha quedado en un lugar incorrecto, <strong>se invitará a los niños/as a revisarlo contando los puntos uno por uno</strong>.</p>
                
                <p>En este juego <strong>no hay límite de tiempo y nadie gana ni pierde. Se trabaja en equipo</strong>.</p>

            </ArticleSection>
                
        </>
    );
}