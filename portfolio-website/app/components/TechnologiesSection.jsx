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
        title:"Microsoft Windows",
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
    }
]

const TechnologiesSection = () => {
  return (
    <section>
        <div className='flex flex-col col-span-3 md:col-span-12 container justify-center text-center'>
            <div>
                <h2 className='text-xl'>
                    Technologies - Just some of what I've worked with.
                </h2>
                <p className='text-sm mt-2'>
                    Below is a sample of the technologies I've had direct experience with assessing or using.
                </p>
            </div>
            <div>
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