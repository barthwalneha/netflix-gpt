import React from "react";
import GptMovieSuggestion from "./GptMovieSuggestion";
import GptSearchBar from "./GptSearchBar";
import { BG_URL } from "../utils/constant";

const GptSearch = () => {
  return (
    <div>
      <div className="absolute -z-10">
        <img src={BG_URL} alt="bgimage" />
      </div>

      <GptSearchBar />
      <GptMovieSuggestion />
    </div>
  );
};

export default GptSearch;
