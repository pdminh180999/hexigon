'use client';

import Image from "next/image";
import ReactElasticCarousel from "react-elastics-carousel";

const Vision = () => {
  const breakPoints = [
    { width: 550, itemsToShow: 1, itemsToScroll: 1 },
    { width: 768, itemsToShow: 2, itemsToScroll: 1 },
    { width: 1200, itemsToShow: 3, itemsToScroll: 1 }
  ];
  const visions = [
    {
      title: "Iconic",
      description: "Striving to create a brand and products that are not just recognized but celebrated, aiming to become a symbol of excellence and innovation in the industry.",
      imageUrl: "/img/vision1.png"
    },
    {
      title: "Innovative",
      description: "Focused on pioneering new solutions, technologies, and approaches that set the company apart from competitors, ensuring a constant drive towards improvement and cutting-edge offerings.",
      imageUrl: "/img/vision2.png"
    },
    {
      title: "Idealistic",
      description: "Guided by a vision that goes beyond profit margins, the company is committed to making a positive impact on society, embracing high ethical standards and contributing to the greater good.",
      imageUrl: "/img/vision3.png"
    },
    {
      title: "Improved",
      description: "Committed to a culture of continuous improvement, the company envisions a future where its products and services are always evolving to meet and exceed customer expectations, staying ahead of the curve.",
      imageUrl: "/img/vision4.png"
    },
    {
      title: "Inspiring",
      description: "Aspires to inspire not only its employees but also its customers and the community at large, fostering a sense of purpose and motivation in all stakeholders through its actions, products, and corporate initiatives.",
      imageUrl: "/img/vision5.png"
    },
    {
      title: "Illimitable",
      description: "Embracing a vision without limits, the company envisions a future where possibilities are boundless, encouraging a culture of creativity, exploration, and innovation without being confined by conventional boundaries.",
      imageUrl: "/img/vision6.png"
    },
  ];

  return (
    <div className="flex flex-col items-center p-20 bg-white max-md:px-5">
      <div className="text-xl font-medium leading-7 text-center text-pink-500 max-md:max-w-full">
        Our Vision
      </div>
      <div className="mt-3 text-4xl font-medium leading-10 text-center text-gray-900 max-md:max-w-full">
        Visionary Horizons
      </div>
      <div className="mt-5 text-xl leading-7 text-center text-zinc-600 w-[768px] max-md:max-w-full">
        Shaping Tomorrow: Cultivating a Clear Path Forward with Our Visionary
        Approach and Innovative Solutions
      </div>
      <div className="self-stretch mt-20 max-md:pl-5 max-md:mt-10 max-md:max-w-full">
        <ReactElasticCarousel enableAutoPlay autoPlaySpeed={5000} itemPadding={[60, 40]} breakPoints={breakPoints} isRTL={false}>
          {visions.map((vision, index) => (
            <div className="flex gap-5 max-md:flex-col max-md:gap-0" key={index}>
              <div className="flex flex-col w-[19%] max-md:ml-0 max-md:w-full">
                <Image
                  alt=""
                  loading="lazy"
                  src={vision.imageUrl}
                  className="z-10 shrink-0 self-stretch my-auto max-w-full aspect-[0.86] w-[100px] max-md:mt-10"
                  width="100"
                  height="116"
                />
              </div>
              <div className="flex flex-col w-[81%] max-md:ml-0 max-md:w-full">
                <div className="flex flex-col h-[220px] items-start py-3 pr-4 pl-12 w-full rounded-lg shadow-lg max-md:pl-5 max-md:max-w-full">
                  <div className="text-lg font-medium leading-7 text-gray-900">
                    {vision.title}
                  </div>
                  <div className="mt-1 text-base leading-6 text-neutral-500">
                    {vision.description}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </ReactElasticCarousel>
      </div>
    </div>
  );
};

export default Vision;
