import React, { useState } from "react";
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaGlobe,
  FaArrowUp,
} from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import lang from "../utils/langConstants";
import { changeLanguage } from '../utils/langConfigSlice';


export const Footer = () => {

  const navigate = useNavigate();
  const [mail, setMail] = useState("");
  const [error,setError] = useState("");

  const language = useSelector(store => store.language?.languageState);
  const dispatch = useDispatch();

   const emailFormat = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@gmail\.com$/

  const handleSignInClick = ()=>{
    if(!mail){
      setError("Please enter your email");
      return;
    }
    if(!emailFormat.test(mail)){
      setError("Please enter valid email format");
      return;
    }
    setError("");
    navigate('/login', { state :{mail : mail}});
  }

   const handleLangClick = (e)=>{
    dispatch(changeLanguage(e.target.value))
  }


  return (
    <>
      <footer className="bg-black text-gray-400 relative py-4 px-6 pt-20">
        <div className="max-w-7xl mx-auto space-y-2 text-center">
          {/* Contact */}
          <p className="text-gray-500 text-lg mb-12">
            {lang[language].questionsMail} {" "}
            <span className="text-white hover:underline cursor-pointer transition-colors duration-200">
              ganeshcherupalli6565@gmail.com
            </span>
          </p>

          {/* Links Grid with Gradient Hover */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4 text-sm mb-12">
            {[
              lang[language].questionsMail,
               lang[language].FooterFaq,
                lang[language].helpCenter,
                 lang[language].account,
                  lang[language].mediaCenter,
                   lang[language].investorRelations,
                    lang[language].jobs,
                     lang[language].waysToWatch,
                      lang[language].termsOfUse,
                       lang[language].Privacy,
                       lang[language].CookiePreferences,
                        lang[language].CorporateInfo,
                         lang[language].ContactUs,
            ].map((link, idx) => (
              <a
                key={idx}
                href="#"
                className="relative hover:text-white transition-colors duration-300"
              >
                <span className="relative z-10">{link}</span>
                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-linear-to-r from-red-600 via-red-500 to-red-600 scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-300"></span>
              </a>
            ))}
          </div>

           <div className="relative inline-block mb-10">
              <select onChange={handleLangClick} value={language} className="appearance-none border border-gray-800 rounded-sm pl-4 pr-8 py-2 text-sm bg-black text-white focus:outline-none outline-none cursor-pointer hover:border-amber-600 active:border-amber-600">
                <option className="cursor-pointer"value={"en"}>English</option>
                <option className="cursor-pointer" value={"telugu"}>Telugu</option>
                <option className="cursor-pointer" value={"hindi"}>Hindi</option>
              </select>
              <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-3 text-white">
                &#9662;
              </span>
            </div>

          {/* Newsletter Signup */}
          <div className="flex flex-col sm:flex-row justify-center items-center sm:items-start gap-4 mb-12 h-28" >
            <div className="flex flex-col items-start">
              <input
              type="email"
              value={mail}
              onChange={(e)=> setMail(e.target.value)}
              placeholder={lang[language].emailPlaceholder}
              className="px-4 py-3 rounded-md bg-gray-900 text-white border border-gray-600 focus:outline-none focus:ring-1 focus:ring-red-600 w-full sm:w-auto transition-all duration-300 hover:border-red-600"
            />
            {error && <p className="text-amber-700 text-sm">{error}</p>}
            </div>
            <button className="bg-red-600 px-6 py-3 rounded-md text-white hover:bg-red-700 active:bg-red-700 transition-colors shadow-lg" onClick={handleSignInClick}>
              {lang[language].signIn}
            </button>
          </div>


          {/* Social Media Icons */}
          <div className="flex justify-center space-x-6 text-gray-400 text-xl mt-6">
            {[FaFacebookF, FaTwitter, FaInstagram, FaYoutube].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="/"
                  className="hover:text-white transform hover:scale-110 transition-transform duration-300"
                >
                  <Icon />
                </a>
              )
            )}
          </div>

          {/* Divider */}
          <div className="border-t border-gray-700 mt-8"></div>

          {/* Footer Copy */}
          <p className="text-gray-500 text-sm mt-4">
            &copy; {lang[language].copyRight}
          </p>

          {/* Back to Top Button */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="
    fixed right-12 bottom-10 z-50
    bg-red-600 text-white p-4
    cursor-pointer
    rounded-full shadow-xl
    hover:bg-red-700
    active:bg-red-700
    transition-all duration-300
    animate-bounce
  "
          >
            <FaArrowUp className="text-xl" />
          </button>
        </div>
      </footer>
    </>
  );
};
