import "./globals.css";
import { Inter } from "next/font/google";
import type React from "react";
import type { Metadata } from "next";
import MouseMoveEffect from "@/components/mouse-move-effect";
import AnimatedGridBackground from "@/components/animated-grid-background";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "structa.studio - Innovative Software Solutions",
  description: "structa.studio delivers cutting-edge software solutions for businesses of the future.",
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="relative dark">
      <body className={`${inter.className} bg-background text-foreground antialiased overflow-x-hidden`}>
        {/* Fondo animado */}
        <AnimatedGridBackground />

        {/* Efecto de movimiento con el mouse */}
        <MouseMoveEffect />

        {/* Contenido principal con z-10 para estar por encima del fondo */}
        <div className="relative z-10">{children}</div>
      </body>
    </html>
  );
}
