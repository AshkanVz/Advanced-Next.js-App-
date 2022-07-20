import React from 'react';
import { AnnotationIcon, HeartIcon, BookmarkIcon, ClockIcon} from "@heroicons/react/outline"
import Link from 'next/link';
const Postlist = ({blogsData}) => {
    console.log(blogsData);
    return (
        blogsData.docs.map((blog , index) =>{
            return(
              <div key={index} className="col-span-6 md:col-span-3 lg:col-span-2 bg-white rounded-3xl p-2 flex flex-col max-h-[400px] sm:max-h-[370px]">
                {/*cover image*/}
                
                
                <div className='aspect-w-16 aspect-h-9 mb-2'>
                <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                <a>
                  <img src={blog.coverImage} alt="image" className=' rounded-2xl w-full h-full object-center object-cover'  />
                  </a>
                  </Link>
                </div>
                
                {/*blog content*/}
                <div className='bg-gray-100 rounded-2xl p-1 flex flex-col w-full justify-between flex-1'>
                   {/*header*/}
                   <Link href={`/posts/${blog.hashId}/${blog.slug}`}>
                    <a>
                     <h2 className='mb-14 font-bold mt-4 ml-2'>{blog.title}</h2>
                    </a>
                   </Link>
                
                   {/*footer*/}
               <div>
                  <div className='flex items-center justify-between  '>
                    <div className='flex items-center mb-2'>
                       <img src="/images/react.png" alt="react" className='w-6 h-6 rounded-full ring-2 ring-white mr-2'/>
                       <span className='text-sm text-gray-500'>ashkan valizadeh</span>
                    </div>
                    <span className='text-xs py-1 px-2 rounded-xl bg-blue-100 text-blue-600 hover:text-blue-100 hover:bg-blue-600 transition-all duration-300 cursor-pointer'>
                      {blog.category.englishTitle}
                    </span>
                  </div>
                  {/*interaction*/}
                   <div className='flex items-center justify-between  mt-2 mb-2 ml-2 '>
                      <div className='flex items-center justify-center gap-x-2'>
                        <button className='flex items-center  p-0.5 bg-gray-300 rounded gap-x-1'>
                        <AnnotationIcon className='w-4 h-4 mr-1 stroke-2 stroke-gray-500 '/>
                        <span className='text-gray-500  font-medium leading-3  '>{blog.commentsCount}</span>
                        </button>
                        
                        <button className='flex items-center  p-0.5 bg-red-200 rounded gap-x-1'>
                        <HeartIcon className='w-4 h-4  stroke-2 stroke-red-500 '/>
                        <span className='text-red-500  font-medium leading-3   '>{blog.likesCount}</span>
                        </button>

                        <button className='flex items-end p-0.5  bg-blue-200   rounded'>
                        <BookmarkIcon className='w-4 h-4  stroke-2 stroke-blue-500    '/>
                       
                        </button>

                        
                      </div>
                      
                      <div className='flex items-center text-[10px]  text-gray-400 font-bold '>
                        <ClockIcon className='w-4 h-4 stroke-gray-400 mr-1'/>
                        <span className='mr-1'>time of reading  : </span>
                        <span className='mr-1 leading-3'>{blog.readingTime}</span>
                        <span>m</span>
                      </div>
                   </div>
                </div>
               </div>
              </div>
            )
         })
       
    );
}

export default Postlist;
