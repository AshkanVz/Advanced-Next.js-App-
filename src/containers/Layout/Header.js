import { useAuth, useAuthActions } from "@/context/AuthContext";
import Link from "next/link";
import React, { useState } from "react";
import { ChevronDownIcon, LoginIcon } from "@heroicons/react/outline";
import { UserCircleIcon } from "@heroicons/react/solid";
import MyPopover from "@/containers/Layout/Popover";
import styled from "styled-components";
import { HomeIcon ,BookmarkIcon , LogoutIcon } from "@heroicons/react/outline";

const Header = () => {
  const [showModal, setShowModal] = useState(false);
  const { user, loading } = useAuth();
  console.log(user);
  const dispatch = useAuthActions();

  

  
  
   return (
    <>
      <header className="bg-white shadow-md py-2 mb-8 sticky z-10 top-0 ">
      {showModal && user ?
        <section className="" >
        <div onClick={() => setShowModal(false)} className=" top-0 absolute  right-0 w-screen h-screen cursor-pointer   bg-gray-400 bg-opacity-60   z-30" >
         
       
       </div>
      
       <div className={`bg-white  w-72 right-4 absolute  top-20 rounded opacity-100 p-6 pt-8  z-40  animate-waving-hand ${
         !showModal ? "animate-backing-hand" : "animate-waving-hand"
       } `} >
           <section>

           
             <div className="flex items-center justify-start w-full h-12 gap-x-3 ">
               <UserCircleIcon className="w-12 h-12 fill-slate-400"/>
               <div className="flex-col items-center justify-center text-gray-600">
                 <div className="font-semibold"> {user.name}</div>
                 <div>{user.phoneNumber}</div>

               </div>
               </div>
             <hr className="my-2 text-gray-400 "/>
             <li className="flex items-center justify-start gap-x-3 mb-2"><HomeIcon className="w-5 h-5 stroke-gray-600 cursor-pointer"/><span className="font-semibold text-gray-700 text-base cursor-pointer">Account</span></li>
             <li  className="flex items-center justify-start gap-x-3 mb-2"><BookmarkIcon className="w-5 h-5 stroke-gray-600 cursor-pointer"/> <span className="font-semibold text-gray-700 text-base cursor-pointer">Bookmarked Posts</span></li>
             <li onClick={() =>
dispatch({type : "SIGNOUT"})}  className="flex items-center justify-start gap-x-3"><LogoutIcon className="w-6 h-6 stroke-rose-600 cursor-pointer"/><span className="font-semibold text-rose-600 text-base cursor-pointer">Logout</span></li>
             </section>
         </div> </section> :""}
        <div
          className={`container mx-auto xl:max-w-screen-xl px-4 md:px-0 transition-all ${
            loading ? "opacity-0" : "opacity-100"
          }`}>
          <nav className="flex justify-between">
            <ul className="flex justify-center gap-x-6">
              <li className="items-center flex">
                <Link href="/">
                  <a className="py-2 block font-semibold hover:text-violet-500">
                    Home
                  </a>
                </Link>
              </li>
              <li className="items-center flex">
                <Link href="/blogs">
                  <a className="py-2 block font-semibold hover:text-violet-500">
                    Blogs
                  </a>
                </Link>
              </li>
              <li className="flex items-center  justify-center  gap-x-1">
                <Link href="/about">
                  <a className="py-2 block font-semibold hover:text-violet-500">
                    About
                  </a>
                </Link>
                {/*<ChevronDownIcon className="w-4 h-4 stroke-slate-500 mt-1" />*/}
              </li>
            </ul>
            <div className="flex justify-center  gap-x-4">
              {user ? (
                <div className="flex items-center justify-center gap-x-3" >
                  <span className={`text-sm ${showModal ? "hidden" : "block"} `}>{user.name}</span>
                  <div className="relative opacity-100 ">
                   <button className=" py-1 " onClick={() => setShowModal(true)}><UserCircleIcon className="w-10 h-10 fill-slate-400 " /></button></div>
                   
                </div>
              ) : (
                <div className="flex items-center justify-center gap-x-3">
                  <Link href="/signin">
                    <a className="py-2 block">
                      <span className="text-violet-700 font-semibold">
                        Enter
                      </span>
                    </a>
                  </Link>

                  <Link href="/signin">
                    <a className="py-2 block">
                      <LoginIcon className="stroke-violet-700 w-7 h-7" />
                    </a>
                  </Link>
                </div>
              )}
            </div>
          </nav>
        </div>
       
      </header>
     
      
    
      
    </>
  );
};

export default Header;
//<button className="bg-rose-500 rounded px-2 leading-3"
//onClick={() =>
//  dispatch({type : "SIGNOUT"})
//}>Exit</button>

//          {showModal ?
//  <div className=" absolute  flex  overflow-y-auto  inset-0 z-50 outline-none focus:outline-none">
//  <div className="absolute w-auto my-6  max-w-3xl">
//<div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
//     ashkan
//</div>
//</div>
//</div>
//: null}
