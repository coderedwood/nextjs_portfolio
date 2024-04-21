import React from 'react'


const interestCollection = [
  { interest: "DevOps & Automation",
  caption: "Creating seamless workflow solutions anchored in logic with high hands-off reproducibility and reliability."
  },
  { interest: "AI & Machine Learning",
  caption: "Exploring and working with AI, LLM and Machine Learning Technologies"
  },
  { interest: "Full Stack Development",
  caption: "Creating progressive web applications and APIs using various tech stacks for optimised solutions."
  },
  { interest: "Data Engineering Solutions",
  caption: "Enabling, processing and connecting data centric solutions through current standards and approaches."
  },
];

const AboutInterestSection = () => {
  return (
    <section>
      <div className='text-center py-4 mt-16'>
        <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
            <span className={`text-black`}>INTERESTS</span>
        </h1>
      </div>
      <div>
      {
        interestCollection.map((content,index)=>(
          <div key={index}>
          <h2>{content.interest}</h2>
          <p>{content.caption}</p>
          </div>
        ))
      }
      </div>
    </section>
  )
}

export default AboutInterestSection