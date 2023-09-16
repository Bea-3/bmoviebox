import Image from "next/image";
import React from "react";

const Rating = () => {
  return (
    <div className="flex w-[184px] h-[17px] justify-between ">
      <div className="inline-flex items-center gap-[10px]">
        <Image
          src="/4519120_imdb_icon.png"
          width={35}
          height={17}
          alt="imdb"
        />
        <div className="font-normal leading-3 text-xs text-white font-sans">
          86.0 / 100
        </div>
      </div>

      <div className="inline-flex items-center gap-[10px]">
        <Image
          src="/104338_tomato_icon.png"
          width={16}
          height={17}
          alt="r-tomato"
        />
        <div className="font-normal leading-3 text-xs text-white font-sans">
          97%
        </div>
      </div>
    </div>
  );
};

export default Rating;
