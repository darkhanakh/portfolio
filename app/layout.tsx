import React from "react";
import type { Metadata } from "next";
import { Space_Grotesk } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const spaceGrotesk = Space_Grotesk({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://darkhanakh.vercel.app/"),

  title: "darkhanakh",
  authors: {
    name: "darkhanakh",
  },

  description:
    "Based in Kazakhstan, I'm a software engineer who loves building things for the web. I'm passionate about open-source, building communities, and creating products that have a positive impact on people's lives.",
  openGraph: {
    title: "darkhanakh",
    description:
      "Based in Kazakhstan, I'm a software engineer who loves building things for the web. I'm passionate about open-source, building communities, and creating products that have a positive impact on people's lives.",
    url: "https://darkhanakh.vercel.app/",
    siteName: "darkhanakh",
    images: "/projects/project-1.png",
    type: "website",
  },
  keywords: [
    "darkhanakh",
    "portfolio",
    "darkhanakh portfolio",
    "darkhanakh blog",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={spaceGrotesk.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
