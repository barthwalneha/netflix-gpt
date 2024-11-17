import React, { useState, useEffect } from "react";
import { API_OPTIONS } from "../utils/constant";

const VideoBackground = ({ movie_id }) => {
  const [trailerId, setTrailerId] = useState(null);
  const getMovieVideos = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/912649/videos?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    console.log(json);
    const filterData = json.results.filter((video) => video.type === "Trailer");

    const trailer = filterData.length ? filterData[0] : json.results[0];
    console.log(trailer);
    setTrailerId(trailer.key);
  };
  useEffect(() => {
    getMovieVideos();
  }, []);

  return (
    <div>
      <iframe
        src={"https://www.youtube.com/embed/" + trailerId}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
