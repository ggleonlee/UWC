import type { Metadata } from "next";
import { Inter, Libre_Baskerville } from "next/font/google";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  weight: ["300", "400", "500"],
  variable: "--font-inter",
});

const libreBaskerville = Libre_Baskerville({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-libre",
});

export const metadata: Metadata = {
  title: "Guzmán González — Change & Transformation Lead",
  description:
    "A pre-meeting artifact. Ten years embedding inside organisations to diagnose what blocks change — and building the conditions for it to last.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${libreBaskerville.variable}`}>
      <body className="antialiased">{children}</body>
    </html>
  );
}
