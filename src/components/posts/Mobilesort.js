import Link from "next/link";
import React, { useState } from "react";
import { SortDescendingIcon } from "@heroicons/react/outline";
import { FilterIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";
const sortOption = [
  { label: "most visited", id: "most" },
  { label: "most popular", id: "popular" },
  { label: "newest", id: "newest" },
];

const Mobilesort = () => {
  const [show, setShow] = useState(false);

  const router = useRouter();
  const [sort, setSort] = useState(router.query.sort || "newest");

  const sortHandler = (id) => {
    setSort(id);
    router.query.sort = id;
    router.push(
      {
        pathname: router.pathname,
        query: router.query,
      },
      undefined,
      { scroll: false }
    );
  };

  return (
    <>
      {show ? (
        <div className="bottom-sheet md:hidden">
          <div
            className="fixed left-0 w-full h-full top-0 bg-slate-200 opacity-80 z-20"
            onClick={() => setShow(false)}></div>
          <div className="fixed bottom-0 left-0 right-0 bg-white z-40 border rounded-t-3xl shadow-2xl opacity-100 max-w-full w-full  duration-500 animate-backing">
            <div className="p-4">
              <div className="flex items-center justify-center mb-4">
                <h3 className="flex-1 text-center font-bold text-lg">
                  filters
                </h3>
              </div>
              <div>
                <ul className="flex flex-col items-center gap-x-4 text-gray-500">
                  {sortOption.map(({ id, label }) => {
                    return (
                      <>
                        <li
                          className={`w-full mb-2 rounded overflow-hidden text-center ${
                            id === sort ? "text-purple-700 font-bold" : ""
                          }`}
                          onClick={() => {sortHandler(id) , setShow(false)}} >
                          {label}
                        </li>
                      </>
                    );
                  })}
                </ul>
              </div>
            </div>
          </div>
        </div>
      ) : (
        ""
      )}

      <div className="grid grid-cols-2 w-full gap-3 mx-2 ">
        <button
          className="flex border col-span-1 border-gray-600 hover:border-violet-600 bg-slate-50 rounded-2xl px-3 py-2 text-gray-500 whitespace-nowrap  items-center justify-center gap-x-8 "
          onClick={() => setShow(true)}>
          <span className="font-semibold text-lg text-violet-600 ">sort</span>
          <SortDescendingIcon className="w-6 h-6 mt-1 stroke-violet-500" />
        </button>
        <button
          className="flex border col-span-1 border-gray-600 hover:border-violet-600 bg-slate-50 rounded-2xl px-3 py-2 text-gray-500 whitespace-nowrap items-center justify-center gap-x-8"
          onClick={() => setShow(true)}>
          <span className="font-semibold text-lg text-violet-600 ">filter</span>
          <FilterIcon className="w-6 h-6 mt-1 stroke-violet-500" />
        </button>
      </div>
    </>
  );
};

export default Mobilesort;
