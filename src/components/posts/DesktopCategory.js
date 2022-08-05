import React from "react";
import { useState } from "react";
import { ChevronDownIcon } from "@heroicons/react/outline";
import Link from "next/link";
import { useRouter } from "next/router";
const DesktopCategory = ({ postCategories }) => {
  
  const [isOpen, setIsOpen] = useState(true);
  const {query} = useRouter();
  console.log(query);
  return (
    <div>
      <div className="bg-white rounded-3xl overflow-hidden sticky top-24">
        {/*accordion header*/}
        <div
          className="flex items-center justify-between py-6 px-4 cursor-pointer  bg-purple-100 "
          onClick={() => setIsOpen(!isOpen)}>
          <span className="font-sm text-lg ">Categories of articles</span>
          <ChevronDownIcon
            className={`h-6 w-6 stroke-slate-600 transition-all duration-200 ${
              isOpen ? "rotate-180" : "rotate-0"
            }`}
          />
        </div>
        {/*accordion content*/}
        <div className={`flex flex-col ${isOpen ? "block" : "hidden"}  `}>
          <Link href={"/blogs"}>
            <a className={`py-2 pl-4  text-black hover:bg-blue-50 hover:text-blue-500 mt-6 mb-1 ${!query.categorySlug ? "bg-purple-700 text-white" : ""}`}>
              All of articles
            </a>
          </Link>
          {postCategories.map((category) => {
            return (
              <Link href={`/blogs/${category.title}`} key={category._id}>
                <a className={`py-2 pl-4 hover:bg-blue-50 hover:text-blue-500  mb-1 ${query.categorySlug === category.title ? "bg-purple-700 text-white transition-all" : ""}`}>
                  {category.title}
                </a>
              </Link>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DesktopCategory;
