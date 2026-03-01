import type { ImageLoaderProps } from "next/image";

const BASE_PATH = "/math-web";

export default function imageLoader({ src }: ImageLoaderProps): string {
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

  if (src.startsWith(BASE_PATH)) {
    return src;
  }

  return `${BASE_PATH}${src.startsWith("/") ? "" : "/"}${src}`;
}
