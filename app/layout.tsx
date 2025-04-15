import type React from "react";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Protap & Partners | Venture Studio",
  description:
    "A venture studio and social entrepreneurship platform improving the human condition through art, design, and technology.",
  generator: "v0.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={inter.className}
        style={{
          backgroundImage: "url('/protap-bg.png')",
          backgroundRepeat: "repeat",
          backgroundSize: "100% auto",
          width: "100vw",
          height: "100vh",
        }}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
