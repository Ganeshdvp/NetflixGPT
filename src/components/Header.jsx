import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { removeUser } from "../utils/userSlice";
import { LOGO_URL } from "../utils/constants";
import { ResetMovies } from "../utils/moviesSlice";
import { ResetTvSeries } from "../utils/tvSeriesSlice";
import {toggleSearch} from '../utils/searchMovieSlice';
import { IoMdLogOut } from "react-icons/io";
import { IoSearch } from "react-icons/io5";
import { BiDotsVerticalRounded } from "react-icons/bi";
import { useEffect, useRef, useState } from "react";
import { changeLanguage } from '../utils/langConfigSlice';
import lang from "../utils/langConstants";

export const Header = () => {
  const data = useSelector((store) => store.user);
      const language = useSelector(store => store.language?.languageState);

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [show, setShow] = useState(false);
  const boxRef = useRef(null);

  const handleClick = () => {
    signOut(auth)
      .then(() => {
        // Sign-out  successful.
        dispatch(removeUser());
        dispatch(ResetMovies());
        dispatch(ResetTvSeries());
        navigate("/");
      })
      .catch((error) => {
        console.log(error);
      });
  };


  const handleDotsClick = ()=>{
    setShow(!show);
  }
 

  const handleLangClick = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }

  // when clicking outside
    useEffect(() => {
    function handleClickOutside(event) {
      if (boxRef.current && !boxRef.current.contains(event.target)) {
        setShow(false);   // 👈 close when clicking outside
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  // // it is observer
  // useEffect(() => {
  //   const unsubscribe = onAuthStateChanged(auth, (user) => {
  //     if (user) {
  //       // User is signed in
  //       const { uid, email, displayName, photoURL } = user;
  //       dispatch(
  //         addUser({
  //           uid: uid,
  //           fullName: displayName,
  //           email: email,
  //           photoURL: photoURL,
  //         })
  //       );
  //       navigate("/home");
  //     } else {
  //       // User is signed out
  //       dispatch(removeUser());
  //       navigate('/')
  //     }
  //   });

  //   return ()=> unsubscribe();
  // }, []);

  return (
    <>
      <div className="absolute z-30 flex items-center justify-between w-full mx-auto p-2 pt-8 px-10 md:px-32 bg-linear-to-b from-black">
        <Link to={"/"}>
          <img src={LOGO_URL} alt="netflix-logo" className="w-48 absolute -top-12 " />
          
        </Link>
        {data.uid === "" ? (
          <div className="flex items-center space-x-8 hidden sm:block">
            <div className="relative inline-block">
              <select onChange={handleLangClick} value={language} className="appearance-none border rounded-sm pl-4 pr-8 py-2 text-sm border-white bg-black text-white focus:outline-none cursor-pointer hover:border-amber-600">
                <option className="cursor-pointer"value={"en"}>English</option>
                <option className="cursor-pointer" value={"telugu"}>Telugu</option>
                <option className="cursor-pointer" value={"hindi"}>Hindi</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                &#9662;
              </span>
            </div>

            <Link to="/login">
              <button className="bg-amber-700 text-white px-6 py-2 rounded-sm text-sm font-medium cursor-pointer hover:bg-orange-600 ">
                {lang[language].signIn}
              </button>
            </Link>
          </div>
        ) : (
          <>
          <BiDotsVerticalRounded className="text-amber-600 sm:hidden block text-3xl rounded-full hover:scale-110 cursor-pointer active:scale-110 " onClick={handleDotsClick}/>
          <IoSearch  onClick={()=> dispatch(toggleSearch(true))} className="text-amber-600 text-2xl sm:hidden block absolute right-22 hover:scale-110 cursor-pointer active:scale-110"/>
          {
            show && (
              <>
              <div ref={boxRef} className="bg-amber-900 w-50 h-fit absolute right-6 top-16 rounded-xl p-4 flex flex-col gap-y-4 items-center">
                <div className="flex items-center">
                  <img
                src={data?.photoURL}
                alt="user-avatar"
                className="w-10 h-10 rounded-4xl mr-2"
              />
              <span className="text-white font-medium mr-4">
                {lang[language].hello},{" "}
                {data?.fullName.length > 10
                  ? data?.fullName.slice(0, 10) + "..."
                  : data?.fullName}
              </span>
                </div>
                <button
              className="flex items-center text-white p-2 rounded-sm cursor-pointer border border-amber-50 hover:bg-amber-700 active:bg-amber-700 font-semibold text-sm"
              onClick={handleClick}
            >
              <IoMdLogOut className="text-xl mr-1" /> {lang[language].signOut}
            </button>
              </div>
              </>
            )
          }
           <div className="flex items-center justify-end -mt-2 hidden sm:block sm:flex">
            <div className="flex items-center mx-2">
              <button
              onClick={()=> dispatch(toggleSearch(true))}
                className="text-white text-sm opacity-50 flex items-center mr-8 p-2 rounded-2xl cursor-pointer
  transition-all duration-200
  active:border-2 active:border-amber-500
  active:shadow-[0_0_20px_5px_#f59e0b]"
              >
                <IoSearch className="text-lg opacity-70 mr-1" />
                {lang[language].searchMovies}
              </button>
              <img
                src={data?.photoURL}
                alt="user-avatar"
                className="w-10 h-10 rounded-4xl mr-2"
              />
              <span className="text-white font-medium mr-4">
                {lang[language].hello},{" "}
                {data?.fullName.length > 10
                  ? data?.fullName.slice(0, 10) + "..."
                  : data?.fullName}
              </span>
            </div>
            <button
              className="flex items-center bg-orange-800 text-white p-2 rounded-sm cursor-pointer hover:bg-orange-700 font-semibold text-sm"
              onClick={handleClick}
            >
              <IoMdLogOut className="text-xl mr-1" /> {lang[language].signOut}
            </button>
          </div>
          </>
         
        )}
      </div>
    </>
  );
};
