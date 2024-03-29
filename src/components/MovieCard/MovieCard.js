import Rating from "../DescriptionBox/Rating";
import Image from "next/image";
import MovieCardRating from "./MovieCardRating";
import { useEffect, useState } from "react";

const MovieCard = ({ movie }) => {
  const [genreList, setGenreList] = useState([]);
  const getGenre = () => {
    fetch(
      "https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1&api_key=12fbd7e7f0bd7aa61ce8ac42ebf1a20d"
    )
      .then((res) => res.json())
      .then((json) => setGenreList(json.genres))
      .catch((err) => console.error("errpr:" + err));
  };
  useEffect(() => {
    getGenre();
  }, []);
  console.log();
  return (
    <div
      className="flex flex-col items-center gap-3 mb-14"
      data-testid={"movie-id"}
    >
      <Image
        src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
        width={250}
        height={370}
        alt="Stangert things Poster"
        data-testid={"movie-poster"}
      />
      <div className="flex flex-col gap-3">
        <span className="text-gray-400 text-[12px] font-bold font-sans not-italic" data-testid="movie-release-date">{movie.release_date}</span>
        <span
          className="text-gray-900 text-[16px] w-[250px] font-bold font-sans not-italic"
          data-testid={"movie-title"}
        >
          {movie.original_title}
        </span>
        <MovieCardRating movie={movie} />
        <span className="text-gray-400 text-[12px] font-bold font-sans not-italic">
          <div className="text-black">{movie.genre_ids}</div>
          {/* {genreList?.map((genre) => {
            for (i in movie.genre_id) {
              console.log(i);
              if (i == genre.ids) {
                return (
                  <div className="text-black">{console.log(genre.name)}</div>
                );
              }
            }
          })} */}
        </span>
      </div>
    </div>
  );
};

export default MovieCard;
