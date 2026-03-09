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
    const encodedSrc = encodeURI(normalizedSrc);

    if (!BASE_PATH) {
        return encodedSrc;
    }

    if (encodedSrc === BASE_PATH || encodedSrc.startsWith(`${BASE_PATH}/`)) {
        return encodedSrc;
    }

    return `${BASE_PATH}${encodedSrc}`;
}