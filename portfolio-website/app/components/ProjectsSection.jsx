"use client";
// import Link from 'next/link';
import TextContent from "@/app/components/subcomponents/TextContent";
import ImageContent from "@/app/components/subcomponents/ImageContent";

const ProjectsSection = ({ project }) => {
  return (
    <>
    <div className="flex flex-row">
      <TextContent
        key={project.id}
        bullletText={project.bullletText}
        title={project.title}
        role={project.role}
        description={project.description}
        contentType={project.contentType} />
    </div>
    <div>
      <div className='flex flex-col ml-[50%] w-[50%]'>
            <ImageContent 
            imageUrl={project.imageUrl}
            />
      </div>
    </div>
    </>
  );
};

export default ProjectsSection;
