import React from "react";
import Logo from "../Navbar/Logo/Logo";
import Image from "next/image";

const Sidebar = () => {
  return (
    <div className="flex flex-col items-center h-full  Justify-center border rounded-tr-[45px] rounded-br-[45px] flex-grow flex-shrink  ">
      <div className="item-center p-5 max-w-full">
        <Logo color={"black"} />
      </div>
      <div className="flex flex-col justify-between  my-6">
        <div className="h-[86px] w-[226px] items-center justify-center flex">
          <div className="flex ms-9 justify-start gap-6 mx-auto ">
            <Image
              src={"/Home.png"}
              height={25}
              width={25}
              alt="Home_icon"
              className=""
            />

            <span className="text-[#666] text-[18px]  font-semibold font-serif">
              Home
            </span>
          </div>
        </div>
        <div className="h-[86px] w-[226px] bg-red-100 items-center justify-center flex">
          <div className="flex ms-9  justify-start gap-6 mx-auto ">
            <Image
              src={"/MovieProjector.png"}
              height={25}
              width={25}
              alt="Camera_icon"
              className=""
            />

            <span className="text-[#8f0e0e1a] text-[18px]  font-semibold font-serif">
              Movies
            </span>
          </div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="96"
            viewBox="0 0 16 96"
            fill="none"
          >
            <g filter="url(#filter0_d_1320_687)">
              <path d="M7.5 3L7.00299 89" stroke="#BE123C" stroke-width="6" />
            </g>
            <defs>
              <filter
                id="filter0_d_1320_687"
                x="0.00305176"
                y="0.982452"
                width="14.4969"
                height="94.0351"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feColorMatrix
                  in="SourceAlpha"
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                  result="hardAlpha"
                />
                <feOffset dy="2" />
                <feGaussianBlur stdDeviation="2" />
                <feComposite in2="hardAlpha" operator="out" />
                <feColorMatrix
                  type="matrix"
                  values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
                />
                <feBlend
                  mode="normal"
                  in2="BackgroundImageFix"
                  result="effect1_dropShadow_1320_687"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect1_dropShadow_1320_687"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
        </div>
        <div className="h-[86px] w-[226px] items-center justify-center flex">
          <div className="flex ms-9 justify-start gap-6 mx-auto ">
            <Image
              src={"/TVShow.png"}
              height={25}
              width={25}
              alt="TV_icon "
              className=""
            />

            <span className="text-[#666] text-[18px]  font-semibold font-serif">
              TV Series
            </span>
          </div>
        </div>
        <div className="h-[86px] w-[226px] items-center justify-center flex">
          <div className="flex ms-9 justify-start gap-6 mx-auto ">
            <Image
              src={"/Calendar.png"}
              height={25}
              width={25}
              alt="callendar_icon"
              className=""
            />
            <span className="text-[#666] text-[18px]  font-semibold font-serif">
              Upcoming
            </span>
          </div>
        </div>
      </div>
      {/* Start playing */}
      <div className="flex flex-col justify-between items-center w-[170px] h-[210px] flex-shrink-0 p-3   border border-[#BE123CB2] rounded-[20px] bg-[#F8E7EB66]">
        <div className="mt-9 font-mono font-semibold not-italic text-[#333333CC] text-sm">
          Play movie quizes and earn free tickets
        </div>
        <div className="font-mono font-medium not-italic text-[#666666] text-xs">
          Play movie quizes and earn free tickets
        </div>
        <span className="w-[112px] h-[30px] shrink-0 border rounded-3xl bg-[#BE123C33] items-center justify-center flex text-xs text-[#BE123CB2]">
          Start Playing
        </span>
      </div>
      {/*  */}

      <div className="h-[86px] w-[226px] items-center justify-center flex">
        <div className="flex ms-9 justify-start gap-6 mx-auto ">
          <Image
            src={"/Logout.png"}
            height={25}
            width={25}
            alt="exit_icon"
            className=""
          />

          <span className="text-[#666] text-[18px]  font-semibold font-serif">
            Log out
          </span>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;