import { useSelector } from "react-redux";
import { IMG_URL } from "../utils/constants";
import lang from "../utils/langConstants";

export const SecondContainer = () => {
  const {nowPlayingMoviesState, popularMoviesState, topRatedMoviesState, upComingMoviesState } = useSelector((store) => store.nowPlaying);
  const {arrivingTvSeriesState, trendingTvState} = useSelector((store)=> store.tvSeries)
  const language = useSelector(store => store.language?.languageState);

  return (
    <>
      <div className="bg-black max-w-screen relative top-182">
        {/* Now playing */}
        <div className="z-20 max-w-screen h-full relative -top-20">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            {lang[language].nowPlaying}
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 w-full overflow-x-scroll no-scrollbar">
            {nowPlayingMoviesState?.map((item) => {
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
        <div className="z-20 max-w-screen h-full relative -top-20 mb-8 mt-10">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            {lang[language].popular}
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 w-full overflow-x-scroll no-scrollbar">
            {popularMoviesState?.map((item) => {
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
        <div className="z-20 max-w-screen h-full relative -top-20 mb-10">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            {lang[language].topRated}
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 w-full overflow-x-scroll no-scrollbar">
            {topRatedMoviesState?.map((item) => {
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
        <div className="z-20 max-w-screen h-full relative -top-20 mb-10">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
            {lang[language].upComing}
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 w-full overflow-x-scroll no-scrollbar">
            {upComingMoviesState?.map((item) => {
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
        <div className="z-20 max-w-screen h-full relative -top-20 mb-10">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
           {lang[language].tvSeries} <span className="text-[10px] text-white relative -top-0.5 font-light font-sans border-2 border-amber-800 rounded-2xl p-1 px-2">{lang[language].arrivingToday}</span>
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 w-full overflow-x-scroll no-scrollbar">
            {arrivingTvSeriesState?.map((item) => {
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
        <div className="z-20 max-w-screen h-full relative -top-20 mb-180">
          <h2
            className="text-white
         text-2xl font-bold px-8 mb-2"
          >
           {lang[language].trendingTv} <span className="text-[10px] text-white relative -top-0.5 font-light font-sans border-2 border-amber-800 rounded-2xl p-1 px-2">TV</span>
          </h2>
          <div className="flex space-x-6 px-8 h-75 p-4 w-full overflow-x-scroll no-scrollbar">
            {trendingTvState?.map((item) => {
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
