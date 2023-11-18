'use client';
import React, { useState } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';

const projectData = [
    {
        id: 1,
        title:"OldHarbourNews.com",
        description: "Project decription 1",
        image:"/images/projects/OHN.png",
        tag:["All","Mobile"],
        gitUrl:"/",
        projectUrl:"https://www.oldharbournews.com/"
    },
    {
        id: 2,
        title:"DrKurtWaulFoundation.com",
        description: "Project decription 2",
        image:"/images/projects/DKWF.png",
        tag:["All", "Web"],
        gitUrl:"/",
        projectUrl:"http://www.drkurtwaulfoundation.com"
    }
]

const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project)=>project.tag.includes(tag));

  return (
    <>
        <h2>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
        </div>
        <div className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project)=> 
                <ProjectsCard 
                    key={project.id} 
                    title={project.title} 
                    description={project.description} 
                    imageUrl={project.image}
                    gitUrl={project.gitUrl}
                    projectUrl={project.projectUrl}
                /> )
            }
        </div>
    </>
  );
};

export default ProjectsSection;