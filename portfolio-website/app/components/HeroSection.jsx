'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}} 
          className="col-span-7 place-self-center text-center sm:text-left"
          >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className="text-transparent bg-clip-text bg-gradient-to-tr from-red-400 to-red-800">Hello, I'm{" "}</span>
            <br></br>
            <TypeAnimation
            sequence={[
              'Dwayne',
              1000,
              'Programmer Analyst {...}',
              1000,
              'Full Stack Developer </>',
              1000,
              'DevOps Engineer ⚙',
              1000
            ]}
            wrapper="span"
            speed={50}
            repeat={Infinity}
          />
          </h1>
          <p className='text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl'>
            "I embrace new technologies. I really like the challenge."
          </p>
          <div>
            {/* <button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-tr from-blue-500 via-red-400 to-red-800 border-[3px] border-white hover:border-slate-400 hover:bg-slate-200 text-white'>
              Hire Me
            </button> */}
            {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-tr from-blue-500 via-red-400 to-red-800 hover:bg-slate-800 text-white mt-3'>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button> */}
          </div>
        </motion.div>
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{opacity: 0, scale: 0.5,}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}} 
             className="rounded-full bg-[#181818] w-[250px] h-[250px] lg:w-[400px] lg:h-[400px] relative">
            <Image
              src="/images/IMG_2761.jpeg"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[250px] h-[250px] lg:w-[400px] lg:h-[400px]'
              width={300}
              height={300}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection