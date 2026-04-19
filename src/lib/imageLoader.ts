import type { ImageLoaderProps } from "next/image";
import { withBasePath } from "./assetPath";

export default function imageLoader({ src, width, quality }: ImageLoaderProps): string {
  const resolvedSrc = withBasePath(src);
  const query = `w=${width}&q=${quality ?? 75}`;

  return resolvedSrc.includes("?") ? `${resolvedSrc}&${query}` : `${resolvedSrc}?${query}`;
}
