import type { Metadata } from "next";
import PildorasPageClient from "@/components/pildoras/PildorasPageClient";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Pildoras de formacion",
    description:
        "Elige saber y nivel para acceder a pildoras de formacion matematica adaptadas a cada etapa educativa.",
    path: "/formacion/pildoras",
});

export default function PildorasPage() {
    return <PildorasPageClient />;
}
