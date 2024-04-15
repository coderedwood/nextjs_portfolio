'use client';
import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import NavLink from './NavLink';
import SocialLink from './SocialLink';
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/solid"
import MenuOverlay from './MenuOverlay';
import Logo from './subcomponents/Logo';

const navLinks = [
  {title: "Home",
  path: "/"
  },
  {title: "About",
  path: "/about"
  },
  {title: "Projects",
  path: "/projects"
  },
  {title: "Contact",
  path: "/contact"
  }
];
const socialLinks = [
  {title: "Twitter",
  image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/twitter/twitter-original.svg",
  path: "/"
  },
  {title: "Instagram",
  image:"/images/svg/instagram.svg",
  path: "/"
  },
  {title: "LinkedIn",
  image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/linkedin/linkedin-original.svg",
  path: "/"
  },
  {title: "Github",
  image:"https://raw.githubusercontent.com/devicons/devicon/master/icons/github/github-original.svg",
  path: "/"
  }
];


const Navbar = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className='fixed top-0 left-0 right-0 z-10 bg-transparent'>
        <div className='flex flex-wrap items-center justify-between mx-auto sm:ml-6 sm:mr-6 px-4 py-2'>
          <div className='mobile-menu block md:hidden'>
            {
              !navbarOpen ? (
                <button onClick={() => setNavbarOpen(true)} className='flex items-center px-3 py2 border rounded border-black text-black hover:text-white hover:border-white'>
                <Bars3Icon className='h-5 w-5'/>
                </button>
              ):
              (
                <button onClick={() => setNavbarOpen(false)} className="flex items-center px-3 py2 border rounded border-black text-black hover:text-white hover:border-white">
                <XMarkIcon className='h-5 w-5'/>
                </button>
              )
            }
          </div>
          <div className="menu hidden md:block md:w-auto" id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
              {
                navLinks.map((link,index)=>(
                  <li key={index}>
                  <NavLink href={link.path} title={link.title} />
                  </li>
                ))
              }
            </ul>
          </div>
          <Logo />
          <div className="menu hidden md:block md:w-auto" id='navbar'>
            <ul className='flex p-4 md:p-0 md:flex-row md:space-x-8'>
              {
                socialLinks.map((link,index)=>(
                  <li key={index}>
                  <SocialLink href={link.path} title={link.title} image={link.image} />
                  </li>
                ))
              }
            </ul>
          </div>
        </div>
        {navbarOpen?<MenuOverlay links={navLinks} sLinks={socialLinks}/>:null}
    </nav>
  )
}

export default Navbar