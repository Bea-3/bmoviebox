import React from "react";

const Pagination = () => {
  return (
    <div className="w-9 h-[110px]">
      <div className="flex items-center gap-1">
        <div className="w-[20px] h-[3px] shrink-0 bg-white rounded-md"></div>
        <div className="inline-flex flex-col items-center gap-[10px]">
          <span className="font-sans not-italic font-bold text-xs leading-[14px] text-gray-400">
            1
          </span>
          <span className="font-sans not-italic font-bold text-xs leading-[14px] text-gray-400">
            2
          </span>
          <span className="font-sans not-italic font-bold text-xs leading-[14px] text-gray-400">
            3
          </span>
          <span className="font-sans not-italic font-bold text-xs leading-[14px] text-gray-400">
            4
          </span>
          <span className="font-sans not-italic font-bold text-xs leading-[14px] text-gray-400">
            5
          </span>
        </div>
      </div>
    </div>
  );
};

export default Pagination;
