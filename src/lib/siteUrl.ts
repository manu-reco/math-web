const DEFAULT_SITE_URL = "https://manu-reco.github.io";

function trimSlashStart(value: string): string {
    return value.startsWith("/") ? value.slice(1) : value;
}

function trimSlashEnd(value: string): string {
    return value.endsWith("/") ? value.slice(0, -1) : value;
}

export function getSiteUrl(): string {
    const envUrl = process.env.NEXT_PUBLIC_SITE_URL;
    return trimSlashEnd(envUrl?.trim() || DEFAULT_SITE_URL);
}

export function getBasePath(): string {
    const envBasePath = process.env.NEXT_PUBLIC_BASE_PATH?.trim();

    if (!envBasePath || envBasePath === "/") {
    return "";
    }

    const normalized = `/${trimSlashStart(trimSlashEnd(envBasePath))}`;
    return normalized === "/" ? "" : normalized;
}

export function getCanonicalUrl(pathname: string): string {
    const basePath = getBasePath();
    const cleanPath = pathname.startsWith("/") ? pathname : `/${pathname}`;
    return `${getSiteUrl()}${basePath}${cleanPath}`;
}