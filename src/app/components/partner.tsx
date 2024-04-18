import Image from "next/image";

const Partner = () => {
  const parters = [
    {
      name: 'airbnb',
      image: '/img/airbnb-logo.png',
    },
    {
      name: 'forbes',
      image: '/img/forbes-logo.png',
    },
    {
      name: 'intrax',
      image: '/img/intrax-logo.png',
    },
    {
      name: 'microsoft',
      image: '/img/microsoft-logo.png',
    },
    {
      name: 'nashville-predators',
      image: '/img/nashville-predators-logo.png',
    },
  ]
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-center w-full max-w-[1080px] max-md:max-w-full">
        <div className="text-xl font-medium leading-7 text-center text-pink-500 max-md:max-w-full">
          Partners
        </div>
        <div className="mt-3 text-4xl font-medium leading-10 text-center text-gray-900 max-md:max-w-full">
          Trusted by Industry Leaders Worldwide
        </div>
        <div className="mt-5 text-xl leading-7 text-center text-zinc-600 max-md:max-w-full">
          Partnering with Top-tier Organizations to Drive Success and Innovation
          Globally
        </div>
        <div className="flex gap-5 justify-between self-stretch mt-20 max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
          {parters.map((item, index) => (
            <Image
              title={item.name}
              key={index}
              alt={item.name}
              src={item.image}
              className="shrink-0 max-w-full aspect-square w-[120px]"
              width="120"
              height="120"
            >
            </Image>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partner;
