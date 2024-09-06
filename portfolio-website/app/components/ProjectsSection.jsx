import React from 'react';
import Link from 'next/link';

const ProjectsSection = ({imageUrl, title, description, gitUrl, projectUrl}) => {
  return (
    <div className='flex flex-row'>
        <section className='flex flex-col top-0 left-0 fixed text-black h-[100vh] w-[50%]'>
            <div className='p-[5%] block text-2xl font-semibold box-border'>
                <span>01</span>
            </div>
            <div className='h-[100%] pt-[5%] items-center'>
                <div className='flex flex-col w-[100%] pt-[5%] pr-[5%] pb-[5%] pl-[10%]'>
                    <div className='text-6xl font-bold'><span>Old Harbour News</span></div>
                    <div className='text-2xl font-semibold pt-5'><span>Website Admin &nbsp; • &nbsp; Support</span></div>
                    <div className='text-xl pt-2'><span>A news site that is dedicated to providing news about old harbour and other areas of jamaica to jamaica and the jamaican diaspora</span></div>
                </div>
            </div>
            <div className='text-xl font-semibold p-[5%]'>
                <span>Website</span>
            </div>
        </section>
        <div className='flex flex-col ml-[50%] w-[50%] h-[925vh]'>
            <img src='/images/projects/OHN.png'/>
        </div>
    </div>
  );
};

export default ProjectsSection;