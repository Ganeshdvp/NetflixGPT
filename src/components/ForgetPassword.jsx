import { Link } from "react-router-dom";
import { LOGO_URL, BG_IMAGE_URL } from "../utils/constants";
import { sendPasswordResetEmail } from "firebase/auth";
import {auth} from "../utils/firebase";
import { useState } from "react";

export const ForgetPassword = () => {

    const [email, setEmail] = useState("");
    const [sent, setSent] = useState(false);



  const handleSendResetMail = () => {
    sendPasswordResetEmail(auth, email)
      .then(() => {
        // Password reset email sent!
        console.log("email sent successfully!");
        setSent(true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        // ..
      });
  };

  return (
    <>
      <Link to="/">
        <img
          src={LOGO_URL}
          alt="netflix-logo"
          className="w-44 absolute z-10 top-2 left-32 cursor-pointer"
        />
      </Link>
      <div>
        <img
          src={BG_IMAGE_URL}
          alt="hero-image"
          className="w-full h-screen object-cover brightness-30"
        />
      </div>

      <div className="bg-[rgba(0,0,0,0.6)] w-6/12 h-96 z-20 absolute left-1/2 transform -translate-x-1/2 top-32 rounded-md">
        <h1 className="text-3xl text-amber-50 font-bold pt-8 text-center mt-4" >
          Forgot Password
        </h1>
        <p className="text-amber-50 text-center mt-6 px-12 text-sm">
          Please check your email inbox for password reset instructions. If you
          haven't received an email, please check your spam or junk folder.
        </p>
        <input
          type="email"
          value={email}
          onChange={(e)=> setEmail(e.currentTarget.value)}
          placeholder="Enter your email"
          className="mx-auto block mt-12 px-4 py-2 w-md rounded-md outline-none text-white bg-gray-800 focus:border-red-600"
        />
        <button onClick={handleSendResetMail} className="bg-red-600 text-amber-50 px-6 py-2 rounded-md mt-6 block mx-auto hover:bg-red-700">
          Send Reset Link
        </button>

        {sent && <p className="text-amber-500 text-center mt-4 text-sm">Sent successfully! Please check your inbox.</p>}

      </div>
    </>
  );
};
