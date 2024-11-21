import { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";
import { useDispatch, useSelector } from "react-redux";

const useMovieTrailer = (movie_id) => {
  const [trailerId, setTrailerId] = useState(null);
  const trailerVideo = useSelector((store) => store.movies.trailerVideo);

  const getMovieVideos = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movie_id}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];

    setTrailerId(trailer ? trailer.key : null);
  };

  // useEffect(() => {
  //   if (movie_id) {
  //     getMovieVideos();
  //   }
  // }, [movie_id]);
  useEffect(() => {
    !trailerVideo && getMovieVideos();
  }, []);

  return trailerId;
};

export default useMovieTrailer;
