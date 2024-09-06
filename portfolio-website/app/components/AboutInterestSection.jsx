import React, { useState, useRef, useEffect } from 'react';
import { JetBrains_Mono, Jomolhari } from 'next/font/google';

const jomolhari = Jomolhari({
  variable: '--font-jomolhari',
  subsets:['tibetan'],
  weight:['400']
});
const jetbrains_mono = JetBrains_Mono({
  variable: '--font-jetbrains_mono',
  subsets:['latin'],
  weight:['800','700','600']
});


const interestCollection = [
  { interest: "DevOps & Automation",
  caption: "Creating seamless workflow solutions anchored in logic with high hands-off reproducibility and reliability.",
  gridColour: 'bg-[#FFC00D]',
  id: 1
  },
  { interest: "AI & Machine Learning",
  caption: "Exploring and working with AI, LLM and Machine Learning Technologies",
  gridColour: 'bg-[#225d35]',
  id: 2
  },
  { interest: "Full Stack Development",
  caption: "Creating progressive web applications and APIs using various tech stacks for optimised solutions.",
  gridColour: 'bg-[#b01008]',
  id: 3
  },
  { interest: "Data Engineering Solutions",
  caption: "Enabling, processing and connecting data centric solutions through current standards and approaches.",
  gridColour: 'bg-[#194F82]',
  id: 4
  },
];


const AboutInterestSection = () => {
  const [selectedId, setSelectedId] = useState(null);

  const handleGridState = (id) => {
    setSelectedId(id === selectedId ? null : id);
    console.log(selectedId)
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest('.interest-item')) {
        setSelectedId(null);
      }
    };

    document.body.addEventListener('click', handleClickOutside);

    return () => {
      document.body.removeEventListener('click', handleClickOutside);
    };
  }, []);

  return (
    <section>
      <div className='text-center py-4 mt-16'>
        <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
            <span className={`text-black`}>INTERESTS</span>
        </h1>
      </div>
      <main className='flex container mx-auto py-20 justify-center'>
          <section className='lg:grid lg:grid-cols-6 lg:gap-4 w-full'>
        {
        interestCollection.map((content,index)=>(
          <div key={content.id} className={`sm:mb-6 lg:mb-0 interest-item p-6 border-4 border-black rounded-[12px] ${content.gridColour} flex flex-col gap-1 
          ${selectedId === content.id
            ? 'col-span-4'
            : (selectedId === content.id + 1 && index % 2 === 0) ||
              (selectedId === content.id - 1 && index % 2 !== 0)
            ? 'col-span-2'
            : 'col-span-3'}`}
          onClick={() => handleGridState(content.id)}>
          <span className={`${jetbrains_mono.variable} font-title font-semibold text-[26px] text-center 
          ${selectedId === content.id ? 'pt-[8rem]': 'pt-[8rem] pb-[8rem]'}`}>{content.interest}</span>
          <span className={`${jomolhari.variable} font-subtitle text-center text-[18px] 
          ${selectedId !== content.id ? 'hidden':' pt-1 pb-[8rem] text-wrap'}`}>{content.caption}</span>
          </div>
        ))
      }
      </section> 
      </main>
    </section>
  )
}

export default AboutInterestSection