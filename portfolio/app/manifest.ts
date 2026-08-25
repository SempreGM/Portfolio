import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Portfólio Bernardo Maia", short_name: "Bernardo.dev",
    description: "Portfólio de Bernardo Maia, Desenvolvedor Front-End Júnior.",
    start_url: "/", display: "standalone", background_color: "#0d1117", theme_color: "#12613e", lang: "pt-BR",
    icons: [{ src: "/favicon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}
