import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/ui/Chatbot";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "RealtyGenie - The AI Operating System for Modern Realtors",
  description: "Automate your operations. Reclaim your time. Focus on closing.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${outfit.variable} font-sans antialiased overflow-x-hidden`}
      >
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
        </div>
        {children}
        <Chatbot />
      </body>
    </html>
  );
}
