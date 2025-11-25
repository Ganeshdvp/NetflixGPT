import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";

export const SecondContainer = () => {
  const data = useSelector((store) => store);

  return (
    <>
      <div className="bg-black max-w-screen">
        {/* Now playing */}
        <div className="z-20 max-w-screen h-full relative -top-50 mb-8">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            Now Playing
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 max-w-full overflow-hidden">
            {data?.nowPlaying?.nowPlayingMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-50 h-65 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Popular */}
        <div className="z-20 max-w-screen h-full relative -top-50 mb-8">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            Popular
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 max-w-full overflow-hidden">
            {data?.nowPlaying?.popularMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-50 h-65 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Top rated */}
        <div className="z-20 max-w-screen h-full relative -top-50 mb-8">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            Top Rated
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 max-w-full overflow-hidden">
            {data?.nowPlaying?.topRatedMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-50 h-65 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Up coming */}
        <div className="z-20 max-w-screen h-full relative -top-50 mb-8">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            Up Coming
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 max-w-full overflow-hidden">
            {data?.nowPlaying?.upComingMoviesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-50 h-65 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>

         {/* Arriving Today */}
        <div className="z-20 max-w-screen h-full relative -top-50 mb-8">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
           TV series <span className="text-[10px] text-white relative -top-0.5 font-light font-sans border-2 border-amber-800 rounded-2xl p-1 px-2">Arriving today</span>
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 max-w-full overflow-hidden">
            {data?.tvSeries?.arrivingTvSeriesState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-50 h-65 object-cover rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>

        {/* Trending TV */}
        <div className="z-20 max-w-screen h-full relative -top-50 mb-8">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
           Trending <span className="text-[10px] text-white relative -top-0.5 font-light font-sans border-2 border-amber-800 rounded-2xl p-1 px-2">TV</span>
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 max-w-full overflow-hidden">
            {data?.tvSeries?.trendingTvState?.map((item) => {
              return (
                <div key={item.id} className="shrink-0">
                  <img
                    src={IMG_URL + item.poster_path}
                    alt="posters"
                    className="w-50 h-65 object-fit rounded-xl hover:scale-105 transition-transform duration-300 ease-in-out"
                  />
                </div>
              );
            })}
          </div>
        </div>


        
      </div>
    </>
  );
};
