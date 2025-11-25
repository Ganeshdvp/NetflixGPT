import Tv from '../assets/tv4.png';
import Camera from '../assets/camera.png';
import ListKids from '../assets/list.png';
import Download from '../assets/download.png';

export const ReasonToJoin = () => {
  return (
    <>
    <div className='bg-black'>
        <h2 className="font-bold text-2xl pl-36 text-white">More reasons to join</h2>

        <div className='flex space-x-5 pl-40 p-6 pb-10'>
            <div className='w-68 h-65 bg-[rgba(66,36,36,0.6)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Enjoy on your TV</h2>
                <p className='text-sm text-gray-400'>Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>
                <img src={Tv} alt="tv" className='w-20 h-20 relative top-10 left-35'/>
            </div>
            
            <div className='w-68 h-65 bg-[rgba(66,36,36,0.6)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Download your shows to watch offline</h2>
                <p className='text-sm text-gray-400'>Save your favourites easily and always have something to watch.</p>
                <img src={Download} alt="dowload" className='w-16 h-16 relative top-12 left-40'/>
            </div>

            <div className='w-68 h-65 bg-[rgba(66,36,36,0.6)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Watch everywhere</h2>
                <p className='text-sm text-gray-400'>Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.</p>
                <img src={Camera} alt="camera" className='w-20 h-20 relative top-10 left-35'/>
            </div>

            <div className='w-68 h-65 bg-[rgba(66,36,36,0.6)] rounded-2xl p-4 py-6'>
                <h2 className='text-white font-bold text-xl mb-2'>Create profiles for kids</h2>
                <p className='text-sm text-gray-400'>Send kids on adventures with their favourite characters in a space made just for them — free with your membership.</p>
                <img src={ListKids} alt="list_kids" className='w-20 h-20 relative top-7 left-38'/>
            </div>
        </div>
    </div>
    </>
  )
}
