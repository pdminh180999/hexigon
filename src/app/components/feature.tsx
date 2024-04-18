import Link from "next/link";
import Image from "next/image";

const Feature = () => {
  const features = [
    {
      title: 'Infrastructure support',
      icon: '/img/support.svg',
      description: 'Building the Backbone of Your Operations: Comprehensive Infrastructure Support Tailored to Your Unique Needs, Ensuring Reliability, Scalability, and Security Every Step of the Way',
      link: '/'
    },
    {
      title: 'IT Staff Augmentation',
      icon: '/img/augmentation.svg',
      description: 'Extend Your Team, Expand Your Possibilities: Access Skilled Professionals On- Demand to Enhance Your Capabilities, Drive Innovation, and Meet Project Deadlines with Confidence.',
      link: '/'
    },
    {
      title: 'Consulting',
      icon: '/img/consulting.svg',
      description: 'Navigating Your Digital Journey Together: Strategic Consulting Services to Align Technology Solutions with Your Business Objectives, Maximizing Efficiency, and Unleashing Growth Potential.',
      link: '/'
    },
    {
      title: 'Quality Assurance and Testing',
      icon: '/img/qa_testing.svg',
      description: 'Delivering Flawless Experiences, Every Time: Rigorous Quality Assurance and Testing Protocols to Ensure Your Software Performs Seamlessly, Building Trust and Loyalty Among Your Users.',
      link: '/'
    },
    {
      title: 'Mobile Development',
      icon: '/img/mobile.svg',
      description: 'Captivate Audiences on Every Screen: Expert Mobile Development Services Crafting Engaging, Intuitive Apps Across iOS and Android Platforms, Elevating Your Brand in the Mobile Sphere.',
      link: '/'
    },
  ];
  return (
    <div className="flex flex-col items-center self-stretch p-20 bg-neutral-100 max-md:px-5">
      <div className="text-xl font-medium leading-7 text-center text-pink-500 max-md:max-w-full">
        Feature
      </div>
      <div className="mt-3 text-4xl font-medium leading-10 text-center text-gray-900 max-md:max-w-full">
        Software Development
      </div>
      <div className="mt-5 text-xl leading-7 text-center text-zinc-600 w-[768px] max-md:max-w-full">
        Building Tomorrow: Crafting Innovative Solutions Through Expert Software
        Development for a Seamless Digital Future
      </div>
      <div className="flex flex-col self-stretch px-8 mt-20 max-md:px-5 max-md:mt-10 max-md:max-w-full">
        <div className="justify-between max-md:max-w-full">
          <div className="flex flex-wrap justify-center items-center gap-5 max-md:flex-col max-md:gap-0">
            {features.map((item, index) => (
              <Link href={item.link} className="flex flex-col w-[26%] max-md:ml-0 max-md:w-full" key={index}>
                <div className="flex flex-col grow justify-between px-6 py-10 w-full text-center bg-white hover:bg-gray-100 rounded-2xl shadow-md max-md:px-5 max-md:mt-10">
                  <Image
                    loading="lazy"
                    alt={item.icon}
                    src={item.icon}
                    className="self-center aspect-square"
                    width="80"
                    height="80"
                  />
                  <div className="mt-5 text-xl font-medium leading-7 text-gray-900">
                    {item.title}
                  </div>
                  <div className="mt-2 text-base font-normal leading-6 text-gray-900">
                    {item.description}
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feature;
