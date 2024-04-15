"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';
import { Jomolhari, Montserrat, JetBrains_Mono } from 'next/font/google';

const jomolhari = Jomolhari({
  variable: '--font-jomolhari',
  subsets:['tibetan'],
  weight:['400']
});
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets:['cyrillic'],
  weight:['800','700','600']
});
const jetbrains_mono = JetBrains_Mono({
  variable: '--font-jetbrains_mono',
  subsets:['latin'],
  weight:['800','700','600']
});

const metrics = [
    {
        value: 40,
        type: "Satisfied Clients"
    },
    {
        value: 20,
        type: "Projects Completed"
    },
    {
        value: 10,
        type: "Years of Industry Experience"
    },
    {
        value: 4,
        type: "Years of Developer Experience"
    },
];

const TAB_DATA = [
    {
        title: "Skills",
        id: "skills",
        content: (
            <ul className='list-disc pl-2'>
                <li>NextJS</li>
                <li>Python</li>
                <li>Oracle SQL</li>
                <li>MongoDB</li>
                <li>Javascript</li>
                <li>.Net</li>
            </ul>
        )
    },
    {
        title: "Education",
        id: "education",
        content: (
            <ul className='list-disc pl-2'>
                <li>Microsoft Learn</li>
                <li>University of the West Indies, Mona Campus, Jamaica, West Indies.</li>
            </ul>
        )
    },
    {
        title: "Certifications",
        id: "certifications",
        content: (
            <ul className='list-disc pl-2'>
                <li>
                Microsoft Certified: Azure Fundamentals
                </li>
            </ul>
        )
    }
]

const About = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    };

  return (
    <section className='text-black' id='about'>
    <div className='text-center py-4 mt-16'>
        <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
            <span className={`text-black ${montserrat.variable} font-title`}>TECHNOLOGY & CHALLENGE DRIVEN!</span>
        </h1>
    </div>
    <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <div className={`mt-4 md:mt-0 text-left flex flex-col h-full ${jetbrains_mono.variable} font-subtitle`}>
                <h2 className='text-4xl font-bold text-black mb-4'>BIOGRAPHY</h2>
                <p className='text-base lg:text-lg'>Hello, I'm Dwayne Redwood, a seasoned web developer and UI/UX enthusiast dedicated to crafting visually appealing, functional, and user-centric digital solutions. With 4 years of hands-on experience in the industry, I'm constantly exploring novel approaches to transform clients' concepts into reality.
                </p>
                <br />
                <p className='text-base lg:text-lg'>
                    To me, design transcends mere aesthetics – it's about problem-solving and fostering seamless, delightful user experiences. Whether I'm tackling a website, mobile app, or any digital endeavour, I infuse each project with a relentless pursuit of design excellence and user satisfaction.
                </p>
                <br />
                <p className='text-base lg:text-lg'>
                    I eagerly anticipate the chance to leverage my expertise and enthusiasm to elevate your next venture."
                </p>
                {/*<div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab==="certifications"}>Certifications</TabButton>
                </div>
                <div className='mt-8'>{ TAB_DATA.find((t)=>t.id === tab)?.content }
                </div>*/}
            </div>
            <div className='class="relative col-span-2 h-max rounded-2xl border-2 border-solid border-dark  bg-light p-8 dark:border-light dark:bg-dark xl:col-span-4 md:col-span-8 md:order-1'>
                <div className=''>
                    <Image src="/images/IMG_2761.JPEG" alt='coderedwood' className='rounded-2xl w-[300] h-[300]' width={300} height={300}/>
                </div>
            </div>
            <div class="col-span-2 flex flex-col items-end justify-between xl:col-span-8 xl:flex-row  xl:items-center md:order-3">
                <div class="flex flex-col items-end justify-center xl:items-center">
                    <span class="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                        <span>40</span>+</span>
                        <h2 class="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">satisfied clients</h2>
                </div>
                <div class="flex flex-col items-end justify-center xl:items-center">
                    <span class="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl">
                        <span>50</span>+</span>
                        <h2 class="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">projects completed</h2>
                    </div>
                <div class="flex flex-col items-end justify-center xl:items-center"><span class="inline-block text-7xl font-bold md:text-6xl sm:text-5xl xs:text-4xl"><span>4</span>+</span><h2 class="mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  xl:text-center md:text-lg sm:text-base xs:text-sm">Years of experience</h2></div></div>
    </div>
    </section>
  );
};

export default About;