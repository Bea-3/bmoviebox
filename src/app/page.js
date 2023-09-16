"use client";

import Description from "../components/DescriptionBox/Description"

import Title from "../components/Title/Title";
import Pagination from "../components/pagination/Pagination";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard/MovieCard";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

export default function Home() {
  const [movieList, setMovieList] = useState([]);

  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=cb5b2df2e013fd040a05e5dce84b89e1"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results.slice(0,10)))
      .catch((err) => console.error("error:" + err));
  };
  useEffect(() => {
    getMovie();
  }, []);

  console.log(movieList);
  return (
    <main className="">
      {/* HEADER */}
      <div
        className=" items-center h-[300px]  xl:h-[600px] w-full  mx-auto  border-black  bg-cover bg-no-repeat px-2"
        style={{
          backgroundImage: `url('/poster.png')`,
        }}
      >
        <Navbar />
        <div className="hidden sm:flex items-center justify-between mx-4 pt-5">
          <div className="xl:ps-14 xl:pt-14">
            <Description />
          </div>
          <Pagination />
        </div>
      </div>
      {/* FEATURED MOVIE */}
      <Title />
      <div className="grid text-black mx-14 my-3">
        <div className="grid grid-cols-4 justify-center">
          {/* {console.log(typeof movieList)} */}
          {movieList?.map((movie) => (
            <ul key={movie.id}>
              <Link href={`/${movie.id}`}>
                <MovieCard key={movie.id} movie={movie} />
              </Link>
            </ul>
          ))}
        </div>
      </div>
      {/* FOOTER */}
      <Footer />
    </main>
  );
}
