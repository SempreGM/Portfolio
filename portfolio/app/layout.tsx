import type { Metadata } from "next";
import "./globals.css";

const productionHost = process.env.VERCEL_PROJECT_PRODUCTION_URL;
const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? (productionHost ? `https://${productionHost}` : "http://localhost:3000");

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Bernardo Maia | Desenvolvedor Front-End", template: "%s | Bernardo Maia" },
  description: "Portfólio de Bernardo Maia, Desenvolvedor Front-End Júnior em Contagem, Minas Gerais.",
  keywords: ["Bernardo Maia", "desenvolvedor front-end", "React", "Next.js", "TypeScript", "Contagem", "Minas Gerais"],
  authors: [{ name: "Bernardo Maia" }],
  creator: "Bernardo Maia",
  applicationName: "Portfólio Bernardo Maia",
  alternates: { canonical: "/" },
  openGraph: {
    type: "website", locale: "pt_BR", title: "Bernardo Maia | Desenvolvedor Front-End Júnior",
    description: "Interfaces acessíveis, responsivas e bem construídas com React, Next.js e TypeScript.",
    siteName: "Portfólio Bernardo Maia",
    images: [{ url: "/og-bernardo-maia.png", width: 1732, height: 909, alt: "Bernardo Maia — Desenvolvedor Front-End Júnior" }],
  },
  twitter: { card: "summary_large_image", title: "Bernardo Maia | Desenvolvedor Front-End Júnior", description: "Interfaces acessíveis, responsivas e bem construídas.", images: ["/og-bernardo-maia.png"] },
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
