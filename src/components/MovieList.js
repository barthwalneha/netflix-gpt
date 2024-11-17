import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  // Ensure movies is an array and then check for length
  const movieArray = Array.isArray(movies) ? movies : [];

  return (
    <div className="px-6">
      <h1 className="text-3xl py-4 text-white">{title}</h1>

      <div className="flex overflow-x-scroll">
        <div className="flex">
          {movieArray.length > 0 ? (
            movieArray.map((movie) => (
              <MovieCard key={movie.id} posterPath={movie.poster_path} />
            ))
          ) : (
            <p>No movies available.</p> // Display a message if no movies are available
          )}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
