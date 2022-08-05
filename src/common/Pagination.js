import React from 'react';
import { Pagination } from "@mui/material";
import { useRouter } from "next/router";

const PaginationComponent = ({page,totalPages}) => {
    const router = useRouter();
  const changeHandler = (e, page) => {
    router.query.page = page;
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
        <div className=" col-span-6 flex justify-center">
               {totalPages > 0 &&  (<Pagination
                    count={totalPages}
                    page={page}
                    onChange={changeHandler}
                    color="secondary"
                  />)}
                 
                
              </div>
    );
};

export default PaginationComponent;