import Image from "next/image";
import React from "react";
import Rating from "./Rating";

const Description = () => {
  return (
    <div className="inline-flex flex-col items-start gap-4">
      <div className="w-[404px] text-[3.2vw]  font-Sans font-bold leading-[56px]">
        {" "}
        John Wick 3: Parabellum{" "}
      </div>
      <div className="">
        <Rating />{" "}
      </div>
      <div className="w-[404px] text-[14px]  font-Sans font-medium leading-[18px]">
        {" "}
        John Wick is on the run after killing a member of the international
        assassins&apos guild, and with a $14 million price tag on his head, he
        is the target of hit men and women everywhere.
      </div>
      <button className="flex px-[6px] py-[16px] items-center gap-2 bg-rose-700 w-[169px] h-9">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          viewBox="0 0 20 20"
          fill="none"
        >
          <path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M10 18C14.4183 18 18 14.4183 18 10C18 5.58172 14.4183 2 10 2C5.58172 2 2 5.58172 2 10C2 14.4183 5.58172 18 10 18ZM9.5547 7.16795C9.24784 6.96338 8.8533 6.94431 8.52814 7.11833C8.20298 7.29235 8 7.63121 8 8V12C8 12.3688 8.20298 12.7077 8.52814 12.8817C8.8533 13.0557 9.24784 13.0366 9.5547 12.8321L12.5547 10.8321C12.8329 10.6466 13 10.3344 13 10C13 9.66565 12.8329 9.35342 12.5547 9.16795L9.5547 7.16795Z"
            fill="white"
          />
        </svg>
        <div className="uppercase font-bold leading-6 text-sm not-italic">
          {" "}
          WATCH TRAILER
        </div>
      </button>
    </div>
  );
};

export default Description;
