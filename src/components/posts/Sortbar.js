import React, { useState } from "react";
import { AdjustmentsIcon } from "@heroicons/react/outline";
import { useRouter } from "next/router";

const sortOption = [
  { label: "most visited", id: "most" },
  { label: "most popular", id: "popular" },
  { label: "newest", id: "newest" },
];
const Sortbar = () => {
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
    <div className="bg-white rounded-3xl px-4 flex items-center ">
      <div className="flex items-center gap-x-2 mr-8 ">
        <AdjustmentsIcon className="h-6 w-6 stroke-gray-600" />
        <span className="font- text-gray-700">ordering : </span>
      </div>
      <ul className="flex items-center gap-x-4">
        {sortOption.map(({ id, label }) => {
          return (
            <>
              <li
                className={`cursor-pointer text-gray-700 relative py-4 ${
                  id === sort ? "text-purple-700 font-bold" : ""
                }`}
                onClick={() => sortHandler(id)}>
                {label}
                {id === sort && (
                  <span className="h-[3px] rounded w-8 bg-purple-700 absolute bottom-[6px] left-0"></span>
                )}
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
};

export default Sortbar;
