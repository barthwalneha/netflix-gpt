import React from "react";
import { useSelector } from "react-redux";
// import MovieList from "../components/MovieList";
import MovieCard from "./MovieCard";

const GptMovieSuggestion = () => {
  const { movieResult, movieNames } = useSelector(
    (store) => store.gpt.gptMovies
  );
  if (!movieNames || !movieResult) return null;

  const getFirstMovie = (movies) => {
    return movies.slice(0, 1)[0];
  };
  return (
    <div className="p-4 m-4 bg-black text-white">
      <div className="grid grid-cols-5 gap-4">
        {movieNames.map((movieName, index) => {
          const movie = getFirstMovie(movieResult[index]);
          return movieResult[index].length > 0 ? (
            <div className="bg-opacity-70">
              <div className="my-6 mx-3 text-2xl"> {movieName}</div>
              <MovieCard
                className="bg-opacity-70"
                key={movie.id}
                posterPath={movie.poster_path}
              />
            </div>
          ) : null;
        })}
      </div>
    </div>
  );
};

export default GptMovieSuggestion;
