import Head from 'next/head'
import Postlist from '@/components/posts/PostList';
import axios from "axios";
import Sortbar from '@/components/posts/Sortbar'
import MobileCategory from '@/components/posts/MobileCategory'
import DesktopCategory from '@/components/posts/DesktopCategory'

export default function Home({blogsData , postCategories}) {
  
  return (
    <div className='bg-slate-100'>
      <div className='container mx-auto lg:max-w-screen-xl px-4 md:px-0 '>
      <div className='flex md:hidden gap-x-4 overflow-auto pb-5 '>
            <MobileCategory postCategories={postCategories}/>
           </div>
        <div className='grid gap-4 md:grid-cols-12 md:grid-rows-[60px_minmax(300px,_1fr)] min-h-screen '>
          {/*desktop category */}
          <div className=' hidden md:block md:col-span-3 md:row-span-2 '>
            <DesktopCategory  postCategories={postCategories}/>
          </div>
           {/*category mobile*/ }
           
          {/*sortbar desktop*/}
          <div className=' hidden md:block md:col-span-9'>
            <Sortbar/>
          </div>
          {/*blogs */}
          <div className='  md:col-span-9 grid grid-cols-6 gap-8 '>
            
            <Postlist blogsData={blogsData.docs}/>
            
            
          </div>
        </div>
      </div>
    </div>
  )
}


export async function getServerSideProps (context) {
  const {data : result} =  await axios.get("https://newnextback.herokuapp.com/api/posts?limit=6&page=2");
  const {data} = result;
  const {data : postCategories} = await axios.get("https://newnextback.herokuapp.com/api/post-category")
  return {
    props:{
      blogsData:data,
      postCategories : postCategories.data
    }
  }
}