'use client';

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { Accordion, AccordionBody, AccordionHeader } from "@material-tailwind/react";

const Icon = ({ id, open }: { id: number, open: number }) => {
  return (
    <svg width="10" height="5" viewBox="0 0 10 5" fill="none" xmlns="http://www.w3.org/2000/svg" className={`${id === open ? "rotate-180" : ""} transition-transform`}>
      <path d="M0 5L5 0L10 5H0Z" fill="#0B1323" />
    </svg>
  );
}

const FAQ = () => {
  const [open, setOpen] = useState(-1);

  const handleOpen = (value: number) => { console.log(value); setOpen(open === value ? -1 : value) };

  const faqs = [
    {
      question: 'What industries does Hexigon IT Solutions serve?',
      answer: 'To schedule a consultation with our experts, simply fill out the contact form on our website or reach out to us via email or phone. Our team will promptly get in touch to discuss your requirements and propose tailored solutions.',
    },
    {
      question: 'What types of software development services does Hexigon offer?',
      answer: 'To schedule a consultation with our experts, simply fill out the contact form on our website or reach out to us via email or phone. Our team will promptly get in touch to discuss your requirements and propose tailored solutions.',
    },
    {
      question: 'What is your cancellation policy?',
      answer: 'To schedule a consultation with our experts, simply fill out the contact form on our website or reach out to us via email or phone. Our team will promptly get in touch to discuss your requirements and propose tailored solutions.',
    },
    {
      question: 'Can other info be added to an invoice?',
      answer: 'To schedule a consultation with our experts, simply fill out the contact form on our website or reach out to us via email or phone. Our team will promptly get in touch to discuss your requirements and propose tailored solutions.',
    },
    {
      question: 'How does billing work?',
      answer: 'To schedule a consultation with our experts, simply fill out the contact form on our website or reach out to us via email or phone. Our team will promptly get in touch to discuss your requirements and propose tailored solutions.',
    },
    {
      question: 'How do I change my account email?',
      answer: 'To schedule a consultation with our experts, simply fill out the contact form on our website or reach out to us via email or phone. Our team will promptly get in touch to discuss your requirements and propose tailored solutions.',
    },
  ];
  return (
    <div className="flex justify-center items-center self-stretch px-16 py-20 bg-white max-md:px-5">
      <div className="flex flex-col items-center mt-4 w-full max-w-[1216px] max-md:max-w-full">
        <div className="text-xl font-medium leading-7 text-center text-pink-500 max-md:max-w-full">
          FAQs
        </div>
        <div className="mt-3 text-4xl font-medium leading-10 text-center text-gray-900 max-md:max-w-full">
          Answers at Your Fingertips
        </div>
        <div className="mt-5 text-xl leading-7 text-center text-zinc-600 max-md:max-w-full">
          Discover Solutions to Common Queries and Gain Insights into Hexigon&apos;s Offerings.
        </div>
        {faqs.map((faq, index) => (
          <Accordion open={open === index} icon={<Icon id={index} open={open} />} key={index}
            className="mt-8 max-w-full w-[768px] max-md:mt-10">
            <AccordionHeader onClick={() => handleOpen(index)}>
              {faq.question}
            </AccordionHeader>
            <AccordionBody>
              {faq.answer}
            </AccordionBody>
          </Accordion>
        ))}
        <div className="flex justify-center items-center self-stretch px-8 py-10 mt-16 rounded-2xl bg-neutral-100 max-md:px-5 max-md:mt-10 max-md:max-w-full">
          <div className="flex flex-col max-w-full w-[768px]">
            <Image
              alt=""
              loading="lazy"
              src="/img/avatar_group.png"
              className="self-center w-52 max-w-full aspect-[3.7]"
              width="208"
              height="56"
            />
            <div className="mt-8 text-xl font-medium leading-7 text-center text-gray-900 max-md:max-w-full">
              Still have questions?
            </div>
            <div className="mt-2 text-base leading-6 text-center text-zinc-600 max-md:max-w-full">
              Can&apos;t find the answer you&apos;re looking for? Please chat to our
              friendly team.
            </div>
            <Link href="/" className="justify-center self-center px-6 py-3 mt-8 text-lg font-bold leading-6 text-white bg-sky-500 rounded-lg backdrop-blur-[10px] max-md:px-5">
              Contact us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;
