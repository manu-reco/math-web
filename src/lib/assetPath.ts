const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(src: string): string {
    if (!src) {
        return src;
    }

    const slashNormalized = src.replace(/\\/g, "/");

    if (
        slashNormalized.startsWith("http://") ||
        slashNormalized.startsWith("https://") ||
        slashNormalized.startsWith("data:") ||
        slashNormalized.startsWith("blob:")
    ) {
        return slashNormalized;
    }

    const normalizedSrc = slashNormalized.startsWith("/") ? slashNormalized : `/${slashNormalized}`;

    if (!BASE_PATH) {
        return normalizedSrc;
    }

    if (normalizedSrc === BASE_PATH || normalizedSrc.startsWith(`${BASE_PATH}/`)) {
        return normalizedSrc;
    }

    return `${BASE_PATH}${normalizedSrc}`;
}