import Image from "next/image";
import Link from "next/link";
import { title } from "process";

const Footer = () => {
  const contents = [
    {
      title: 'Product',
      link: '/',
      child: [
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
      ]
    },
    {
      title: 'Company',
      link: '/',
      child: [
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
      ]
    },
    {
      title: 'Resources',
      link: '/',
      child: [
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
      ]
    },
    {
      title: 'Social',
      link: '/',
      child: [
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
      ]
    },
    {
      title: 'Legal',
      link: '/',
      child: [
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
        {
          title: 'Title',
          link: '/'
        },
      ]
    },
  ]
  return (
    <div className="flex flex-col pt-16 bg-white">
      <div className="self-center pb-10 w-full max-w-[1216px] max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[28%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 text-base font-black leading-6 text-zinc-600 max-md:mt-10">
              <Image
                alt="logo"
                loading="lazy"
                src="/img/logo_black.png"
                className="max-w-full aspect-[3.23]"
                width="130"
                height="40"
              />
              <div className="mt-8">
                Hexigon IT Solutions: Driving Innovation, Empowering Growth, and
                Shaping Futures
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[72%] max-md:ml-0 max-md:w-full">
            <div className="flex grow gap-5 px-5 text-base leading-6 text-gray-900 whitespace-nowrap max-md:flex-wrap max-md:mt-10">
              {contents.map((item, index) => (
                <div className="flex flex-col flex-1" key={index}>
                  <Link href={item.link} className="text-lg font-medium leading-7 hover:underline">
                    {item.title}
                  </Link>
                  {item.child.map((itemChild, indexChild) => (
                    <Link href={itemChild.link} className="mt-3 hover:underline" key={indexChild}>
                      {itemChild.title}
                    </Link>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center items-center px-16 py-6 mt-12 w-full bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-wrap">
          <div className="flex-1 my-auto text-base leading-6 text-gray-400 max-md:max-w-full">
            © 2024 .All rights reserved.
          </div>
          <div className="flex gap-5 justify-between py-2">
            <Link href="/">
              <Image
                alt="X"
                loading="lazy"
                src="/img/twitter.png"
                className="shrink-0 w-6 aspect-square"
                width="24"
                height="24"
              />
            </Link>
            <Link href="/">
              <Image
                alt="Linkedin"
                loading="lazy"
                src="/img/linkedin.png"
                className="shrink-0 w-6 aspect-square"
                width="24"
                height="24"
              />
            </Link>
            <Link href="/">
              <Image
                alt="Facebook"
                loading="lazy"
                src="/img/facebook.png"
                className="shrink-0 w-6 aspect-square"
                width="24"
                height="24"
              />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
