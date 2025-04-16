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
        className={`${inter.className} bg-[url('/protap-bg.png')] bg-repeat sm:bg-[length:50%_auto] bg-[length:100%_auto]`}
      >
        {children}
      </body>
    </html>
  );
}

import "./globals.css";
