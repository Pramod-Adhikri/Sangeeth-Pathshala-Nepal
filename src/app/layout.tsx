import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Sangeet Pathshala — Music school in Handigaun, Kathmandu",
  description:
    "Learn guitar, bass, keyboard, drums, ukulele and vocals in Handigaun, Kathmandu. In-person and online classes for complete beginners to advanced players.",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link
          href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,500;12..96,700;12..96,800&family=Figtree:wght@400;500;600;700&family=Mukta:wght@600&family=Playfair+Display:ital,wght@0,500;0,600;0,700;1,500;1,600&display=swap"
          rel="stylesheet"
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
