import Image from "next/image";
import React from "react";
import { useTranslation } from "react-i18next";

export default function Portfolio() {
  const { t } = useTranslation();

  return (
    <div className="flex h-full w-screen flex-col bg-zinc-200 pt-24">
      <div className="my-6 flex  w-full justify-center">
        <h1 className="z-10 animate-title bg-white bg-clip-text py-4 font-display text-2xl text-zinc-700 duration-1000  sm:text-2xl md:text-4xl">
          {t("page.Portfolio.title")}
        </h1>
      </div>
      <div className="grid grid-cols-2 gap-3 md:grid-cols-4">
        <div className="grid-gap-4 p-4 flex items-center justify-center">
          <a
            href="https://www.tcs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/tata-logo.png"
              alt="Tata Consultancy Services"
            />
          </a>
        </div>
        <div className="grid-gap-4 p-4 flex items-center justify-center">
          <a
            href="https://www.wipro.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={500}
              height={800}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/wipro-logo.png"
              alt="Wipro Arabia Ltd"
            />
          </a>
        </div>
        <div className="grid-gap-4">
          <a
            href="https://www.sa.zain.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/zain-ksa-logo.jpeg"
              alt="Zain KSA"
            />
          </a>
        </div>
        <div className="grid-gap-4 bg-black p-4 flex items-center justify-center">
          <a
            href="https://www.jo.zain.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/zain-logo.png"
              alt="Zain Jordan"
            />
          </a>
        </div>

        {/* <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/benesse.jpg"
              alt="benesse"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full   rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/wired-jp.jpg"
              alt="wired japan"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ww.jpg"
              alt="ww"
            />
          </div>

          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/stricktly-data.png"
              alt="stricktly-data"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/expedia.png"
              alt="expedia"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full   rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/open-garden.png"
              alt="open-garden"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/nrby.png"
              alt="nrby"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ripe.png"
              alt="ripe"
            />
          </div>
        </div>
        <div className="grid gap-4">
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/vtex.png"
              alt="vtex"
            />
          </div>

          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/brick.jpeg"
              alt="brick"
            />
          </div>
          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/wired-jp-share.jpg"
              alt="wired-jp"
            />
          </div>

          <div>
            <Image
              width={500}
              height={500}
              className="h-auto max-w-full rounded-lg bg-white transition delay-150 duration-300 ease-in-out hover:-translate-y-1 hover:scale-110"
              src="/images/companies/ATG-Logo.png"
              alt="ATG"
            />
          </div>
        </div> */}
      </div>
    </div>
  );
}
