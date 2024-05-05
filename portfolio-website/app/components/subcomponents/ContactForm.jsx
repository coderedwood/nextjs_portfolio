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
    <form action='onSubmit'>
        <h4>Contact Me</h4>
        <div className=' flex-row col-span-12 form-group'>
            <input type='text' name='name' placeholder='Name' required></input>
        </div>
        <div className=' flex-row col-span-12 form-group' >
            <input type='text' name='email' placeholder='Email' required></input>
        </div>
        <div className=' flex-row col-span-12 form-group' >
            <input type='text' name='subject' placeholder='Subject'></input>
        </div>
        <div className=' flex-row col-span-12 form-group' >
            <input type='text' name='message' placeholder='Message' required></input>
        </div>
        <button className={`flex px-6 py-3 w-full sm:w-fit rounded-xl mr-4 ${jomolhari.variable} font-paragraph bg-green-900 border-[3px] border-white hover:border-green-900 hover:bg-slate-200 hover:text-green-900 text-white`} type='submit'>Send</button>
    </form>
  )
}

export default ContactForm