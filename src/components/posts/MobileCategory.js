import React from 'react';
import Link from 'next/link'
import { useRouter } from 'next/router';
const MobileCategory = ({postCategories}) => {
    const {query} = useRouter();
    return (
        <>
        <Link href={"/blogs"}>
                <a className={`block border border-gray-500 bg-slate-50 rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap ${!query.categorySlug ? "bg-purple-100 text-purple-500 border-purple-500" : ""}`}>
                  All of articles
                </a>
              </Link>
        {postCategories.map((category) => {
            return(
                
                
            <Link href={`/blogs/${category.title}`} key={category._id}>
            <a className={`block border border-gray-500 bg-slate-50 rounded-3xl px-3 py-1 text-gray-500 whitespace-nowrap ${query.categorySlug === category.title ? "bg-purple-100 text-purple-500 border-purple-500" : ""}`}>{category.title}</a>
            </Link>
            )
          })}
          </>
    );
};

export default MobileCategory;