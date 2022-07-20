import React from 'react';
import {AdjustmentsIcon} from "@heroicons/react/outline"
const Sortbar = () => {
    return (
        <div className='bg-white rounded-3xl px-4 flex items-center '>
              <div className='flex items-center gap-x-2 mr-8 '>
                <AdjustmentsIcon className='h-6 w-6 stroke-gray-600'/>
                <span className='font- text-gray-700'>ordering : </span>
              </div>
                <ul className='flex items-center gap-x-4'>
                  <li className='cursor-pointer py-4'>most visited</li>
                  <li className='cursor-pointer py-4'>most popular</li>
                  <li className='cursor-pointer py-4'>newest</li>
                </ul>
              
            </div>
    );
};

export default Sortbar;