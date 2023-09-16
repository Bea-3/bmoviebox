import Image from "next/image";

const Feed = ({ movie }) => {
  console.log(movie.poster_path);

  return (
    <div className=" text-black w-full  flex-grow p-6">
     
     <div
        className={` mt-9 w-full h-[449px] border rounded-3xl bg-[]  bg-cover bg-center bg-no-repeat  flex items-center justify-center `}
        style={{
          backgroundImage: `url(https://image.tmdb.org/t/p/w500${movie.backdrop_path})`,
        }}
      >
        <div className=" flex flex-col items-center ">
          <Image
            src={"/play.png"}
            width={54}
            height={54}
            alt={"play"}
            className="relative  top-[90px]  z-1 items-center"
          />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="120"
            height="120"
            viewBox="0 0 120 120"
            fill="none"
          >
            <g filter="url(#filter0_bd_1320_711)">
              <circle
                cx="60"
                cy="58"
                r="55"
                fill="white"
                fill-opacity="0.35"
                shape-rendering="crispEdges"
              />
              <circle
                cx="60"
                cy="58"
                r="55"
                stroke="#E8E8E8"
                stroke-opacity="0.2"
                stroke-width="2"
                shape-rendering="crispEdges"
              />
            </g>
            <defs>
              <filter
                id="filter0_bd_1320_711"
                x="0"
                y="-2"
                width="120"
                height="122"
                filterUnits="userSpaceOnUse"
                color-interpolation-filters="sRGB"
              >
                <feFlood flood-opacity="0" result="BackgroundImageFix" />
                <feGaussianBlur in="BackgroundImageFix" stdDeviation="2" />
                <feComposite
                  in2="SourceAlpha"
                  operator="in"
                  result="effect1_backgroundBlur_1320_711"
                />
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
                  in2="effect1_backgroundBlur_1320_711"
                  result="effect2_dropShadow_1320_711"
                />
                <feBlend
                  mode="normal"
                  in="SourceGraphic"
                  in2="effect2_dropShadow_1320_711"
                  result="shape"
                />
              </filter>
            </defs>
          </svg>
          <span className="text-[#E8E8E8] text-2xl font-medium shadow[0px 2px 4px rgba(0, 0, 0, 0.25)]">
            Watch Trailer
          </span>
        </div>
      </div>

      <div className="grid grid-cols-12 py-5">
        <div className="col-span-9">
          <div className="p-5">
            <div className="flex flex-col max-w-[774px]  ">
              <div className="flex">
                <span className="font-bold" data-testid="movie-title">{movie.original_title}</span>
                <span className="" data-testid="movie-release-date">{movie.release_date}</span>
                <span className="" data-testid="movie-runtime">{movie.runtime}</span>
                <span className="">{movie.genre_ids}</span>
              </div>
              <div className="mt-5" data-testid="movie-overview">{movie.overview}</div>
            </div>
            <div className="flex flex-col justify-between gap-7">
              <div className="">
                <span className="font-normal text-[20px] text-[#333333]">
                  Director :{" "}
                </span>
                <span className="text-[#BE123C] font-sans font-bold text-[20px]">
                  Joseph Kosinski
                </span>
              </div>
              <div className="">
                <span className="font-normal text-[20px] text-[#333333]">
                  Writers :{" "}
                </span>
                <span className="text-[#BE123C] font-sans font-bold text-[20px]">
                  Jim Cash, Jack Epps Jr, Peter Craig
                </span>
              </div>
              <div className="">
                <span className="font-normal text-[20px] text-[#333333]">
                  Stars :{" "}
                </span>
                <span className="text-[#BE123C] font-sans font-bold text-[20px]">
                  Tom Cruise, Jennifer Connelly, Miles TellerJoseph Kosinski
                </span>
              </div>
              <div className="flex w-full">
                <button
                  className="bg-[#BE123C] rounded-[10px] h-14 w-[253px] text-white"
                  type="button"
                >
                  Top rated movie #65
                </button>
                <div className="flex border-black border-y-2 border-r-2 rounded-[10px] h-14 w-full text-white justify-between ">
                  <span className="text-black items-center h-full flex ms-8">
                    Awards 9 nominations
                  </span>
                  <Image
                    src={"/ExpandArrow.png"}
                    width={54}
                    height={54}
                    alt={"play"}
                    className="p-3"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-span-3 px-4">
          <div className="flex justify-end w-full items-center">
            <Image
              src={"/Star.png"}
              width={54}
              height={54}
              alt={"play"}
              className="p-4"
            />
            <div className="text-[20px] text-[#666]">
              {" "}
              <span className="text-[#E8E8E8] text-[25px]">8.5 </span>| 350k
            </div>
          </div>
          <button
            className="bg-[#BE123C] flex items-center justify-center rounded-[10px] h-14 w-full text-white"
            type="button"
          >
            <Image
              src={"/TwoTickets.png"}
              width={54}
              height={54}
              alt={"play"}
              className="p-3"
            />
            See Showtimes
          </button>
          <button
            className="bg-[#BE123C1A] border-[#BE123C] border-2 text-black my-3 flex items-center justify-center rounded-[10px] h-14 w-full "
            type="button"
          >
            <Image
              src={"/List.png"}
              width={54}
              height={54}
              alt={"play"}
              className="p-3"
            />
            See Showtimes
          </button>
          <div className="">
            <Image
              src={"/MorePics.png"}
              width={760}
              height={428}
              alt={"play"}
              className=" w-full h-[229px]"
            />
            <div className="relative bottom-8  h-[30px] w-full flex items-center justify-center bg-[#12121280] rounded-[10px] ">
              <Image
                src={"/List.png"}
                width={54}
                height={54}
                alt={"play"}
                className="p-4"
              />
              <span className="text-[12px] text-white">
                The Best Movies and Shows in September
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Feed;
