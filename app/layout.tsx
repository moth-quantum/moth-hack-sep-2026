import type { Metadata, Viewport } from "next";
import { event } from "@/content/event";
import "./globals.css";

export const metadata: Metadata = {
  title: `${event.name} 2026 — ${event.kicker}`,
  description: `${event.subtitle}. ${event.dateline}. ${event.hook}`,
  openGraph: {
    title: `${event.name} 2026 — ${event.kicker}`,
    description: `${event.subtitle}. ${event.dateline}.`,
    type: "website",
    locale: "en_GB",
  },
};

export const viewport: Viewport = {
  themeColor: "#19238e",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en-GB" className="h-full">
      <body className="min-h-full">{children}</body>
    </html>
  );
}
