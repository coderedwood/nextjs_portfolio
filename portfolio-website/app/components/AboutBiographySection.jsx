'use client'
import React from 'react';
import Image from 'next/image';
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

const AboutBiographySection = () => {
  return (
    <section className='text-black' id='about'>
    <div className='text-center py-4 mt-16'>
        <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
            <span className={`text-black ${montserrat.variable} font-title`}>TECHNOLOGY & CHALLENGE DRIVEN!</span>
        </h1>
    </div>
    <div className='md:grid md:grid-cols-8 gap-6 py-8 px-4 sm:py-16 xl:px-16'>
            <div className={`mt-4 md:mt-0 text-left flex flex-col col-span-3 h-full ${jetbrains_mono.variable} font-subtitle`}>
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
            <div className='class="relative aspect-[1/1] col-span-3 rounded-2xl border-2 border-solid border-dark bg-[#FFC10D] p-8 dark:border-light dark:bg-dark md:order-1'>
                    <Image src="/images/IMG_2761.JPEG" alt='coderedwood' className='h-auto w-full rounded-2xl' width={300} height={300}/>
            </div>
            <div class="col-span-2 flex flex-col justify-between items-center md:order-3">
               <div class="flex flex-col  justify-center items-center">
                    <span class={`inline-block text-7xl font-bold xl:text-[80px] md:text-6xl sm:text-5xl xs:text-4xl ${montserrat.variable} font-title`}>
                        <span>40</span>+</span>
                        <h2 class={`mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  text-center md:text-lg sm:text-base xs:text-sm ${jetbrains_mono.variable} font-subtitle`}>satisfied clients</h2>
                </div>
                <div class="flex flex-col  justify-center items-center">
                    <span class={`inline-block text-7xl font-bold xl:text-[80px] md:text-6xl sm:text-5xl xs:text-4xl ${montserrat.variable} font-title`}>
                        <span>50</span>+</span>
                        <h2 class={`mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  text-center md:text-lg sm:text-base xs:text-sm ${jetbrains_mono.variable} font-subtitle`}>projects completed</h2>
                </div>
                <div class="flex flex-col  justify-center items-center"><span class={`inline-block text-7xl font-bold xl:text-[80px] md:text-6xl sm:text-5xl xs:text-4xl ${montserrat.variable} font-title`}><span>10</span>+</span><h2 class={`mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  text-center md:text-lg sm:text-base xs:text-sm ${jetbrains_mono.variable} font-subtitle`}>Years of industry experience</h2>
                </div>
                <div class="flex flex-col  justify-center items-center"><span class={`inline-block text-7xl font-bold xl:text-[80px] md:text-6xl sm:text-5xl xs:text-4xl ${montserrat.variable} font-title`}><span>4</span>+</span><h2 class={`mb-4 text-xl font-medium capitalize text-dark/75 dark:text-light/75  text-center md:text-lg sm:text-base xs:text-sm ${jetbrains_mono.variable} font-subtitle`}>Years of developer experience</h2>
            </div>
            </div>
    </div>
    </section>
  )
}

export default AboutBiographySection