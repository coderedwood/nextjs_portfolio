import React from 'react';
import Link from 'next/link';
import TextContent from './subcomponents/TextContent';
import ImageContent from './subcomponents/ImageContent';

const projectData = [
    {
        id: 1,
        bullletText: "01",
        title:"OldHarbourNews.com",
        role: "Website Admin &nbsp; • &nbsp; Support",
        description: "A news site that is dedicated to providing news about Old Harbour and other areas of Jamaica to Jamaica and the Jamaican diaspora",
        contentType: "Website",
        image:"/images/projects/macbook_ohn.png",
        gitUrl:"",
        projectUrl:"https://www.oldharbournews.com/"
    },
    {
        id: 2,
        bullletText: "02",
        title:"DrKurtWaulFoundation.com",
        role: "Website Admin &nbsp; • &nbsp; Support",
        description: "Deployed site for a foundation",
        contentType: "Website",
        image:"/images/projects/macbook_DKWF.png",
        gitUrl:"",
        projectUrl:"https://www.drkurtwaulfoundation.com"
     },
    {
        id: 3,
        bullletText: "03",
        title:"Urgedservices.com",
        role: "Website Admin &nbsp; • &nbsp; Support",
        description: "Collaborative development on a commercial food delivery service website",
        contentType: "Website &nbsp; • &nbsp; Delivery App",
        image:"/images/projects/macbook_urged.png",
        gitUrl:"https://github.com/jammelOSjohnson/urgedinternational.com",
        projectUrl:"https://urgedservices.com"
      
     }
]

// const Projects = () => {
//     const [tag, setTag] = useState('All');
//     const ref = useRef(null);
//     const isInView = useInView(ref, { once: true });
//     const [cardWidth, setCardWidth] = useState(0);

//     useEffect(() => {
//         // Set the card width when the component mounts or when the tag changes
//         if (ref.current) {
//           setCardWidth(ref.current.firstChild.offsetWidth);
//         }
//       }, [tag]);

//     const handleTagChange = (newTag) => {
//         setTag(newTag);
//     };

//     const filteredProjects = projectData.filter((project) => project.tag.includes(tag));

//     // const cardVariants = {
//     //     initial: (index) => ({ x: -index * cardWidth, y:50, opacity: 0 }), // Set initial x position based on index and cardWidth
//     //     animate: (index) => ({ x: 0, y:0, opacity: 1 }),
//     //     exit: (index) => ({ x: index * cardWidth, y:50, opacity: 0 }) // Exit animation
//     //   };
//     const cardVariants = {
//         initial: { y:50, opacity: 0 }, // Set initial x position based on index and cardWidth
//         animate: {staggerChildren: 0.12, y:0, opacity: 1 },
//         exit: { y:50, opacity: 0 } // Exit animation
//       };

//     return (
//         <section id='projects'>
//             <h2 className='text-3xl font-bold mt-3'>My Projects</h2>
//             <div className='text-white flex flex-row justify-center items-center gap-2 py-6'>
//                 <ProjectTag onClick={handleTagChange} name='All' isSelected={tag === 'All'} />
//                 <ProjectTag onClick={handleTagChange} name='Web' isSelected={tag === 'Web'} />
//                 <ProjectTag onClick={handleTagChange} name='Mobile' isSelected={tag === 'Mobile'} />
//             </div>
//             <AnimatePresence mode='sync'>
//                 <ul ref={ref} className='grid md:grid-cols-3 gap-8 md:gap-12'>
//                     {filteredProjects.map((project) => (
//                         <motion.li
//                             key={project.id}
//                             variants={cardVariants}
//                             initial='initial'
//                             animate={isInView ? 'animate' : 'initial'}
//                             // exit={!(tag===project.tag) ? 'exit':'animate'} // Exit animation
//                             transition={{ duration: 0.3, delay: project.id * 0.4 }}
//                         >
//                             <ProjectsCard
//                                 key={project.id}
//                                 title={project.title}
//                                 description={project.description}
//                                 imageUrl={project.image}
//                                 gitUrl={project.gitUrl}
//                                 projectUrl={project.projectUrl}
//                             />
//                         </motion.li>
//                     ))}
//                 </ul>
//             </AnimatePresence>
//         </section>
//     );
// };

const ProjectsSection = ({imageUrl, title, roles, description, cType, gitUrl, projectUrl, bulletNumber}) => {
  return (
    <div className='flex flex-row'>
        <section className='flex flex-col top-0 left-0 fixed text-black h-[100vh] w-[50%]'>
            <div className='p-[5%] block text-2xl font-semibold box-border'>
                <span>{projectData[1].bullletText}</span>
            </div>
            <div className='h-[100%] pt-[5%] items-center'>
                <div className='flex flex-col w-[100%] pt-[5%] pr-[5%] pb-[5%] pl-[10%]'>
                    <div className='text-6xl font-bold'><span>{projectData[1].title}</span></div>
                    <div className='text-2xl font-semibold pt-5'><span>{projectData[1].role}</span></div>
                    <div className='text-xl pt-2'><span>{projectData[1].description}</span></div>
                </div>
            </div>
            <div className='text-xl font-semibold p-[5%]'>
                <span>{projectData[1].contentType}</span>
            </div>
        </section>
        <div className='flex flex-col ml-[50%] w-[50%] h-[925vh]'>
            <img src={projectData[1].image}/>
        </div>
    </div>
  );
};

export default ProjectsSection;