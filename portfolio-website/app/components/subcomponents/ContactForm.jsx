'use client'
import React from 'react'
import { Jomolhari, Montserrat, JetBrains_Mono } from 'next/font/google';

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

const ContactForm = () => {
  return (
    <form action='onSubmit' className="grid md:grid-cols-6 gap-4 md:mr-10">
      <h4 className={`col-span-full text-left ${jetbrains_mono.variable} font-subtitle text-3xl font-semibold`}>Contact Me</h4>
      <div className='flex flex-col py-2 md:col-span-3 form-group'>
          <input className=' border-b-green-900 border-b-[1px] h-10' type='text' name='name' placeholder='Name' required />
      </div>
      <div className='flex flex-col md:pl-2 md:pr-2 py-2 md:col-span-3 form-group'>
          <input className=' border-b-green-900 border-b-[1px] h-10' type='text' name='email' placeholder='Email' required />
      </div>
      <div className='flex flex-col md:pr-2 py-2 md:col-span-full form-group'>
          <input className=' border-b-green-900 border-b-[1px] h-10' type='text' name='subject' placeholder='Subject' />
      </div>
      <div className='flex flex-col md:pr-2 py-2 md:col-span-full form-group'>
          <input className=' border-b-green-900 border-b-[1px] h-[200px]' type='text' name='message' placeholder='Message' required />
      </div>

      <button className={`flex m-auto px-8 py-2 rounded-xl ${jomolhari.variable} font-paragraph bg-green-900 border-[3px] border-white hover:border-green-900 hover:bg-slate-200 hover:text-green-900 text-white`} type='submit'>Send</button>
    </form>
  )
}

export default ContactForm