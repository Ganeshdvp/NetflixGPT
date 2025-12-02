import Tv from '../assets/tv4.png';
import Camera from '../assets/camera.png';
import ListKids from '../assets/list.png';
import Download from '../assets/download.png';
import { useSelector } from 'react-redux';
import lang from '../utils/langConstants';

export const ReasonToJoin = () => {

     const language = useSelector(store => store.language?.languageState);

  return (
    <>
    <div className='bg-black'>
        <h2 className="font-bold text-2xl p-4 sm:text-xl sm:px-6 md:text-2xl md:px-40 lg:px-40 -mb-3 text-white">{lang[language].reasonToJoin}</h2>

        <div className='flex flex-col gap-y-4 space-x-5 p-6 pb-10 w-[80%] mx-auto sm:flex-row sm:flex-wrap md:flex-row md:justify-center'>
            <div className='w-full sm:w-[90%] md:w-72 lg:w-68 h-65 bg-[rgba(73,37,37,0.81)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Enjoy on your TV</h2>
                <p className='text-sm text-gray-400'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                <img src={Tv} alt="tv" className='w-20 h-20 relative top-10 left-[70%] md:w-20 md:h-20 md:relative md:top-10 md:left-35'/>
            </div>
            
            <div className='w-full sm:w-[90%] md:w-72 lg:w-68 h-65 bg-[rgba(73,37,37,0.81)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Download your shows to watch offline</h2>
                <p className='text-sm text-gray-400'>Save your favourites easily and always have something to watch.</p>
                <img src={Download} alt="dowload" className='w-20 h-20 relative top-10 left-[70%] md:w-20 md:h-20 md:relative md:top-10 md:left-35'/>
            </div>

            <div className='w-full sm:w-[90%] md:w-72 lg:w-68 h-65 bg-[rgba(73,37,37,0.81)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Watch everywhere</h2>
                <p className='text-sm text-gray-400'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                <img src={Camera} alt="camera" className='w-20 h-20 relative top-10 left-[70%] md:w-20 md:h-20 md:relative md:top-10 md:left-35'/>
            </div>

            <div className='w-full sm:w-[90%] md:w-72 lg:w-68 h-65 bg-[rgba(73,37,37,0.81)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Create profiles for kids</h2>
                <p className='text-sm text-gray-400'>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                <img src={ListKids} alt="list_kids" className='w-20 h-20 relative top-10 left-[70%] md:w-20 md:h-20 md:relative md:top-10 md:left-35'/>
            </div>
        </div>
    </div>
    </>
  )
}
