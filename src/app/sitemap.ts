import type { MetadataRoute } from "next";

const base = "https://batimtec.com";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    { url: base, lastModified: new Date(), changeFrequency: "monthly", priority: 1 },
    { url: `${base}/travaux`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/renovation`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/maintenance`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.9 },
    { url: `${base}/a-propos`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.6 },
    { url: `${base}/contact`, lastModified: new Date(), changeFrequency: "monthly", priority: 0.8 },
    { url: `${base}/mentions-legales`, lastModified: new Date(), changeFrequency: "yearly", priority: 0.3 },
  ];
}
