import React from 'react';
import Image from 'next/image';
// import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';

const TechnologiesCard = ({imageUrl, title}) => {
  return (
    <div className='bg-white rounded shadow-md'>
        <div className='mt-3'>
            <Image
                src={imageUrl}
                alt='linux logo'
                width={60}
                height={60}
            />
        </div>
        <div className='mb-3'>
            <span className='font-bold text-slate-500'>{title}</span>
        </div>
    </div>
  );
};

export default TechnologiesCard;