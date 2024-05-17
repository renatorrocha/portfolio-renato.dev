import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import UnderConstruction from "@/components/under-construction";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Renato.dev",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} h-screen justify-center w-full flex items-center bg-light-ice-blue text-charcoal-blue`}
      >
        <UnderConstruction />
      </body>
    </html>
  );
}
