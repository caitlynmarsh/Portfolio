/**
 * Mirrors `basePath` from next.config (injected at build). Use for public/ assets in img src, etc.
 * Empty string: custom domain or user site at /. "/repo": project pages at github.io/repo/.
 */
export const siteBasePath = process.env.NEXT_PUBLIC_SITE_BASE_PATH ?? ""

export function withBaseAsset(path: string): string {
  if (!path.startsWith("/")) {
    return `${siteBasePath}/${path}`
  }
  return `${siteBasePath}${path}`
}
