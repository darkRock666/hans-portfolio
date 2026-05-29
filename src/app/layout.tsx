import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Hans Strauss Copana | Portfolio - Multimedia Professional",
  description:
    "Portfolio de Hans Kleider Alejandro Strauss Copana — Productor y Director de TV, Editor 2D/3D, Especialista en IA, Desarrollador de Software y Analista de Sistemas con más de 8 años de experiencia.",
  keywords: [
    "Hans Strauss Copana",
    "portfolio",
    "TV producer",
    "director",
    "2D/3D editor",
    "IA",
    "AI",
    "desarrollo de software",
    "broadcasting",
    "Bolivia",
  ],
  authors: [{ name: "Hans Strauss Copana" }],
  openGraph: {
    title: "Hans Strauss Copana | Multimedia Professional Portfolio",
    description:
      "Productor y Director de TV | Editor 2D/3D | Especialista en IA | Desarrollador de Software",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
