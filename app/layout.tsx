import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Analytics } from "@vercel/analytics/next"

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ShopEasy Solutions - Sites, Bots e Automações Personalizadas",
  icons: [
    {
      rel: "icon",
      url: "/shopeasy.svg",
    }
  ],
  description: "Desenvolvemos sites profissionais, bots para Discord e automações personalizadas para seu negócio. Soluções modernas, sem planos genéricos.",
  keywords: ["desenvolvimento web", "bot discord", "automação", "site profissional", "web development"],
  authors: [{ name: "ShopEasy" }],
  openGraph: {
    title: "ShopEasy - Sites, Bots e Automações Personalizadas",
    description: "Desenvolvemos soluções personalizadas: sites profissionais, bots para Discord e automações para seu negócio.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "ShopEasy - Sites, Bots e Automações",
    description: "Soluções personalizadas para seu negócio",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <Analytics />
    <html
      lang="pt-BR"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
