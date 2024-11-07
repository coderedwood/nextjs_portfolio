import React from 'react';
import NavLink from './NavLink';
import SocialLink from './SocialLink';

const MenuOverlay = ({ links, sLinks }) => {
  return (
    <div>
      <ul className='flex flex-col py-4'>{links.map((link, index) => (
          <li key={index}>
            <NavLink href={link.path} title={link.title}/>
          </li>
        ))}
        {sLinks.map((link, index) => (
          <li key={index}>
            <SocialLink href={link.path} title={link.title} image={link.image}/>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default MenuOverlay;