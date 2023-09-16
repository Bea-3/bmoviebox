import React from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const movie = ({ params }) => {
  return (
    <div className="grid grid-cols-12   w-full ">
      {/* <div className="text-black ">movie: {params.movieid}</div> */}
      {/* left Sidebar */}
      <div className="col-span-2 hidden md:flex">
        <Sidebar />
      </div>
      {/* Middle Component */}
      <div className="col-span-12 md:col-span-10">
        <Feed />
      </div>
      {/* Trailer */}
      {/* title and info */}
      {/* director writers and stars */}
      {/* rated num and award nominations */}

      {/* right component */}
    </div>
  );
};

export default movie;
