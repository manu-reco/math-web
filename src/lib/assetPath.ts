const BASE_PATH = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function withBasePath(src: string): string {
    if (!src) {
        return src;
    }

    if (
        src.startsWith("http://") ||
        src.startsWith("https://") ||
        src.startsWith("data:") ||
        src.startsWith("blob:")
    ) {
        return src;
    }

    const normalizedSrc = src.startsWith("/") ? src : `/${src}`;

    if (!BASE_PATH) {
        return normalizedSrc;
    }

    if (normalizedSrc === BASE_PATH || normalizedSrc.startsWith(`${BASE_PATH}/`)) {
        return normalizedSrc;
    }

    return `${BASE_PATH}${normalizedSrc}`;
}