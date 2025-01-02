"use client";

import { faEye } from "@fortawesome/free-solid-svg-icons"; // Correct import
import Image from 'next/image';


import {
  faFacebookF,
  faGithub,
  faInstagram,
  faLinkedinIn,
  faWhatsapp,
  faXTwitter,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Link from "next/link";
import React from "react";
import { useTranslation } from "react-i18next";

export function FooterWithSitemap() {
  const { t } = useTranslation();

  return (
    <footer className="flex h-full w-full overflow-scroll bg-white lg:items-center dark:bg-zinc-800">
      <div className="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div className="items-center md:flex md:justify-between">
          <div className="mb-6 flex flex-col md:mb-0">
            <Link href="/?nav=0">
              <span className="self-center whitespace-nowrap text-2xl font-semibold text-orange-600 duration-1000 hover:text-orange-600 dark:hover:text-white">
                {t('footer.element.title')}
              </span>
            </Link>

            <a href="tel:+966554400968">
              <div className="mt-4 mb-1 flex items-center font-light duration-700 text-sky-400 hover:text-blue-500 dark:text-sky-400 dark:hover:text-white">
                <i className="fas fa-phone-alt mr-2"></i>
                <span>Tel: +966 554400968</span>
              </div>
            </a>

            <a href="mailto:badawii.ab@gmail.com?subject=Mail from My Site">
              <div className="mb-2 flex items-center font-light duration-700 text-amber-950 hover:text-red-900 dark:text-red-400 dark:hover:text-white">
                <i className="fas fa-envelope mr-2"></i>
                <span>Email: badawii.ab@gmail.com</span>
              </div>
            </a>

            <Link
              rel="noopener noreferrer"
              target="_blank"
              href="https://maps.app.goo.gl/kC9K6bN8YhawZdEU9"
            >
              <div className="my-5 mb-1 flex flex-col font-light text-gray-500 duration-700 hover:text-green-500 dark:text-stone-100 dark:hover:text-white">
                <span className="mb-1">{t('footer.element.address')}</span>
                <span className="md:flex">{t('footer.element.address-2')}</span>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-2 gap-8 sm:grid-cols-3 sm:gap-6">
            <div>
              <h2 className="m-[-1px] mb-5 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.element.col-1-title')}
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <Link
                    href="/?nav=1"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-1-1')}
                  </Link>
                </li>
                <li className="mb-4">
                  <Link
                    href="/?nav=2"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-1-2')}
                  </Link>
                </li>
                <li>
                  <Link
                    href="/?nav=4"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-1-5')}
                  </Link>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="m-[-1px] mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.element.col-2-title')}
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://github.com/aalbadawi"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-2-1')}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://linkedin.com/in/albadawiamer/"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-2-2')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://facebook.com/albadawiamer"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-2-3')}
                  </a>
                </li>
              </ul>
            </div>

            <div>
              <h2 className="m-[-1px] mb-6 text-sm font-semibold uppercase text-gray-900 dark:text-white">
                {t('footer.element.col-3-title')}
              </h2>
              <ul className="font-light text-gray-500 dark:text-gray-400">
                <li className="mb-4">
                  <a
                    href="https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-3-1')}
                  </a>
                </li>
                <li className="mb-4">
                  <a
                    href="https://react.dev/learn"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-3-2')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://nextjs.org/blog/next-14"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.col-3-3')}
                  </a>
                </li>
                <li>
                  <a
                    href="https://angular.dev"
                    target="_blank"
                    className="text-zinc-400 duration-700 hover:text-black dark:hover:text-white"
                  >
                    {t('footer.element.angularLink')}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8 dark:border-gray-700" />

        <div className="flex flex-col-reverse items-center sm:flex sm:items-center sm:justify-between md:flex md:flex-row md:items-start">
          <span className="hover:text-red-600 mb-4 text-sm text-gray-500 sm:text-center md:mb-0 dark:text-red-400 dark:hover:text-white">
            {new Date().getFullYear()} {t('footer.element.copyrights')}
          </span>

          <div className="mt-8 flex flex-row items-center sm:mt-0 sm:flex-row sm:items-start sm:justify-center">
            <a
              href="https://www.facebook.com/albadawiamer"
              target="_blank"
              className="text-blue-600 duration-700 hover:text-blue-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faFacebookF}
              />
              <span className="sr-only">Facebook page</span>
            </a>
            <a
              href="https://wa.me/966554400968"
              target="_blank"
              className="text-green-600 duration-700 hover:text-blue-900 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="ms-5 mb-10 size-12 md:mb-0 md:size-5"
                icon={faWhatsapp}
              />
              <span className="sr-only">WhatsApp</span>
            </a>
            <a
              href="https://www.linkedin.com/in/albadawiamer/"
              target="_blank"
              className="ms-5 text-blue-600 duration-700 hover:text-blue-500 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faLinkedinIn}
              />
              <span className="sr-only">LinkedIn</span>
            </a>
            <a
              href="https://x.com/albadawiamer"
              target="_blank"
              className="ms-5 text-black duration-700 hover:text-black dark:text-zinc-400 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faXTwitter}
              />
              <span className="sr-only">X Twitter</span>
            </a>
            <a
              href="https://instagram.com/albadawi.amer"
              target="_blank"
              className="ms-5 text-brown-900 duration-700 text-amber-800 hover:text-purple-600 dark:text-red-800 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faInstagram}
              />
              <span className="sr-only">Instagram</span>
            </a>
            <a
              href="https://github.com/aalbadawi"
              target="_blank"
              className="ms-5 text-red-900 duration-700 hover:text-red-800 dark:hover:text-white"
            >
              <FontAwesomeIcon
                className="mb-10 size-12 md:mb-0 md:size-5"
                icon={faGithub}
              />
              <span className="sr-only">GitHub</span>
            </a>
          </div>
        </div>

        {/* Updated Counter */}
        <div className="flex flex-col items-start mt-5">
          <FontAwesomeIcon icon={faEye} className="text-gray-500 dark:text-sky-300 mb-2" />
          <a
            href="https://www.hitwebcounter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="https://hitwebcounter.com/counter/counter.php?page=18146595&style=0010&nbdigits=5&type=page&initCount=0"
              alt="Web counter widget"
              title="Counter Widget"
              width={500} // Add a reasonable width
              height={100} // Add a reasonable height
              style={{ border: '2px solid #000' }}
            />
          </a>
        </div>
      </div>
    </footer>
  )
}
