"use client";
import React from 'react';
// import React, { useTransition, useState } from 'react';
// import Image from 'next/image';
// import TabButton from './TabButton';
import AboutBiographySection from './AboutBiographySection';
import AboutSkillSection from './AboutSkillSection';
import AboutInterestSection from './AboutInterestSection';

{/*const TAB_DATA = [
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
*/}

const About = () => {
    {/*const [tab, setTab] = useState("Skills");
    const [isPending, startTransition] = useTransition();

    const handleTabChange = (id) => {
        startTransition(()=>{
            setTab(id);
        });
    };
*/}
  return (
    <>
        <AboutBiographySection />
        <AboutSkillSection />
        <AboutInterestSection />
    </>
  );
};

export default About;