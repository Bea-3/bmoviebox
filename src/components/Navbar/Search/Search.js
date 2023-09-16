import React from "react";

const Search = () => {
  return (
    <div className="hidden md:flex items-center justify-between w-[525px] py-[6px] px-[10px] border-[2px] rounded-md border-gray-300 ">
      <input
        type="text"
        name="search"
        placeholder="What do you want to watch? "
        className=" font-sans text-base text-white bg-transparent font-normal w-full  md:flex "
      />

      <button
        type="submit"
        class=" focus:outline-none focus:shadow-outline flex-shrink-0  "
      >
        <svg
          fill="none"
          stroke="currentColor"
          stroke-linecap="round"
          stroke-linejoin="round"
          stroke-width="2"
          viewBox="0 0 24 24"
          class="w-6 h-6"
        >
          <path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path>
        </svg>
      </button>
    </div>
  );
};

export default Search;
