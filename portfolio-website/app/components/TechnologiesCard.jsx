import React from 'react';
import Image from 'next/image';
// import { CodeBracketIcon, EyeIcon } from '@heroicons/react/24/outline';
// import Link from 'next/link';

const TechnologiesCard = ({imageUrl, title}) => {
  return (
    <div className='bg-white rounded-md shadow-lg border p-3 m-4 text-center w-[165px] h-[172px] relative'>
            <div className='absolute transform top-[55%] left-1/2 -translate-x-1/2 -translate-y-1/2'>
              <Image
                  src={imageUrl}
                  alt={`${title} logo`}
                  width={60}
                  height={60}
              />
            </div>
            <div className='mt-3 py-1'>
                <p className='font-bold text-slate-500'>{title}</p>
            </div>
    </div>
  );
};

export default TechnologiesCard;