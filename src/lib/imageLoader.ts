import type { ImageLoaderProps } from "next/image";
import { withBasePath } from "./assetPath";

export default function imageLoader({ src }: ImageLoaderProps): string {
  return withBasePath(src);
}
