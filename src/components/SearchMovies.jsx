import React, { useRef, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS, BG_IMAGE_URL, IMG_URL } from "../utils/constants";
import { IoSearch } from "react-icons/io5";
import { GiCrossedBones } from "react-icons/gi";
import axios from "axios";
import {
  searchResultMovie,
  resetSearchMovies,
} from "../utils/searchMovieSlice";
import { Footer } from "./Footer";
import lang from "../utils/langConstants";

export const SearchMovies = () => {
  const dispatch = useDispatch();
  const text = useRef();
  const data = useSelector((store) => store.searchMovies.searchResultMovies);
   const language = useSelector(store => store.language?.languageState);

  const [loading, setLoading] = useState(false);
  const [searchClicked, setSearchClicked] = useState(false);

  const handleSearchClick = async () => {
    if (!text.current.value) return;
    setLoading(true);

    //Making tmdb search api call
    try {
      const searchMovies = await axios.get(
        "https://api.themoviedb.org/3/search/movie?query=" +
          text.current.value +
          "&include_adult=false&page=1",
        API_OPTIONS
      );
      dispatch(searchResultMovie(searchMovies.data.results));
      setLoading(false);
      setSearchClicked(true);
      text.current.value = "";
    } catch (error) {
      console.log(error);
    }
  };

     const handleEnterClick = (e)=>{
    if(e.key === 'Enter'){
      handleSearchClick();
    }
  }

  return (
    <>
      <div className="bg-black">
        <div>
          <img
            src={BG_IMAGE_URL}
            alt="hero-image"
            className="w-full h-screen object-cover brightness-30"
          />
        </div>

        <GiCrossedBones
          className="absolute top-5 right-10 sm:top-10 sm:right-20 text-4xl p-2 text-amber-600 z-20 cursor-pointer rounded-full hover:bg-amber-900 hover:text-amber-50 hover:scale-105 active:scale-110 "
          onClick={() => dispatch(resetSearchMovies())}
        />

        {/* search container */}
        <div className="absolute top-1 text-white w-screen p-4 flex justify-center flex-col items-center">
          <h1 className="text-center pt-20 text-4xl sm:pt-10 sm:text-3xl font-bold mb-4 text-amber-600">
            Welcome! dude
          </h1>
          <p className="text-sm text-gray-300 w-[50%] sm:w-[35%] text-center mb-10">
            {lang[language].searchDescription}
          </p>

          <div className="flex flex-col items-center sm:flex-row">
            <div className="flex items-center">
              <IoSearch className="text-amber-600 relative left-9 sm:left-16" />
              <input
                type="text"
                placeholder={lang[language].inputPlaceHolder}
                onKeyDown={handleEnterClick}
                className="p-2 px-4 pl-9 m-4 border border-amber-600 rounded-md w-[95%] sm:w-md ml-2 sm:ml-10 outline-none hover:border-amber-800 focus:border-amber-800"
                ref={text}
              />
            </div>
            <button
              className="p-2 bg-amber-700 rounded-xl px-8 cursor-pointer hover:bg-amber-800 active:bg-amber-800"
              onClick={handleSearchClick}
            >
              {lang[language].searchButton}
            </button>
          </div>
        </div>

        {/* Search Suggestions */}
        {loading ? (
          <p className="text-gray-500 text-xl absolute top-[65%] sm:top-[50%] left-[40%] sm:left-[45%]">
            Loading...
          </p>
        ) : searchClicked && data.filter((e) => e.poster_path).length === 0 ? (
          <p className="text-gray-500 text-xl absolute top-[65%] sm:top-[50%] left-[35%] sm:left-[45%]">
            Not Found
          </p>
        ) : searchClicked && data.filter((e) => e.poster_path).length > 0 ? (
          <div className="z-20 max-w-screen relative -top-65 p-4 sm:-top-100 md:-top-80">
            <h2
              className="text-white
         text-xl font-bold px-6 mb-2 sm:px-10 md:px-26"
            >
              {lang[language].results} (
              <span>{data.filter((e) => e.poster_path).length}</span>) -{" "}
              <span className="text-2xl text-amber-700">
                {data[0]?.original_title || data[0]?.title}
              </span>
            </h2>
            <div className="flex flex-wrap justify-start items-center px-4 gap-x-4 sm:gap-x-6 sm:px-6 md:px-26 gap-y-8 p-4 max-w-full">
              {data
                ?.filter((e) => e.poster_path)
                .map((item) => {
                  return (
                    <div key={item.id} className="shrink-0">
                      <img
                        src={IMG_URL + item.poster_path}
                        alt="posters"
                        className="w-40 h-55 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                      />
                    </div>
                  );
                })}
            </div>
          </div>
        ) : null}

        <Footer />
      </div>
    </>
  );
};
