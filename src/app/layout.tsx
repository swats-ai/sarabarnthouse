import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "SARA BARNTHOUSE",
  description: "Sara Barnthouse — talent representative based in Los Angeles and owner of DeVine Reps.",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
