"use client";

import React from "react";
import Typewriter from "typewriter-effect";

import { FooterWithSitemap } from "@/components/molecules/footer-sitemap";
import { typeWriteList } from "@/constants";
const randomTypeWriteList = typeWriteList.sort(() => 0.5 - Math.random());

export default function Footer() {
  return (
    <div className="flex flex-col justify-center items-center h-screen">
      <div className="flex items-center justify-center w-full h-full">
        <div className="text-2xl sm:text-5xl md:text-4xl lg:text-8xl font-extralight text-zinc-50">
          <Typewriter
            options={{
              strings: randomTypeWriteList,
              autoStart: true,
              loop: true,
            }}
          />
        </div>
      </div>
      <div className="w-full h-full flex items-end">
        <FooterWithSitemap />
      </div>
    </div>
  );
}
