import {
    ActivityBox,
    ArticleHeader,
    ArticleImages,
    ArticleNavigationButton,
    ArticleSection,
    ConceptPopover,
    ConceptTooltip,
    DownloadButton,
    DialogBubble,
    InfoBox,
    KeyPoints,
    PdfButton,
    TipBox,
} from "@/components/pildoras/ArticleComponents";
import { findArticleById } from "@/data/pildorasData";

export default function DemoArticleComponentsContent() {
    const article = findArticleById("demo-article-components");

    return (
        <>
            <ArticleHeader
                title={article?.title || "Componentes para artículos"}
                subtitle={"Artículo de prueba oculto para ver todos los componentes disponibles en una sola página."}
                description="Sirve como referencia de estilo y uso de los componentes diseñados para los artículos."
                category="Demo"
                level="Oculto"
            />

            <ArticleHeader
                title={"1) ArticleHeader"}
                subtitle={"El encabezado de cada artículo"}
                description="Muestra el título, subtítulo y descripción del artículo. Se usa al principio de cada artículo para proporcionar un resumen claro del contenido que se va a tratar. También se puede indicar la categoría y el nivel del artículo (ej.: Aritmética - Primeros pasos)"
                category="Demo"
                level="Oculto"
            />

            <ArticleSection title="2) ArticleSection">
                <p>
                    Divide el contenido en bloques con un título al principio y el contenido que quieras en su interior.
                </p>
            </ArticleSection>

            <ArticleSection title="3) Recursos visuales y llamadas de atencion">
                <p><strong>Key Points</strong></p>
                <KeyPoints
                    points={[
                        "Para destacar ideas clave",
                        "Puede ser texto simple",
                        <ConceptPopover key="concept" conceptId="subitizacion" text="O componentes personalizados" definition="Esto es un ConceptPopover" />,
                    ]}
                />
                <InfoBox title="InfoBox">
                    Caja azul con título y descripción para llamar la atención del usuario con aclaraciones, sugerencias o aspectos a tener en cuenta.
                </InfoBox>

                <TipBox>
                    <strong>TipBox</strong>: Caja de estilo visual similar, sin título, para recomendaciones rapidas o ideas para guiar al docente.
                </TipBox>

                <ActivityBox title="ActivityBox">
                    <p>
                        Caja para describe una tarea concreta para clase con materiales, pasos y objetivo de aprendizaje.
                    </p>
                </ActivityBox>

                <p><strong>Contenedor de imágenes</strong></p>
                <p>Puede tener solo una imagen, o varias. Si hay varias, siempre tienen la misma altura y la anchura se ajusta para mantener la proporción. Se muestran en una fila y ocupan una nueva si no caben. Si una imagen no cabe en la fila por la anchura, sí se reduce la altura. </p>
                <ArticleImages
                    images={[
                        { src: "/recta-numerica/2-buhos-rojos.png", alt: "Una recta numérica con 5 celdas, con dos búhos rojos dentro de la recta y 3 fuera." },
                    ]}
                />
                <ArticleImages
                    images={[
                        { src: "/izquierda-derecha/mano-izquierda.png", alt: "Mano izquierda" },
                        { src: "/izquierda-derecha/mano-derecha.png", alt: "Mano derecha" },
                    ]}
                />
            </ArticleSection>

            <ArticleSection title="3) Diálogos">

                <p><strong>Burbujas de diálogo</strong></p>
                <p>Para mostrar conversaciones entre maestros y estudiantes. Tienen un estilo similar al de las conversaciones por WhatsApp, y se puede personalizar su color. Empiezan siempre con un guión porque son diálogos.</p>
                <p>Los <strong>maestros</strong> tienen un icono de graduado, están alineados a la izquierda y son de color naranja por defecto.</p>
                <DialogBubble speaker="teacher">
                    ¡Hoy vamos a aprender los dobles del 1 al 10!
                </DialogBubble>
                <p>Los <strong>alumnos</strong> tienen un icono de persona, están alineados a la derecha y son de color primario (verdigris) por defecto.</p>
                <DialogBubble speaker="student">
                    ¡Yo ya sé hacer eso, más difícil!
                </DialogBubble>
                <DialogBubble speaker="student" color="purple">
                    A mí me cuesta un poco, ¿podemos practicar con los dobles del 1 al 5 primero?
                </DialogBubble>
            </ArticleSection>

            <ArticleSection title="4) Conceptos con Popover (ventana emergente)">

                <p>Muestra un concepto con un <strong>cuadro emergente que se activa al pasar el cursor por encima o al hacer clic</strong>. De estilo similar al texto corriente, pero en semi-negrita y con un subrayado punteado que invita a interactuar.</p>
                <p>Pensado para sacar las definiciones de un diccionario de conceptos, pero se puede personalizar el texto y la definición si se desea.</p>
                <p>Ejemplos: </p>

                <p>
                    Este es un concepto del diccionario → <ConceptPopover conceptId="cardinalidad" /> y este es un <ConceptPopover conceptId="subitizacion" text="Concepto personalizado" definition="Se puede personalizar el texto y la definición" />.
                </p>

                <p>
                    <strong>Concepto con Tooltip:</strong> (versión anterior con más problemas de click, usar mejor el Popover): <ConceptTooltip title="Tooltip" description="Reconocer cantidades de forma inmediata sin conteo uno a uno." />.
                </p>
            </ArticleSection>

            <ArticleSection title="5) Botones de recurso y navegación">
                <p>Botón de <strong>descarga</strong> (dos variantes):</p>
                <div className="flex flex-wrap items-center gap-4">
                    <DownloadButton
                        filePath="/subitizacion/tarjetas-puntos-1-4-desord.png"
                        label="Descargar ejemplo PNG"
                        variant="outline"
                    />
                    <DownloadButton
                        filePath="/subitizacion/juego-puntos-1-3-desorden.jpeg"
                        label="Descargar ejemplo JPEG"
                        variant="default"
                        size="sm"
                    />
                </div>

                <p>Botón doble para <strong>visualizar PDF o descargar</strong>.</p>
                <PdfButton
                    filePath="/subitizacion/Subitización puntos 1-5 pequeño.pdf"
                    label="Ver PDF de ejemplo"
                />

                <p>Botones de <strong>navegación</strong> (dos direcciones):</p>
                <div className="mt-8 flex flex-wrap items-center gap-4">
                    <ArticleNavigationButton
                        href="#"
                        direction="previous"
                        label="Volver al índice"
                        size="sm"
                    />
                    <ArticleNavigationButton
                        href="#"
                        direction="next"
                        label="Ir al siguiente artículo"
                        size="sm"
                    />
                </div>
            </ArticleSection>
        </>
    );
}
