import Link from "next/link";
import Image from "next/image";

const Teams = () => {
  const members = [
    {
      title: 'Co-Founder',
      name: 'Kong Doan',
      image: '/img/KongDoan.png',
      linkX: '/',
      linkFB: '/',
      linkIn: '/'
    },
    {
      title: 'Founder',
      name: 'Vu Nguyen',
      image: '/img/VuNguyen.png',
      linkX: '/',
      linkFB: '/',
      linkIn: '/'
    },
    {
      title: 'Co-Founder',
      name: 'Hieu Hoang',
      image: '/img/HieuHoang.png',
      linkX: '/',
      linkFB: '/',
      linkIn: '/'
    },
    {
      title: 'Co-Founder',
      name: 'LongPham',
      image: '/img/LongPham.png',
      linkX: '/',
      linkFB: '/',
      linkIn: '/'
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center p-20 bg-neutral-100 max-md:px-5">
      <div className="text-xl font-medium leading-7 text-center text-pink-500 max-md:max-w-full">
        Our Team
      </div>
      <div className="mt-3 text-4xl font-medium leading-10 text-center text-gray-900 max-md:max-w-full">
        Meet Our Dynamic Ensemble
      </div>
      <div className="mt-5 text-xl leading-7 text-center text-zinc-600 w-[768px] max-md:max-w-full">
        Unleashing Potential: Meet the Talented Minds Behind Our Success,
        <br />
        Dedicated to Turning Ideas into Reality
      </div>
      <div className="self-stretch px-48 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          {members.map((item, index) => (
            <div className="flex flex-col w-3/12 max-md:ml-0 max-md:w-full" key={index}>
              <div className="flex flex-col grow self-stretch max-md:mt-6">
                <Image
                  alt={item.image}
                  loading="lazy"
                  src={item.image}
                  className="w-full hover:scale-105 transition duration-500"
                  width="286"
                  height="404"
                />
                <div className="flex gap-2 py-2 mt-6">
                  <div className="flex flex-col flex-1 text-xl leading-7">
                    <div className="font-medium text-blue-600">{item.title}</div>
                    <div className="mt-1 text-gray-900">{item.name}</div>
                  </div>
                  <div className="flex gap-5 justify-between py-2 my-auto">
                    <Link href={item.linkX}>
                      <Image
                        alt="X"
                        loading="lazy"
                        src="/img/twitter.png"
                        className="shrink-0 w-6 aspect-square"
                        width="24"
                        height="24"
                      />
                    </Link>
                    <Link href={item.linkIn}>
                      <Image
                        alt="Linkedin"
                        loading="lazy"
                        src="/img/linkedin.png"
                        className="shrink-0 w-6 aspect-square"
                        width="24"
                        height="24"
                      />
                    </Link>
                    <Link href={item.linkX}>
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
          ))}
        </div>
      </div>
    </div>
  );
};

export default Teams;
