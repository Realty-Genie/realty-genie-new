import type { Metadata } from "next";
import { Outfit } from "next/font/google";
import "./globals.css";
import Chatbot from "@/components/ui/Chatbot";
import { Whatsapp } from "@/components/landing/Whatsapp";
import Script from "next/script";
import RouteTracker from "@/components/RouteTracker";
const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
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
        <RouteTracker />
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
          <div className="absolute top-1/2 left-0 -translate-y-1/2 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full" />
          <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-blue-500/5 blur-[100px] rounded-full" />
        </div>
        {children}
        <Whatsapp />
        <Chatbot />
        <Script
          id="tracker-click-filter"
          strategy="beforeInteractive"
          dangerouslySetInnerHTML={{
            __html: `
              document.addEventListener("click", function(e) {
                var el = e.target;
                var tag = (el.tagName || "").toUpperCase();
                // Block form inputs from being captured by tracker auto-click
                if (tag === "INPUT" || tag === "SELECT" || tag === "TEXTAREA" || tag === "OPTION") {
                  e.stopPropagation();
                  return;
                }
                // Block non-submit clicks inside forms
                if (el.closest && el.closest("form")) {
                  var isSubmitBtn = false;
                  var check = el;
                  for (var i = 0; i < 5 && check && check !== document.body; i++) {
                    var t = (check.tagName || "").toUpperCase();
                    if ((t === "BUTTON" && check.type === "submit") || (t === "INPUT" && check.type === "submit")) {
                      isSubmitBtn = true;
                      break;
                    }
                    check = check.parentElement;
                  }
                  if (!isSubmitBtn) {
                    e.stopPropagation();
                  }
                }
              }, true);
            `,
          }}
        />
        <Script
          src="https://tracker-worker.green-feather-9c2c.workers.dev/tracker.js"
          data-key="2ae44d4e-f06a-45a5-be38-9cb01bdb0da1"
          strategy="afterInteractive"
        />
      </body>
    </html>
  );
}
