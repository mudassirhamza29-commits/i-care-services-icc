import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "I-Care Services",
    short_name: "I-Care",
    description: "Community-based health, welfare and support information.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#2E3250",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
