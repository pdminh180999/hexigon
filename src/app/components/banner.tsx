'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option: any) => {
    setIsOpen(false);
  };

  const navigation = [
    {
      title: "Service",
      link: '/'
    },
    {
      title: "Vision",
      link: '/'
    },
    {
      title: "Contact us",
      link: '/'
    },
    {
      title: "Our team",
      link: '/'
    },
    {
      title: "Projects",
      link: '/'
    },
    {
      title: "FAQ",
      link: '/'
    },
  ];

  return (
    <div className="flex flex-col justify-center shadow-sm">
      <div className="flex overflow-hidden relative flex-col pb-20 w-full border border-black border-solid shadow-sm min-h-[900px] max-md:max-w-full">
        <Image
          alt=""
          loading="lazy"
          src="/img/tech_drop.gif"
          className="object-cover absolute inset-0 size-full"
          width="1900"
          height="900"
        />
        <div className="flex relative flex-col justify-center items-center px-64 py-4 w-full text-white max-2xl:px-5 max-2xl:max-w-full">
          <div className="flex gap-5 justify-between items-center mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between items-center my-auto text-base leading-6 max-md:flex-wrap max-md:max-w-full">
              <Link href="/" className="shrink-0 max-w-full">
                <Image src="/img/logo.png" alt="logo" width="150" height="40" />
              </Link>
              <ul className="flex xl:gap-5 justify-between my-auto max-md:flex-wrap max-lg:hidden">
                {navigation.map((item, index) => (
                  <li className="mr-3 nav__item" key={index}>
                    <Link
                      href={item.link}
                      passHref
                      className="inline-block px-4 py-2 text-xl font-normal text-white no-underline rounded-md hover:underline focus:underline"
                    >
                      {item.title}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="relative inline-block text-left lg:hidden">
                <div>
                  <svg
                    onClick={toggleDropdown}
                    className="cursor-pointer h-6 w-6 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7"></path>
                  </svg>
                </div>

                {isOpen && (
                  <div className="origin-top-right absolute right-0 mt-2 w-56 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-[100]">
                    <div className="py-1" role="menu" aria-orientation="vertical" aria-labelledby="options-menu">
                      {navigation.map((item, index) => (
                        <Link
                          key={index}
                          href={item.link}
                          passHref
                          className="block px-4 py-2 text-xl font-normal text-black no-underline rounded-md hover:underline focus:underline"
                        >
                          {item.title}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
            <Link href="/" className="justify-center px-6 py-3 text-lg font-bold leading-6 bg-sky-500 rounded-lg backdrop-blur-[10px] max-md:px-5 text-nowrap">
              Contact us
            </Link>
          </div>
        </div>
        <div className="relative self-center mb-16 w-full max-w-[1380px] max-md:mb-10 max-md:max-w-full">
          <div className="flex gap-5 max-md:flex-col max-md:gap-0">
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex relative z-10 flex-col self-stretch px-5 my-auto font-bold text-white max-md:mt-10 max-md:max-w-full">
                <div className="text-6xl leading-[72px] max-md:max-w-full max-md:text-4xl max-md:leading-[50px]">
                  Drive Business Growth On Demand Experiences
                </div>
                <div className="mt-6 text-xl leading-7 max-md:max-w-full">
                  Elevate Business Growth with Tailored On-Demand Experiences
                  <br />
                  Empower Your Brand to Thrive in Today&apos;s Dynamic Market
                </div>
                <Link href="/" className="justify-center self-start px-6 py-3 mt-16 text-lg leading-6 bg-sky-500 rounded-lg backdrop-blur-[10px] max-md:px-5 max-md:mt-10">
                  Contact us
                </Link>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <Image src="/img/logo_banner.svg" alt="banner" width="640" height="640" className="w-full aspect-square max-md:max-w-full" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
