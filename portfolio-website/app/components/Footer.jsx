import React from 'react'
import Logo from './subcomponents/Logo';
import Link from 'next/link';

const Footer = () => {
  return (
    <footer className='footer w-full border border-t-[#33353F] border-l-transparent border-r-transparent text-lg font-medium'>
        <div className='p-8 flex items-center justify-between'>
            <span><Logo/></span>
            <Link href="/" className='text-slate-600'>Dwayne Redwood</Link>
            <Link href="/" className='text-slate-600'>{new Date().getFullYear()} &copy; All rights reserved.</Link>
        </div>
    </footer>
  );
};

export default Footer;