import Layout from "@/containers/Layout";
import Link from "next/link";
import React from "react";
import { PresentationChartBarIcon } from "@heroicons/react/outline";
import { ShieldCheckIcon } from "@heroicons/react/outline";
import { RefreshIcon } from "@heroicons/react/outline";
import { ClockIcon } from "@heroicons/react/outline";
import { UserIcon } from "@heroicons/react/outline";
const Index = () => {
  return (
    <Layout>
      <div className="flex-1 bg-slate-50 h-screen container md:max-w-screen-xl mx-auto mt-4 mb-80 md:mb-40 sm:mt-8 px-4">
        <section className="flex-col md:flex-row flex md:justify-around md:items-center">
          <div className="md:aspect-w-8 aspect-w-6 aspect-h-4 md:aspect-h-3 w-full md:w-1/2">
            <span>
              <img
                src="https://fronthooks.ir/_next/image?url=%2Fimages%2Fbanner.png&w=3840&q=75"
                alt=""
                className="w-full"
              />
            </span>
          </div>
        </section>
        <div className="flex items-center justify-center gap-x-8
         md:gap-x-20 ">
          <h2 className="font-bold text-gray-600"> you can see our blogs </h2>
          <div>
          <Link href="/blogs">
            <a className=" mx-auto py-3 px-10 bg-gradient-to-r from-violet-700 to-violet-900 rounded-xl text-white md:text-lg whitespace-nowrap">
              Blogs
            </a>
          </Link>
          </div>
          
        </div>
        <section className="mt-10 mb-28  sm:my-20 grid grid-cols-10 gap-8 container md:max-w-screen-xl mx-auto ">
          <section className="bg-white rounded-xl flex  flex-col items-center justify-center col-span-5 sm:col-span-3 md:col-span-2">
            <div className="mb-4 w-7 sm:w-10 ">
              <PresentationChartBarIcon className="w-7 h-7 stroke-violet-600"/></div>
            <p className="mb-4 font-bold text-xs sm:text-sm text-center ">
            Practical and project oriented
            </p>
            <p className="text-center text-xs px-1 mb-1 ">Lorem ipsum dolor sit amet. Non minima sint aut galisum iste non quas fugiat eos possimus asperiores ut fuga repudiandae. Eos dolorem possimus ut magni fugiat </p>
          </section>
          <section className="bg-white rounded-xl flex flex-col items-center justify-center  col-span-5 sm:col-span-3 md:col-span-2">
            <div className="mb-4 w-7 sm:w-10 ">
              <ShieldCheckIcon className="w-7 h-7 stroke-violet-600"/></div>
            <p className="mb-4 font-bold text-xs sm:text-sm text-center ">
            Short and high quality videos
            </p>
            <p className="text-center text-xs px-1 mb-1 ">Lorem ipsum dolor sit amet. Non minima sint aut galisum iste non quas fugiat eos possimus asperiores ut fuga repudiandae. Eos dolorem possimus ut magni fugiat </p>
          </section>
          <section className="bg-white rounded-xl flex flex-col items-center justify-center  col-span-5 sm:col-span-3 md:col-span-2">
            <div className="mb-4 w-7 sm:w-10 ">
              <RefreshIcon className="w-7 h-7 stroke-violet-600"/></div>
            <p className="mb-4 font-bold text-xs sm:text-sm text-center ">
            Accompanying the coach
            </p>
            <p className="text-center text-xs px-1 mb-1 ">Lorem ipsum dolor sit amet. Non minima sint aut galisum iste non quas fugiat eos possimus asperiores ut fuga repudiandae. Eos dolorem possimus ut magni fugiat </p>
          </section>
          <section className="bg-white rounded-xl flex flex-col items-center justify-center  col-span-5 sm:col-span-3 md:col-span-2">
            <div className="mb-4 w-7 sm:w-10 ">
             <ClockIcon className="w-7 h-7 stroke-violet-600"/></div>
            <p className="mb-4 font-bold text-xs sm:text-sm text-center ">
            quality guarantee
            </p>
            <p className="text-center text-xs px-1 mb-1 ">Lorem ipsum dolor sit amet. Non minima sint aut galisum iste non quas fugiat eos possimus asperiores ut fuga repudiandae. Eos dolorem possimus ut magni fugiat </p>
          </section>
          <section className="bg-white rounded-xl flex flex-col items-center justify-center  col-span-10 sm:col-span-3 md:col-span-2">
            <div className="mb-4 w-7 sm:w-10 ">
             <UserIcon className="w-7 h-7 stroke-violet-600"/> </div>
            <p className="mb-4 font-bold text-xs sm:text-sm text-center ">
            Money back guarantee
            </p>
            <p className="text-center text-xs px-1 mb-1 ">Lorem ipsum dolor sit amet. Non minima sint aut galisum iste non quas fugiat eos possimus asperiores ut fuga repudiandae. Eos dolorem possimus ut magni fugiat </p>
          </section>
         
        </section>
        
      </div>
    </Layout>
  );
};

export default Index;
