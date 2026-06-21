import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "I-Care Services",
    short_name: "I-Care",
    description: "Community-based health, welfare and support services.",
    start_url: "/",
    display: "standalone",
    background_color: "#FAFAFA",
    theme_color: "#2A7F6F",
    icons: [
      {
        src: "/icon.png",
        sizes: "any",
        type: "image/png",
      },
    ],
  };
}
