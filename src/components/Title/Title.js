import React from "react";

const Title = () => {
  return (
    <div className=" ">
      <div className="flex mx-14 my-12 justify-between">
        <div className="text-3xl font-bold font-sans text-black">
          Top Rated
        </div>
        <div className="flex items-center ">
          <a href="*" className="text-rose-700">
            see more
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="21"
            viewBox="0 0 20 21"
            fill="none"
          >
            <path
              d="M7.5 4.66668L13.3333 10.5L7.5 16.3333"
              stroke="#B91C1C"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Title;
