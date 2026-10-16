import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

const bodyFont = localFont({
  src: "../../public/fonts/bitter-regular.woff2",
  variable: "--font-body",
  weight: "400",
  style: "normal",
  display: "swap",
});

const displayFont = localFont({
  src: "../../public/fonts/averia-serif-libre-italic.woff2",
  variable: "--font-display",
  weight: "400",
  style: "italic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "SARA BARNTHOUSE",
  description: "Sara Barnthouse — talent representative based in Los Angeles and owner of DeVine Reps.",
  icons: { icon: "/favicon.webp" },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bodyFont.variable} ${displayFont.variable}`}>
      <body>{children}</body>
    </html>
  );
}
