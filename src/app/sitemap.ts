import type { MetadataRoute } from "next";
import { site } from "./contact";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["", "/sobre", "/contato", "/termos"].map((path) => ({ url: `${site}${path}` }));
}
