import Link from "next/link";
import Image from "next/image";

const Banner = () => {
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
          src="/img/tech_drop.png"
          className="object-cover absolute inset-0 size-full"
          width="1900"
          height="900"
          unoptimized
        />
        <div className="flex relative flex-col justify-center px-64 py-4 w-full text-white max-md:px-5 max-md:max-w-full">
          <div className="flex gap-5 justify-between mx-5 max-md:flex-wrap max-md:px-5 max-md:mr-2.5 max-md:max-w-full">
            <div className="flex gap-5 justify-between my-auto text-base leading-6 max-md:flex-wrap max-md:max-w-full">
              <Link href="/">
                <Image src="/img/logo.png" alt="logo" width="150" height="40" />
              </Link>
              <ul className="flex gap-5 justify-between my-auto max-md:flex-wrap">
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
            </div>
            <Link href="/" className="justify-center px-6 py-3 text-lg font-bold leading-6 bg-sky-500 rounded-lg backdrop-blur-[10px] max-md:px-5">
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
