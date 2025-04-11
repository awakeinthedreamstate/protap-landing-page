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
      <body className="font-rude">
        {/* <img
          src="./back_blob-removebg-preview.png"
          className="absolute right-0 top-20 z-0 dev-border"
        /> */}

        {children}
      </body>
    </html>
  );
}

import "./globals.css";
