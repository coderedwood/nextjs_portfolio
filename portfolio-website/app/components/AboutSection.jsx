"use client";
import React, { useTransition, useState } from 'react';
import Image from 'next/image';
import TabButton from './TabButton';

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
                <li>Microsoft Cloud Fundamentals</li>
            </ul>
        )
    }
]

const AboutSection = () => {
    const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    };

  return (
    <section className='text-white'>
        <div className='md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16'>
            <Image src="/images/about-image.jpeg" width={500} height={500}/>
            <div className='mt-4 md:mt-0 text-left flex flex-col h-full'>
                <h2 className='text-4xl font-bold text-white mb-4'>About Me</h2>
                <p className='text-base lg:text-lg'>I'm a full stack web developer with a passion for all things programming, 
                    automation and devops. I have worked with various technologies such as Microsoft Azure,
                    ReactJS, NextJS, NodeJS, .Net, Python, Oracle SQL, DB2 SQL, MongoDB, HTML, CSS, 
                    Vanilla Javascript and Git. I learn quickly and I'm always seeking new 
                    technologies to learn and apply in practical and industry leading ways. I work well with 
                    teams and I'm always excited to leverage the experience of others to build robust technological
                    solutions.
                 </p>
                 <div className='flex flex-row mt-8'>
                    <TabButton selectTab={() => handleTabChange("skills")} active={tab==="skills"}>Skills</TabButton>
                    <TabButton selectTab={() => handleTabChange("education")} active={tab==="education"}>Education</TabButton>
                    <TabButton selectTab={() => handleTabChange("certifications")} active={tab==="certifications"}>Certifications</TabButton>
                 </div>
                 <div className='mt-8'>{ TAB_DATA.find((t)=>t.id === tab)?.content }</div>
            </div>
        </div>
    </section>
  );
};

export default AboutSection;