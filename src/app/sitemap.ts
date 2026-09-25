import type { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre", "/contato", "/termos"].map((path) => ({ url: `https://priz.com.br${path}` }));
}
