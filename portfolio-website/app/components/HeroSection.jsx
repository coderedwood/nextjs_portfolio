'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{opacity: 0, scale: 0.5,}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}} 
             className="w-[250px] h-[250px] lg:w-[800px] lg:h-[800px] relative"
             >
            <Image
              src="/images/svg/spiderweb.svg"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 rounded-full w-[250px] h-[250px] lg:w-[800px] lg:h-[800px]'
              width={800}
              height={800}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}} 
          className="col-span-7 ml-16 pl-8 place-self-center text-center sm:text-left"
          >
          <h1 className='text-white mb-4 text-4xl sm:text-5xl lg:text-6xl font-extrabold'>
            <span className="text-black">TRANSFORMING EXPERIENCES THROUGH TECHNOLOGY</span>
            <br></br>
            {//<TypeAnimation
            //sequence={[
            //  'Dwayne',
             // 1000,
             // 'Programmer Analyst {...}',
              //1000,
              //'Full Stack Developer </>',
             // 1000,
              //'DevOps Engineer ⚙',
              //1000
            //]
          
           // wrapper="span"
           // speed={50}
           // repeat={Infinity}
         // />
        }
          </h1>
          <p className='text-black text-base sm:text-lg mb-6 lg:text-xl'>
          As a developer, I specialize in crafting innovative solutions utilizing cutting-edge technologies through diverse development approaches such as Full Stack Development, Containerized Applications, and Database Abstraction.
          </p>
          <div>
            {<button className='px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-green-900 border-[3px] border-white hover:border-slate-400 hover:bg-slate-200 text-white'>
              Resume
            </button>}
            {/* <button className='px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-tr from-blue-500 via-red-400 to-red-800 hover:bg-slate-800 text-white mt-3'>
              <span className="block bg-[#121212] hover:bg-slate-800 rounded-full px-5 py-2">Download CV</span>
            </button> */}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection