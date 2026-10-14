import type { MetadataRoute } from "next";
import { site } from "./contact";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre", "/contato", "/termos", "/privacidade"].map((path) => ({ url: `${site}${path}` }));
}
