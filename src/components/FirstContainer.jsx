import { useSelector } from "react-redux";
import { BgVideoPlayer } from "./BgVideoPlayer";
import { FaPlay } from "react-icons/fa";
import { HiOutlineInformationCircle } from "react-icons/hi";
import lang from "../utils/langConstants";


export const FirstContainer = () => {

  const movies = useSelector(
    (store) => store.nowPlaying?.nowPlayingMoviesState
  );

     const language = useSelector(store => store.language?.languageState);
  
  if (!movies || movies.length ===0 ) return;

    const {id, original_title, overview, release_date } = movies[0];


  return (
    <>
      <div className="flex flex-col pl-8 absolute pt-70 sm:pt-82 sm:pl-8 md:pl-8 lg:pl-20 bg-linear-to-r from-black w-screen aspect-video shadow-2xl z-20">
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-white">{original_title}</h1>
        <p className="text-md text-start w-10/12 sm:w-10/12 md:w-7/12 lg:w-4/12 mb-1 text-gray-300">{overview.length > 250 ? overview.slice(0,250)+ " more..." : overview}</p>
        <p className="text-md mb-8 text-gray-200">Released on :- {release_date}</p>
        <div className="flex space-x-4">
          <button className=" bg-white text-black p-3 rounded-sm px-6 font-semibold text-sm hover:scale-105 hover:text-white hover:bg-black active:bg-black active:text-white flex items-center cursor-pointer">
            <FaPlay /> {lang[language].playButton}
          </button>
          <button className="bg-[rgba(168,168,168,0.19)]  text-white p-3 rounded-sm px-6 font-semibold text-sm hover:bg-[rgba(168,168,168,0.6)] active:bg-[rgba(168,168,168,0.6)] flex items-center cursor-pointer">
            <HiOutlineInformationCircle className="text-xl mr-1"/>
            {lang[language].checkInfoButton}
          </button>
        </div>
      </div>

      <BgVideoPlayer id={id}/>
    </>
  );
};
