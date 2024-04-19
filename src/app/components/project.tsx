import Image from "next/image";

const Projects = () => {
  const projects = [
    {
      title: 'Online Booking Application for Real Estate Company',
      description: 'We developed a responsive web application for a leading real estate company in Vietnam, enabling clients to book appointment slots before visiting representative offices for procedures. Our solution was Implemented across the company\'s representative offices nationwide for four years, the application has streamlined appointment scheduling, improving customer experience and operational efficiency.',
      image: '/img/project1.png',
    },
    {
      title: 'Drone Inspection System',
      description: 'Client required an IoT system for real-time data collection from drones and robots. It needed to manage corporate accounts, drone status, inspection results, and email alerts. We deliver final product with optimized UIs for mobile and desktop web apps, implementing microservices architecture with modern UI design.Automated functions optimized image and video size/ resolution, with separate views for desktop and mobile. Our solution streamlined data collection and management, help enhancing user experience and improved efficiency with automated optimization.',
      image: '/img/project2.png',
    },
    {
      title: 'MobiFone Pay Wallet Mobile App',
      description: 'MobiFone Pay provides a user-friendly platform for quick utility bill payments, mobile top-ups, and exclusive deals. With advanced security features like password encryption, fingerprint recognition, and auto-logout, users can securely manage transactions. The app streamlines user experience with intuitive design and offers versatile functionality. We designed and developed MobiFone Pay with a user-friendly interface, ensuring seamless navigation for users. Employing advanced security measures like password encryption and multi-factor authentication, we created a robust platform for secure transactions. Additionally, our team integrated features for bill management, mobile top-up, and exclusive offers, enhancing user convenience.',
      image: '/img/project3.png',
    },
    {
      title: 'Visafe App - Ensuring Online Safety',
      description: 'Visafe is a groundbreaking application developed to safeguard the online experiences of Vietnamese citizens, effectively thwarting cyber scams and ensuring digital security. Offering swift, secure, and economical access, Visafe instills confidence in users as they navigate the online realm. Our development of the Visafe App delivers significant benefits for Vietnamese citizens.It provides comprehensive defense against cyber threats, real- time alerts for proactive risk management, and seamless integration into users\' online routines. Developed by the National Cybersecurity Monitoring Center (NCSC), Visafe stands as a trusted ally in creating a safer digital environment for all.',
      image: '/img/project4.png',
    },
  ];
  return (
    <div className="flex flex-col justify-center items-center p-20 bg-neutral-100 max-md:px-5">
      <div className="text-xl font-medium leading-7 text-center text-pink-500 max-md:max-w-full">
        Our Projects
      </div>
      <div className="mt-3 text-4xl font-medium leading-10 text-center text-gray-900 max-md:max-w-full">
        Explore Our Endeavors
      </div>
      <div className="mt-5 text-xl leading-7 text-center text-zinc-600 w-[768px] max-md:max-w-full">
        We&apos;ve exceled our experience in a wide range of industries to bring valuable insights and provide our customers
      </div>
      <div className="px-48 mt-24 max-xl:px-5 max-xl:mt-10 max-md:max-w-full">
        {projects.map((item, index) => (
          <div className={index % 2 === 0 ? "flex items-center gap-24 max-md:flex-col max-md:gap-0 mt-16" : "flex items-center flex-row-reverse gap-24 max-md:flex-col max-md:gap-0 mt-16"} key={index}>
            <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
                <div className="text-2xl font-medium leading-8 text-gray-900 max-md:max-w-full">
                  {item.title}
                </div>
                <div className="mt-4 text-base leading-6 text-slate-800 max-md:max-w-full">
                  {item.description}
                </div>
              </div>
            </div>
            <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
              <div className="flex flex-col grow justify-center w-full bg-gray-900 rounded-2xl border border-solid border-slate-800 max-md:mt-10 max-md:max-w-full">
                <Image
                  alt=""
                  loading="lazy"
                  src={item.image}
                  className="w-full aspect-[1.49] max-md:max-w-full"
                  width="596"
                  height="400"
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
