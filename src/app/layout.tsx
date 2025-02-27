import type { Metadata } from "next";
import { Space_Grotesk, Satisfy, Open_Sans } from "next/font/google";
import "./globals.css";

const geistSpaceGrotsk = Space_Grotesk({
  variable: "--font-space-grotsk",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const geistSatisfy = Satisfy({
  variable: "--font-satisfy",
  subsets: ["latin"],
  weight: ["400"],
  display: "swap",
});

const openSans = Open_Sans({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSpaceGrotsk.variable} ${openSans.className} ${geistSatisfy.variable} antialiased min-h-screen`}
      >
        <div className="mx-auto w-3/5 md:w-full">{children}</div>
      </body>
    </html>
  );
}
