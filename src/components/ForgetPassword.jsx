import { Link } from "react-router-dom";
import { LOGO_URL, BG_IMAGE_URL } from "../utils/constants";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useState } from "react";
import {
  FaSpinner,
} from "react-icons/fa";
import { useSelector } from "react-redux";
import lang from "../utils/langConstants";

export const ForgetPassword = () => {

    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);
    const [loading,setLoading] = useState(false);
    const [error,setError] = useState("");
    const language = useSelector(store => store.language?.languageState);


    const emailFormat = /^(?!.*\.\.)(?!\.)(?!.*\.$)[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@gmail\.com$/

  const handleSendResetMail = () => {
    if(!email){
      setError("Please enter your email");
      return;
    }
    if(!emailFormat.test(email)){
      setError("Please enter valid email format");
      return;
    }
    setSent(false);
    setLoading(true);
    setError("");
    
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        setSent(true);
        setLoading(false);
        setError("")
      })
      .catch((error) => {
        const errorMessage = error.message;
        setError(errorMessage);
        setLoading(false);
      });
  };

    const handleEnterClick = (e)=>{
    if(e.key === 'Enter'){
      handleSendResetMail();
    }
  }

  return (
    <>
      <Link to={"/"}>
          <img src={LOGO_URL} alt="netflix-logo" className="w-48 absolute z-10 -top-12 left-12 sm:left-32 cursor-pointer" />
        </Link>
      <div>
        <img
          src={BG_IMAGE_URL}
          alt="hero-image"
          className="w-full h-screen object-cover brightness-30"
        />
      </div>

      <div className="bg-[rgba(0,0,0,0.6)] w-[70%] sm:w-[60%] md:w-[60%] lg:w-6/12 h-110 sm:h-96 z-20 absolute left-1/2 transform -translate-x-1/2 top-32 rounded-md">
        <h1 className="text-3xl text-amber-50 font-bold pt-8 text-center mt-4" >
          {lang[language].forgotPasswordPage}
        </h1>
        <p className="text-amber-50 text-center mt-6 px-12 text-sm">
          {lang[language].forgotPasswordPageDescription}
        </p>
        <input
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.currentTarget.value)}
          onKeyDown={handleEnterClick}
          placeholder={lang[language].forgotPasswordPageMail}
          className="mx-auto block mt-12 px-4 py-2 w-[70%] sm:md rounded-md outline-none text-white bg-gray-800 focus:border-red-600"
        />
        <button onClick={handleSendResetMail} className="bg-red-600 text-amber-50 px-6 py-2 rounded-md mt-6 block mx-auto hover:bg-red-700 cursor-pointer">
          {
            loading ? (<FaSpinner className="text-white text-2xl animate-spin"/>) : lang[language].forgotPasswordPageSendButton
          }
        </button>

        {sent && <p className="text-amber-500 text-center mt-4 text-sm">Sent successfully! Please check your inbox.</p>}
        {error && <p className="text-red-500 text-center mt-4 text-sm">{error}</p>}

      </div>
    </>
  );
};
