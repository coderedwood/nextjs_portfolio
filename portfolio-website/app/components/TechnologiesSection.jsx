import React from 'react'
import TechnologiesCard from './TechnologiesCard';

const technologiesData = [
    {
        id: 1,
        title:"Linux",
        image:"/images/technologies/linux-logo.svg"
    },
    {
        id: 2,
        title:"MacOS",
        image:"/images/technologies/apple-logo.svg"
    },
    {
        id: 3,
        title:"Windows",
        image:"/images/technologies/microsoft-windows-22-logo.svg"
    },
    {
        id: 4,
        title:"Bash",
        image:"/images/technologies/bash-icon.svg"
    },  {
        id: 5,
        title:"Powershell",
        image:"/images/technologies/powershell-logo.svg"
    },
    {
        id: 6,
        title:"Docker",
        image:"/images/technologies/docker-logo.svg"
    },  {
        id: 7,
        title:"Drupal",
        image:"/images/technologies/drupal-logo.svg"
    },
    {
        id: 8,
        title:"WordPress",
        image:"/images/technologies/wordpress-logo.svg"
    },
    {
        id: 9,
        title:"Javascript",
        image:"/images/technologies/javascript-logo.svg"
    },
    {
        id: 10,
        title:"Python",
        image:"/images/technologies/python-logo.svg"
    },
    {
        id: 11,
        title:"Git",
        image:"/images/technologies/git-logo.svg"
    },
    {
        id: 12,
        title:"Cobol",
        image:"/images/technologies/cobol-logo.svg"
    }
]

const TechnologiesSection = () => {
  return (
    <section>
        <div className='justify-center text-center mx-auto'>
            <div>
                <h2 className='text-3xl font-bold mb-4'>
                    Technologies - Just some of what I've worked with.
                </h2>
                <p className='text-base lg:text-lg'>
                    Below is a sample of the technologies I've had direct experience with assessing or using.
                </p>
            </div>
            <div className='flex flex-wrap justify-center gap-6 md:gap-8'>
            {technologiesData.map((project)=> 
                <TechnologiesCard 
                    key={project.id} 
                    title={project.title} 
                    imageUrl={project.image}
                /> )
            }
        </div>
        </div>
    </section>
  );
};

export default TechnologiesSection;