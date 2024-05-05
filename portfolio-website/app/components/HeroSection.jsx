'use client';
import React from 'react';
import Image from 'next/image';
import { TypeAnimation } from 'react-type-animation';
import { motion } from 'framer-motion';
import { Jomolhari, Montserrat } from 'next/font/google';

const jomolhari = Jomolhari({
  variable: '--font-jomolhari',
  subsets:['tibetan'],
  weight:['400']
});
const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets:['cyrillic'],
  weight:['800','700','600']
});


const HeroSection = () => {
  return (
    <section className='lg:py-16'>
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-5 place-self-center mt-4 lg:mt-0">
          <motion.div
            initial={{opacity: 0, scale: 0.5,}}
            animate={{opacity: 1, scale: 1}}
            transition={{duration: 0.5}} 
             className="w-[300px] h-[300px] md:w-[500px] md:h-[500px] xl:w-[800px] xl:h-[800px] relative"
             >
            <Image
              src="/images/svg/spiderweb.svg"
              alt='hero image'
              className='absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2 w-[300px] h-[300px] lg:w-[500px] lg:h-[500px] xl:w-[800px] xl:h-[800px]'
              width={300}
              height={300}
            />
          </motion.div>
        </div>
        <motion.div
          initial={{opacity: 0, scale: 0.5}}
          animate={{opacity: 1, scale: 1}}
          transition={{duration: 0.5}} 
          className="col-span-7 lg:ml-16 lg:pl-10 md:mt-10 md:ml-10 md:pl-6 md:pt-4 lg:mt-0 lg:pt-0 place-self-center text-center sm:text-left"
          >
          <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[56px] font-extrabold'>
            <span className={`text-black ${montserrat.variable} font-title`}>TRANSFORMING EXPERIENCES THROUGH TECHNOLOGY</span>
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
          <p className={`text-black  ${jomolhari.variable} font-paragraph text-base sm:text-lg mb-6 pt-4 lg:text-xl`}>
          As a developer, I specialize in crafting innovative solutions utilizing cutting-edge technologies through diverse development approaches such as Full Stack Development, Containerized Applications, and Database Abstraction.
          </p>
          <div>
            {<button className={`flex px-6 py-3 w-full sm:w-fit rounded-xl mr-4 ${jomolhari.variable} font-paragraph bg-green-900 border-[3px] border-white hover:border-green-900 hover:bg-slate-200 hover:text-green-900 text-white`}>
              Resume <Image src="https://www.svgrepo.com/download/500853/external.svg" className='relative pt-0 text-white' alt='external icon' width={25} height={25}/>
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