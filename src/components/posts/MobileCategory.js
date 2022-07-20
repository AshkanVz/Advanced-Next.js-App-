import React from 'react';
import Link from 'next/link'
const MobileCategory = ({postCategories}) => {
    return (
        <>
        {postCategories.map((category) => {
            return(
            <Link href={`/blogs/${category.title}`} key={category._id}>
            <a className='block border border-gray-500 bg-slate-50 rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap'>{category.title}</a>
            </Link>)
          })}
          </>
    );
};

export default MobileCategory;