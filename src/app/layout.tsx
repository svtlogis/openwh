import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "OpenWH — Warehouse Operations",
  description: "A clear overview of warehouse packages, storage deadlines, and activity.",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}