import Image from "next/image";
import React from "react";

const MovieCardRating = ({ movie }) => {
  return (
    <div className="flex w-[184px] h-[17px] justify-between  ">
      <div className="inline-flex items-center gap-[10px]">
        <Image
          src={"/MV5BMTk3ODA4Mjc0NF5BMl5BcG5nXkFtZTgwNDc1MzQ2OTE@ 1.png"}
          width={35}
          height={17}
          alt="imdb"
        />
        <div className=" leading-3 font-bold text-xs text-black font-sans">
          {movie.vote_average}
        </div>
      </div>

      <div className="inline-flex items-center gap-[10px]">
        <Image
          src={"/PngItem_1381056 1.png"}
          width={16}
          height={17}
          alt="r-tomato"
        />
        <div className="font-bold leading-3 text-xs text-gray-500 font-sans">
          unk
        </div>
      </div>
    </div>
  );
};

export default MovieCardRating;
