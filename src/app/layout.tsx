import type { Metadata } from "next";
import { Inter_Tight } from "next/font/google";
import "./globals.css";
import {cn} from "../utils/cn";

const inter = Inter_Tight({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Singto Muay Thai",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/favicon.ico" sizes="any" />
      <body className={cn("justify center items-center max-w-screen-2xl 2xl:mx-auto",inter.className)}>{children}</body>
    </html>
  );
}
