import type { Metadata } from "next";
import { Geist_Mono, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Client from "../Wrapper/client";
import { ViewTransitions } from "next-view-transitions";
import NextTopLoader from "nextjs-toploader";
const geistSans = Plus_Jakarta_Sans({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Ideal e Designs – Empowering Digital Innovation",
  description:
    "We build high-performance mobile and web apps tailored for growth. Innovative, user-friendly, and scalable solutions for your business.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en">
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <NextTopLoader color="#BFF745" />
          <div
            className="relative bg-[url('/bg.png')]  w-full lg:bg-contain bg-cover bg-repeat-y   "
            style={{
              backgroundSize: "100% auto",
              backgroundPosition: "100% 900px",
            }}
          >
            <Client>{children}</Client>
          </div>
        </body>
      </html>
    </ViewTransitions>
  );
}
