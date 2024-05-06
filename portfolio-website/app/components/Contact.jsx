import React from 'react'
import { Jomolhari, Montserrat, JetBrains_Mono } from 'next/font/google';
import ContactForm from './subcomponents/ContactForm';

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
const jetbrains_mono = JetBrains_Mono({
  variable: '--font-jetbrains_mono',
  subsets:['latin'],
  weight:['800','700','600']
});

const contactInfo = [
  {
    Name: "Dwayne Redwood",
    Location: "Old Harbour, St. Catherine.",
    Email: "dwayneredwood@live.com"
  }
]

const Contact = () => {
  return (
    <section className='text-black' id='contact'>
    <div className='text-center py-4 mt-16'>
      <h1 className='mb-4 text-4xl lg:text-5xl xl:text-[80px] font-extrabold'>
        <span className={`text-black ${montserrat.variable} font-title`}>CONTACT</span>
      </h1>
    </div>
    <div className='text-center justify-center py-4 mt-16 flex flex-row col-span-12 gap-2'>
      <div className="w-1/2"> {/* This container will take half the screen */}
        <ContactForm />
      </div>
      <div id='contactInfo' className='text-left'>
        <h4 className={`col-span-full ${jetbrains_mono.variable} font-subtitle font-semibold text-3xl`}>Contact Information</h4>
        <p className={`mt-4 ${jomolhari.variable} font-paragraph`}>Message me for more information. Let's work together!</p>
        <ul>
          {contactInfo.map((content, index) => (
            <li key={index}>
              <ul>
                {Object.entries(content).map(([key, value]) => (
                  <li key={key}>
                    <strong>{key}: </strong> {value}
                  </li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </div>
    </div>
  </section>
  )
}

export default Contact