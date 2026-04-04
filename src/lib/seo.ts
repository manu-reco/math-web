import type { Metadata } from "next";

export function buildPageMetadata({
    title,
    description,
    path,
    }: {
    title: string;
    description: string;
    path: string;
    }): Metadata {
    return {
        title,
        description,
        alternates: {
        canonical: path,
        },
        openGraph: {
        title,
        description,
        url: path,
        locale: "es_ES",
        type: "website",
        siteName: "MathEdu",
        },
        twitter: {
        card: "summary_large_image",
        title,
        description,
        },
    };
}