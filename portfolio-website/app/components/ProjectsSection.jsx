'use client';
import React, { useState, useRef, useEffect } from 'react';
import ProjectsCard from './ProjectsCard';
import ProjectTag from './ProjectTag';
import { motion, useInView, AnimatePresence, animate } from 'framer-motion';

const projectData = [
    {
        id: 1,
        title:"OldHarbourNews.com",
        description: "Serviced and maintained this website",
        image:"/images/projects/OHN.png",
        tag:["All","Mobile"],
        gitUrl:"",
        projectUrl:"https://www.oldharbournews.com/"
    },
    {
        id: 2,
        title:"DrKurtWaulFoundation.com",
        description: "Deployed site for a foundation",
        image:"/images/projects/DKWF.png",
        tag:["All", "Web"],
        gitUrl:"",
        projectUrl:"https://www.drkurtwaulfoundation.com"
    },
    {
        id: 3,
        title:"Urgedservices.com",
        description: "Collaborative development on a commercial food delivery service website",
        image:"/images/projects/urgedservices.png",
        tag:["All", "Web","Mobile"],
        gitUrl:"https://github.com/jammelOSjohnson/urgedinternational.com",
        projectUrl:"https://urgedservices.com"
    }
]


const ProjectsSection = () => {
    const [tag, setTag] = useState('All');
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });
    const [cardWidth, setCardWidth] = useState(0);

    useEffect(() => {
        // Set the card width when the component mounts or when the tag changes
        if (ref.current) {
          setCardWidth(ref.current.firstChild.offsetWidth);
        }
      }, [tag]);

    const handleTagChange = (newTag) => {
        setTag(newTag);
    };

    const filteredProjects = projectData.filter((project) => project.tag.includes(tag));

    // const cardVariants = {
    //     initial: (index) => ({ x: -index * cardWidth, y:50, opacity: 0 }), // Set initial x position based on index and cardWidth
    //     animate: (index) => ({ x: 0, y:0, opacity: 1 }),
    //     exit: (index) => ({ x: index * cardWidth, y:50, opacity: 0 }) // Exit animation
    //   };
    const cardVariants = {
        initial: { y:50, opacity: 0 }, // Set initial x position based on index and cardWidth
        animate: {staggerChildren: 0.12, y:0, opacity: 1 },
        exit: { y:50, opacity: 0 } // Exit animation
      };

    return (
        <section id='projects'>
            <h2 className='text-3xl font-bold mt-3'>My Projects</h2>
            <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
                <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
                <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
                <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
            </div>
            <AnimatePresence mode='sync'>
                <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
                    {filteredProjects.map((project) => (
                        <motion.li
                            key={project.id}
                            variants={cardVariants}
                            initial='initial'
                            animate={isInView ? 'animate' : 'initial'}
                            // exit={!(tag===project.tag) ? 'exit':'animate'} // Exit animation
                            transition={{ duration: 0.3, delay: project.id * 0.4 }}
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
                    ))}
                </ul>
            </AnimatePresence>
        </section>
    );
};

export default ProjectsSection;
