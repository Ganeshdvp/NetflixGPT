import { Header } from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BG_IMAGE_URL } from "../utils/constants";
import { Accordian } from "./Accordian";
import { ReasonToJoin } from "./ReasonToJoin";
import { Trending } from "./Trending";
import {Footer} from './Footer';
import { MdArrowForward } from "react-icons/md";
import { useSelector } from "react-redux";
import lang from '../utils/langConstants';


export const HeroPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");

  const language = useSelector(store => store.language?.languageState);

  const naviagate = useNavigate();

  const handleChange = (e) => {
    setUserEmail(e.currentTarget.value);
  };

  const handleClick = () => {
    const emailPattern =
      /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(userEmail);
    if (!emailPattern) {
      setEmailError("* Please enter a valid email format.");
      return;
    }
    setEmailError("");
    naviagate("/login", { state: { userEmail: userEmail } });
  };

  return (
    <>
    <div className="w-screen h-screen">
        <Header />
      <div>
        <img
          src={BG_IMAGE_URL}
          alt="hero-image"
          className="w-full h-screen object-cover brightness-40"
        />
      </div>


      <div className="absolute top-4/12 left-1/2 transform -translate-x-1/2 w-[80%] text-center px-4 sm:w-9/12 md:w-6/12 lg:6/12">
        <h1 className="text-6xl text-white font-bold">
          {lang[language].heroPageHeading}
        </h1>
        <p className="text-white my-4 font-bold">
          {lang[language].heroPageHeading2}
        </p>
        <p className="text-white font-bold">
          {lang[language].heroPageHeading3}
        </p>
        <div className="flex flex-col justify-center items-center space-y-2 mt-8 space-x-4 my-4 h-22 sm:flex sm:flex-row sm:items-start">
          <div className="flex flex-col">
            <input
              type="email"
              value={userEmail}
              onChange={handleChange}
              placeholder={lang[language].emailPlaceholder}
              className="border-2 border-gray-500 py-4 px-4 rounded-sm text-white outline-none hover:border-amber-600 focus:border-amber-600 w-72"
            />
            {emailError && (
              <span className="text-amber-700 font-semibold text-[12px] relative -left-10">
                {emailError}
              </span>
            )}
          </div>
          <button
            className="flex items-center cursor-pointer bg-amber-700 text-white p-4 rounded-sm shadow-2xl hover:bg-orange-600 active:bg-orange-600"
            onClick={handleClick}
          >
            {lang[language].heroPageButton} <MdArrowForward className="text-lg ml-1"/>
          </button>
        </div>
      </div>

      {/* red line */}
      <div className="w-full h-32 bg-black relative">
        <svg
          className="absolute top-1 -translate-y-1/2 left-0 w-full h-20"
          viewBox="0 0 1600 100"
          fill="none"
        >
          <path
            d="M0 50 Q800 -10 1600 50"
            stroke="#ff3b3b"
            strokeWidth="3"
            strokeLinecap="round"
            className="drop-shadow-[0_0_30px_#ff3b3b], drop-shadow-[0_0_60px_#ff1f1f], drop-shadow-[0_0_100px_#ff0000]"
          />
        </svg>
      </div>


      <Trending/>
      <ReasonToJoin />
      <Accordian />
      <Footer/>
    </div>
    </>
  );
};
