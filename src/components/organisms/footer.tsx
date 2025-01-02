"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "@/components/molecules/footer-sitemap";
import { typeWriteList } from "@/constants";
const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());

export default function Footer() {
  return (
    <div className="flex flex-col justify-between items-center min-h-screen">
      <div className="flex items-center justify-center w-full flex-1">
        <div className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-extralight text-stone-100 dark:text-stone-100 leading-tight">
          <Typewriter
            options={{
              strings: randomTypeWriteList,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="w-full">
        <FooterWithSitemap />
      </div>
    </div>
  );
}
