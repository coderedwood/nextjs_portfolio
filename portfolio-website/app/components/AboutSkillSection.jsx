'use client'
import React from 'react'
import SkillsSVG from './subcomponents/SkillsSVG'

const AboutSkillSection = () => {
  return (
    <section className='content-center'>
    <div className='text-center py-4 mt-16'>
        <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
            <span className={`text-black`}>SKILLS</span>
        </h1>
    </div>
    <div className=' ml-auto mr-auto lg:w-[55vw]'>
      <SkillsSVG />
    </div>
    </section>
  )
}

export default AboutSkillSection