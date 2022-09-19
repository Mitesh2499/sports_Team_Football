import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const tempData = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function Loading() {
  return (
    <div className="p-4">
      <div className="grid gap-5 lg:grid-cols-5 md:grid-cols-3 sm:grid-cols-2  grid-flow-row auto-rows-max mx-5">
        {tempData.map((item) => (
          <div key={item} className="bg-slate-300 w-full">
            <Skeleton className="w-full " height={300} />
            <div className="p-4">
              <Skeleton className="w-full " height={20} />
              <Skeleton className="w-full " height={20} width={200} />
              <Skeleton className="w-full " height={20} width={100} />
              <Skeleton className="w-full " height={20} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Loading;
