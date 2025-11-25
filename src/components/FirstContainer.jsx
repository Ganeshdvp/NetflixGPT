import { useSelector } from "react-redux";
import { BgVideoPlayer } from "./BgVideoPlayer";
import InfoIcon from '../assets/info.png';
import PlayIcon from '../assets/play.png';


export const FirstContainer = () => {

  const movies = useSelector(
    (store) => store.nowPlaying?.nowPlayingMoviesState
  );

  if (movies === null) return;

    const {id, original_title, overview, release_date } = movies[1];


  return (
    <>
      <div className="flex flex-col pl-20 absolute pt-82 bg-linear-to-r from-black w-screen aspect-video shadow-2xl">
        <h1 className="text-5xl font-bold mb-4 text-white">{original_title}</h1>
        <p className="text-md text-start w-4/12 mb-1 text-gray-300">{overview}</p>
        <p className="text-md mb-8 text-gray-200">Released on :- {release_date}</p>
        <div className="flex space-x-4">
          <button className=" bg-[rgba(168,168,168,0.19)]  text-white p-3 rounded-sm px-6 font-semibold text-sm hover:bg-[rgba(168,168,168,0.6)] flex items-center">
            <img src={PlayIcon} alt="play-icon" className="w-5 h-5 mr-1"/>
            Play
          </button>
          <button className="bg-[rgba(168,168,168,0.19)]  text-white p-3 rounded-sm px-6 font-semibold text-sm hover:bg-[rgba(168,168,168,0.6)] flex items-center">
            <img src={InfoIcon} alt="info-icon" className="w-5 h-5 mr-1"/>
            Check info
          </button>
        </div>
      </div>

      <BgVideoPlayer id={id}/>
    </>
  );
};
