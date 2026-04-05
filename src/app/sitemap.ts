import type { MetadataRoute } from "next";
import { COURSE_CONTENT } from "@/data/pildorasData";
import { getCanonicalUrl } from "@/lib/siteUrl";

export const dynamic = "force-static";

function getPildorasRoutes(): string[] {
    const routes = new Set<string>();

    for (const [trackKey, chapters] of Object.entries(COURSE_CONTENT)) {
        const [saberId, nivelId] = trackKey.split("-");

        if (!saberId || !nivelId) {
        continue;
        }

        routes.add(`/formacion/pildoras/${saberId}/${nivelId}`);

        for (const chapter of chapters) {
        for (const article of chapter.articles) {
            if (!article.isHidden) {
            routes.add(`/formacion/pildoras/${saberId}/${nivelId}/${article.id}`);
            }
        }
        }
    }

    return Array.from(routes);
}

export default function sitemap(): MetadataRoute.Sitemap {
    const now = new Date();

    const staticRoutes = [
        "/",
        "/actividades",
        "/contacto",
        "/formacion/online",
        "/formacion/pildoras",
        "/nosotros",
        "/precios",
        "/login",
        "/register",
    ];

    const allRoutes = [...staticRoutes, ...getPildorasRoutes()];

    return allRoutes.map((route) => ({
        url: getCanonicalUrl(route),
        lastModified: now,
        changeFrequency: route === "/" ? "weekly" : "monthly",
        priority: route === "/" ? 1 : 0.7,
    }));
}
