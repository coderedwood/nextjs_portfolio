'use client';
import React, { useState, useRef } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';
import { motion, useInView } from 'framer-motion';

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
    const ref = useRef(null);
    const isInView = useInView(ref, {once: true});
    
    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project)=>project.tag.includes(tag));

    const cardVariants = {
        initial: { y:50, opacity:0 },
        animate: { y:0, opacity:1 }

    };

  return (
    <section>
        <h2 className='text-3xl font-bold mt-3'>My Projects</h2>
        <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
            <ProjectTag onClick={handleTagChange} name="All" isSelected={tag === "All"}/>
            <ProjectTag onClick={handleTagChange} name="Web" isSelected={tag === "Web"}/>
            <ProjectTag onClick={handleTagChange} name="Mobile" isSelected={tag === "Mobile"}/>
        </div>
        <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
            {filteredProjects.map((project, index)=>
                <motion.li 
                key={index}
                variants={cardVariants} 
                initial="initial" 
                animate={isInView ? "animate" :"initial"}
                transition={{duration:0.3, delay: index * 0.4}}
                > 
                    <ProjectsCard 
                        key={project.id} 
                        title={project.title} 
                        description={project.description} 
                        imageUrl={project.image}
                        gitUrl={project.gitUrl}
                        projectUrl={project.projectUrl}
                    /> 
                </motion.li>
                )
            }
        </ul>
    </section>
  );
};

export default ProjectsSection;