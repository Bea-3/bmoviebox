"use client";

import React, { useEffect, useState } from "react";
import Sidebar from "../../components/Sidebar/Sidebar";
import Feed from "../../components/Feed/Feed";

const Movie = ({ params }) => {
  const movid = params.movieid;
  const [movieObj, setMovieObj] = useState([]);

  const getdMovie = () => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movid}?api_key=12fbd7e7f0bd7aa61ce8ac42ebf1a20d`
    )
      .then((res) => res.json())
      .then((json) => setMovieObj(json))
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getdMovie();
  }, []);

  console.log(movieObj);

  return (
    <div className="grid grid-cols-12   w-full ">
      {/* <div className="text-black ">movie: {params.movieid}</div> */}
      {/* left Sidebar */}
      <div className="col-span-2 hidden md:flex">
        <Sidebar />
      </div>
      {/* Middle Component */}
      <div className="col-span-12 md:col-span-10">
        <Feed movie={movieObj}/>
      </div>
      {/* Trailer */}
      {/* title and info */}
      {/* director writers and stars */}
      {/* rated num and award nominations */}

      {/* right component */}
    </div>
  );
};

export default Movie;
