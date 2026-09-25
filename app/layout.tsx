import type { Metadata, Viewport } from "next";
import { event } from "@/content/event";
import "./globals.css";

const base = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

// Licensed Riforma woff2 files go in public/fonts/ with the names below (not committed).
// Declared here, not in CSS, so the URLs include the GitHub Pages base path.
const fontFaces = [
  ["Riforma LL", "RiformaLL-Regular", 400],
  ["Riforma LL", "RiformaLL-Medium", 500],
  ["Riforma LL", "RiformaLL-Bold", 700],
  ["Riforma Mono", "RiformaMono-Regular", 400],
]
  .map(
    ([family, file, weight]) =>
      `@font-face{font-family:"${family}";src:url("${base}/fonts/${file}.woff2") format("woff2");font-weight:${weight};font-style:normal;font-display:swap}`,
  )
  .join("");

export const metadata: Metadata = {
  metadataBase: new URL("https://moth-quantum.github.io"),
  title: `${event.name} 2026 | ${event.kicker}`,
  description: `${event.subtitle}. ${event.dateline}. ${event.hook}`,
  openGraph: {
    title: `${event.name} 2026 | ${event.kicker}`,
    description: `${event.subtitle}. ${event.dateline}.`,
    type: "website",
    locale: "en_GB",
    siteName: "Moth",
    url: `${base}/`,
  },
  twitter: { card: "summary_large_image" },
};

export const viewport: Viewport = {
  themeColor: "#19238e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className="h-full">
      <head>
        <style dangerouslySetInnerHTML={{ __html: fontFaces }} />
      </head>
      <body className="min-h-full">{children}</body>
    </html>
  );
}
