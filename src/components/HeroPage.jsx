import { Header } from "./Header";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BG_IMAGE_URL } from "../utils/constants";
import { Accordian } from "./Accordian";
import { ReasonToJoin } from "./ReasonToJoin";
import { Trending } from "./Trending";

export const HeroPage = () => {
  const [userEmail, setUserEmail] = useState("");
  const [emailError, setEmailError] = useState("");

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
      <Header />
      <div>
        <img
          src={BG_IMAGE_URL}
          alt="hero-image"
          className="w-full h-screen object-cover brightness-30"
        />
      </div>
      <div className="absolute top-4/12 left-1/2 transform -translate-x-1/2 w-6/12 text-center px-4">
        <h1 className="text-6xl text-white font-bold">
          Unlimited movies, shows, and more
        </h1>
        <p className="text-white my-4 font-bold">
          Starts at ₹149. Cancel at any time.
        </p>
        <p className="text-white font-bold">
          Ready to watch? Enter your email to create or restart your membership.
        </p>
        <div className="flex justify-center items-start mt-8 space-x-4 my-4 h-22">
          <div className="flex flex-col">
            <input
              type="email"
              value={userEmail}
              onChange={handleChange}
              placeholder="Email address"
              className="border-2 border-gray-500 py-4 px-4 rounded-sm text-white outline-none hover:border-amber-600 w-72"
            />
            {emailError && (
              <span className="text-amber-700 font-semibold text-[12px] relative -left-8">
                {emailError}
              </span>
            )}
          </div>
          <button
            className=" bg-amber-700 text-white p-4 rounded-sm shadow-2xl hover:bg-orange-600 "
            onClick={handleClick}
          >
            Get Started &gt;
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
    </>
  );
};
