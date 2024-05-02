import React from 'react'
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
      <main className='flex container mx-auto py-20 justify-center'>
        <section className='grid grid-cols-6 gap-4'>
          <div className=' p-6  border-4 border-black rounded-[12px] bg-[#FDCE36] flex flex-col gap-1 col-span-3 row-span-3'>
            <span className={`mt-4 ${jetbrains_mono.variable} font-title font-semibold text-[26px] text-center`}>DevOps1</span>
            {/*<span className={`mb-4 ${jomolhari.variable} font-subtitle text-center text-[18px]`}>Enabling efficient integration and deployments through experience with various technologies</span>*/}
          </div>
          <div className=' p-6 border-4 border-black rounded-[12px] bg-[#327949] flex flex-col gap-1 col-span-3 row-span-3'>
            <span className={`mt-4 ${jetbrains_mono.variable} font-title font-semibold text-[26px] text-center`}>DevOps2</span>
            {/*<span className={`mb-4 ${jomolhari.variable} font-subtitle text-center text-[18px]`}>Enabling efficient integration and deployments through experience with various technologies</span>*/}
          </div>
          <div className=' p-6 border-4 border-black rounded-[12px] bg-[#FD291E] flex flex-col gap-1 col-span-4 row-span-4'>
            <svg width="75" height="75" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_77_16)">
            <path d="M103.62 30.0456V18.3803H91.9544V0H83.9979V18.3803H73.9704V0H66.0139V18.3803H55.9863V0H48.0299V18.3803H38.0023V0H30.0458V18.3803H18.3803V30.0456H0V38.002H18.3803V48.0296H0V55.9861H18.3803V66.0137H0V73.9701H18.3803V83.9977H0V91.9542H18.3803V103.619H30.0456V122H38.002V103.62H48.0296V122H55.9861V103.62H66.0137V122H73.9701V103.62H83.9977V122H91.9542V103.62H103.619V91.9544H122V83.9979H103.62V73.9704H122V66.0139H103.62V55.9863H122V48.0299H103.62V38.0023H122V30.0461H103.62V30.0456ZM95.6635 95.663H95.6632H26.337V26.337H95.6635V95.663Z" fill="black"/>
            <path d="M89.5397 54.6931C89.5397 49.2334 86.1575 44.4701 81.3366 42.4838C81.0092 36.0657 75.685 30.9448 69.1873 30.9448C66.037 30.9448 63.1629 32.1486 61 34.1199C58.8371 32.1486 55.963 30.9448 52.8126 30.9448C46.3147 30.9448 40.9903 36.0657 40.6634 42.4838C35.842 44.4701 32.4603 49.2334 32.4603 54.6931C32.4603 56.9751 33.0429 59.1235 34.0668 60.9978C33.0205 62.9162 32.4603 65.0755 32.4603 67.307C32.4601 72.8173 35.8558 77.5469 40.6639 79.5196C40.9929 85.9361 46.3164 91.0551 52.8129 91.0551C55.9632 91.0551 58.8374 89.8513 61.0002 87.88C63.1631 89.8513 66.0373 91.0551 69.1876 91.0551C75.6843 91.0551 81.0078 85.9361 81.3366 79.5196C86.1441 77.5467 89.5401 72.817 89.5401 67.307C89.5401 65.0753 88.9799 62.916 87.9336 60.9978C88.9571 59.1233 89.5397 56.9749 89.5397 54.6931ZM57.0216 78.8896C57.0216 81.2105 55.1335 83.0986 52.8126 83.0986C50.92 83.0986 49.3161 81.8427 48.7883 80.1208C51.3274 79.4984 53.6564 78.1333 55.4397 76.1644L49.5425 70.8229C48.5355 71.9349 47.1554 72.5473 45.6566 72.5473C42.7669 72.5473 40.4163 70.1964 40.4163 67.307C40.4163 67.1409 40.4242 66.976 40.4397 66.8124C42.0407 67.5043 43.8042 67.8896 45.6568 67.8896V59.9332C42.7672 59.9332 40.4165 57.5823 40.4165 54.6926C40.4163 52.8086 41.4292 51.1332 42.9495 50.2089C44.3253 52.1225 46.2497 53.6437 48.5403 54.503L51.3346 47.0534C49.7012 46.4407 48.6036 44.8559 48.6036 43.11C48.6036 40.7892 50.4918 38.901 52.8126 38.901C55.1335 38.901 57.0216 40.7892 57.0216 43.11V78.8896ZM81.5601 66.8124C81.5756 66.976 81.5834 67.1409 81.5834 67.307C81.5834 70.1967 79.2326 72.5473 76.3429 72.5473C74.8444 72.5473 73.4642 71.9349 72.4573 70.8229L66.5603 76.1644C68.3438 78.1333 70.6725 79.4987 73.2117 80.1208C72.6839 81.8429 71.0798 83.0986 69.1873 83.0986C66.8665 83.0986 64.9783 81.2105 64.9783 78.8896V43.1103C64.9783 40.7894 66.8665 38.9013 69.1873 38.9013C71.508 38.9013 73.3963 40.7894 73.3963 43.1103C73.3963 44.8562 72.2988 46.441 70.6654 47.0536L73.4597 54.5032C75.7503 53.644 77.6744 52.1225 79.0505 50.2092C80.5707 51.1334 81.5837 52.809 81.5837 54.6929C81.5837 57.5825 79.2328 59.9334 76.3432 59.9334V67.8899C78.1953 67.8899 79.9591 67.5043 81.5601 66.8124Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_77_16">
            <rect width="122" height="122" fill="white"/>
            </clipPath>
            </defs>
            </svg>

            <span className={`mt-4 ${jetbrains_mono.variable} font-title font-semibold text-[26px] text-center`}>DevOps3</span>
            <span className={`mb-4 ${jomolhari.variable} font-subtitle text-center text-[18px]`}>Enabling efficient integration and deployments through experience with various technologies</span>
            
            <svg width="75" height="75" viewBox="0 0 122 122" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g clip-path="url(#clip0_77_16)">
            <path d="M103.62 30.0456V18.3803H91.9544V0H83.9979V18.3803H73.9704V0H66.0139V18.3803H55.9863V0H48.0299V18.3803H38.0023V0H30.0458V18.3803H18.3803V30.0456H0V38.002H18.3803V48.0296H0V55.9861H18.3803V66.0137H0V73.9701H18.3803V83.9977H0V91.9542H18.3803V103.619H30.0456V122H38.002V103.62H48.0296V122H55.9861V103.62H66.0137V122H73.9701V103.62H83.9977V122H91.9542V103.62H103.619V91.9544H122V83.9979H103.62V73.9704H122V66.0139H103.62V55.9863H122V48.0299H103.62V38.0023H122V30.0461H103.62V30.0456ZM95.6635 95.663H95.6632H26.337V26.337H95.6635V95.663Z" fill="black"/>
            <path d="M89.5397 54.6931C89.5397 49.2334 86.1575 44.4701 81.3366 42.4838C81.0092 36.0657 75.685 30.9448 69.1873 30.9448C66.037 30.9448 63.1629 32.1486 61 34.1199C58.8371 32.1486 55.963 30.9448 52.8126 30.9448C46.3147 30.9448 40.9903 36.0657 40.6634 42.4838C35.842 44.4701 32.4603 49.2334 32.4603 54.6931C32.4603 56.9751 33.0429 59.1235 34.0668 60.9978C33.0205 62.9162 32.4603 65.0755 32.4603 67.307C32.4601 72.8173 35.8558 77.5469 40.6639 79.5196C40.9929 85.9361 46.3164 91.0551 52.8129 91.0551C55.9632 91.0551 58.8374 89.8513 61.0002 87.88C63.1631 89.8513 66.0373 91.0551 69.1876 91.0551C75.6843 91.0551 81.0078 85.9361 81.3366 79.5196C86.1441 77.5467 89.5401 72.817 89.5401 67.307C89.5401 65.0753 88.9799 62.916 87.9336 60.9978C88.9571 59.1233 89.5397 56.9749 89.5397 54.6931ZM57.0216 78.8896C57.0216 81.2105 55.1335 83.0986 52.8126 83.0986C50.92 83.0986 49.3161 81.8427 48.7883 80.1208C51.3274 79.4984 53.6564 78.1333 55.4397 76.1644L49.5425 70.8229C48.5355 71.9349 47.1554 72.5473 45.6566 72.5473C42.7669 72.5473 40.4163 70.1964 40.4163 67.307C40.4163 67.1409 40.4242 66.976 40.4397 66.8124C42.0407 67.5043 43.8042 67.8896 45.6568 67.8896V59.9332C42.7672 59.9332 40.4165 57.5823 40.4165 54.6926C40.4163 52.8086 41.4292 51.1332 42.9495 50.2089C44.3253 52.1225 46.2497 53.6437 48.5403 54.503L51.3346 47.0534C49.7012 46.4407 48.6036 44.8559 48.6036 43.11C48.6036 40.7892 50.4918 38.901 52.8126 38.901C55.1335 38.901 57.0216 40.7892 57.0216 43.11V78.8896ZM81.5601 66.8124C81.5756 66.976 81.5834 67.1409 81.5834 67.307C81.5834 70.1967 79.2326 72.5473 76.3429 72.5473C74.8444 72.5473 73.4642 71.9349 72.4573 70.8229L66.5603 76.1644C68.3438 78.1333 70.6725 79.4987 73.2117 80.1208C72.6839 81.8429 71.0798 83.0986 69.1873 83.0986C66.8665 83.0986 64.9783 81.2105 64.9783 78.8896V43.1103C64.9783 40.7894 66.8665 38.9013 69.1873 38.9013C71.508 38.9013 73.3963 40.7894 73.3963 43.1103C73.3963 44.8562 72.2988 46.441 70.6654 47.0536L73.4597 54.5032C75.7503 53.644 77.6744 52.1225 79.0505 50.2092C80.5707 51.1334 81.5837 52.809 81.5837 54.6929C81.5837 57.5825 79.2328 59.9334 76.3432 59.9334V67.8899C78.1953 67.8899 79.9591 67.5043 81.5601 66.8124Z" fill="black"/>
            </g>
            <defs>
            <clipPath id="clip0_77_16">
            <rect width="122" height="122" fill="white"/>
            </clipPath>
            </defs>
            </svg>
          </div>
          <div className=' p-6 border-4 border-black rounded-[12px] bg-[#3262C5] flex flex-col gap-1 col-span-2 row-span-4'>
            <span className={`mt-4 ${jetbrains_mono.variable} font-title font-semibold text-[26px] text-center`}>DevOps4</span>
            {/*<span className={`mb-4 ${jomolhari.variable} font-subtitle text-center text-[18px]`}>Enabling efficient integration and deployments through experience with various technologies</span>*/}
          </div>
        </section>
      {
        /*interestCollection.map((content,index)=>(
          <section className='grid grid-cols-3 gap-4'>
          <div key={index} className=' p-6 border border-purple-600 rounded-[12px] flex flex-col gap-1 col-span-1 row-span-1'>
          <span>{content.interest}</span>
          <span>{content.caption}</span>
          </div>
          </section> 
        ))*/
      }
      </main>
    </section>
  )
}

export default AboutInterestSection