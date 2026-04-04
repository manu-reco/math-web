import type { Metadata } from "next";
import { buildPageMetadata } from "@/lib/seo";

export const metadata: Metadata = buildPageMetadata({
    title: "Subitizacion",
    description:
        "Actividad interactiva de subitizacion para reconocer cantidades de forma rapida y reforzar sentido numerico.",
    path: "/actividades/subitizacion",
});

export default function SubitizacionLayout({ children }: { children: React.ReactNode }) {
    return children;
}