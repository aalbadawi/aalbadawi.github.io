"use client";

import "./globals.css";
import "../config/i18next";

import dynamic from "next/dynamic";
import LocalFont from "next/font/local";
import { Suspense, useEffect } from "react";
import { useTranslation } from "react-i18next";

import Nav from "../components/organisms/nav";

const calSans = LocalFont({
  src: "../../public/fonts/CalSans-SemiBold.ttf",
  variable: "--font-calsans",
  display: "swap",
});

const DynamicHeader = dynamic(() => import("../components/organisms/header"));

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const { i18n, t } = useTranslation();

  useEffect(() => {
    if (typeof window !== "undefined") {
      const isArabic = i18n.language?.startsWith("ar");
      const dir = isArabic ? "rtl" : "ltr";
      const lang = i18n.language || "en";
      
      document.documentElement.dir = dir;
      document.documentElement.lang = lang;
      document.body.dir = dir;

      const title = t("page.home.head.title");
      if (title && title !== "page.home.head.title") {
        document.title = title;
      }
    }
  }, [i18n.language, t]);

  return (
    <html
      lang={i18n.language || "en"}
      dir={i18n.language?.startsWith("ar") ? "rtl" : "ltr"}
      className={calSans.variable}
    >
      <head>
        <DynamicHeader />
      </head>

      <body className="min-h-screen transition-colors duration-300 antialiased selection:bg-orange-500/20 selection:text-orange-500 font-sans">
        <h1 className="sr-only">Amer Albadawi — Senior Software Engineer</h1>
        <Suspense fallback={null}>
          <Nav />
        </Suspense>
        <main className="flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}

