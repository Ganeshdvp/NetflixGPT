import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
  GoogleAuthProvider,
  signInWithPopup,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch, useSelector } from "react-redux";
import { addUser } from "../utils/userSlice";
import {
  PHOTO_URL_DEFAULT,
  LOGO_URL,
  BG_IMAGE_URL,
  GOOGLE_IMAGE_URL,
  FACEBOOK_IMAGE_URL,
  TWITTER_IMAGE_URL,
  MICROSOFT_IMAGE_URL,
} from "../utils/constants";
import * as Yup from "yup";
import {
  FaSpinner,
} from "react-icons/fa";
import { Header } from './Header';
import lang from "../utils/langConstants";
import { FaGoogle } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaMicrosoft } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa6";


export const Login = () => {
  const provider = new GoogleAuthProvider();

  const [isSignIn, setIsSignIn] = useState(true);
  const [signInError, setSignInError] = useState("");
  const [otherSignInWay, setOtherSignInWay] = useState(false);
  const [otherSignInWayValue, setOtherSignInWayValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();
    const language = useSelector(store => store.language?.languageState);

  // initial data
  const initialSignUpData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialSignInData = {
    email: location.state?.userEmail || location.state?.mail || "",
    password: "",
  };

  // validate feilds
  const signInValidation = Yup.object({
    email: Yup.string()
      .email("Invalid email format")
      .required("* Required this field"),
    password: Yup.string()
      .required("* Required this feild")
      .min(6, "* Must be 6 characters or higher"),
  });
  const signUpValidation = Yup.object({
    fullName: Yup.string()
      .required("* Required this feild")
      .min(4, "* Must be 4 characters or higher"),
    email: Yup.string()
      .email("Invalid email format")
      .required("* Required this field"),
    password: Yup.string()
      .required("* Required this feild")
      .min(6, "* Must be 6 characters or higher"),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref("password"), null], "* Password must match")
      .required("* Required this feild"),
  });


  // submit the form
  const submitFormData = (values) => {
    setIsLoading(true);
    const { fullName, email, password } = values;
    if (!isSignIn) {
      // Sign Up Logic
      createUserWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid } = user;
          updateProfile(user, {
            displayName: fullName,
            photoURL: PHOTO_URL_DEFAULT,
          })
            .then(() => {
              dispatch(
                addUser({
                  uid: uid,
                  fullName: fullName,
                  email: email,
                  photoURL: PHOTO_URL_DEFAULT,
                })
              );
              navigate("/home");
               setIsLoading(false);
            })
            .catch((error) => {
              console.log("Profile update error:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsLoading(false);
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, displayName, email, photoURL } = user;
          dispatch(
            addUser({
              uid: uid,
              fullName: displayName,
              email: email,
              photoURL: photoURL,
            })
          );
          navigate("/home");
           setIsLoading(false);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInError(
            errorCode === "auth/invalid-credential"
              ? "Invalid credentials. Please try again."
              : errorMessage
          );
          setIsLoading(false);
        });
    }
    // resetForm();
  };

  // Sign in with Google
  const signInWithGoogle = () => {
    provider.setCustomParameters({
      prompt: "select_account",
    });
    signInWithPopup(auth, provider)
      .then((result) => {
        const credential = GoogleAuthProvider.credentialFromResult(result);
        const token = credential.accessToken;
        const user = result.user;
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            fullName: displayName,
            email: email,
            photoURL: photoURL,
          })
        );
        navigate("/home");
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setIsLoading(false);
      });
  };


  // when we click other providers it will called
  const handleSignInOtherWay = (value)=>{
    if(value === "facebook"){
      setOtherSignInWayValue("facebook");
    }
    else if(value === "microsoft"){
      setOtherSignInWayValue("microsoft");
    }
    else if(value === "twitter"){
      setOtherSignInWayValue("twitter");
    }
    setOtherSignInWay(true);
    setIsLoading(false);
  }


  const handleLoginClick = () => {
    setIsSignIn(!isSignIn);
    setIsLoading(false);
    setOtherSignInWay(false);
    setSignInError("");
  };



  return (
    <>
      {/* <Link to="/">
        <img
          src={LOGO_URL}
          alt="netflix-logo"
          className="w-44 absolute z-10 top-2 left-32 cursor-pointer"
        />
      </Link> */}

      <Header/>
      
      <div>
        <img
          src={BG_IMAGE_URL}
          alt="hero-image"
          className="w-full h-screen object-cover brightness-30"
        />
      </div>

      <Formik
        key={isSignIn ? "Sign In" : "Sign Up"}
        initialValues={isSignIn ? initialSignInData : initialSignUpData}
        validationSchema={isSignIn ? signInValidation : signUpValidation}
        onSubmit={submitFormData}
      >
        <Form className="flex flex-col items-center p-8 bg-[rgba(0,0,0,0.6)]  absolute z-20 text-amber-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[70%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-3/12">
          <h1 className="py-2 font-bold text-2xl mb-6">
            {isSignIn ? lang[language].signIn : lang[language].signUp}
          </h1>

          {!isSignIn && (
            <div className="mb-4 w-full flex flex-col">
              <Field
                className="border border-amber-900 rounded-sm p-2 outline-none focus:border-amber-700"
                type="text"
                name="fullName"
                // id="fullName"
                placeholder={lang[language].fullName}
              ></Field>
              <ErrorMessage name="fullName">
                {(msg) => (
                  <span className="text-[12px] text-amber-600">{msg}</span>
                )}
              </ErrorMessage>
            </div>
          )}

          <div className="mb-4 w-full flex flex-col">
            <Field
              className="border border-amber-900 rounded-sm p-2 outline-none focus:border-amber-700"
              type="email"
              name="email"
              // id="email"
              placeholder={lang[language].emailPlaceholder}
            ></Field>
            <ErrorMessage name="email">
              {(msg) => (
                <span className="text-[12px] text-amber-600">{msg}</span>
              )}
            </ErrorMessage>
          </div>

          <div className="mb-4 w-full flex flex-col">
            <Field
              className="border border-amber-900 rounded-sm p-2 outline-none focus:border-amber-700"
              type="password"
              name="password"
              // id="password"
              placeholder={lang[language].password}
            ></Field>
            <ErrorMessage name="password">
              {(msg) => (
                <span className="text-[12px] text-amber-600">{msg}</span>
              )}
            </ErrorMessage>
          </div>

          {!isSignIn && (
            <div className="mb-4 w-full flex flex-col">
              <Field
                className="border border-amber-900 rounded-sm p-2 outline-none focus:border-amber-700"
                type="password"
                name="confirmPassword"
                // id="confirmPassword"
                placeholder={lang[language].confirmPassword}
              ></Field>
              <ErrorMessage name="confirmPassword">
                {(msg) => (
                  <span className="text-[12px] text-amber-600">{msg}</span>
                )}
              </ErrorMessage>
            </div>
          )}

          <button
            className="bg-amber-700 w-full rounded-sm p-2 mb-4 cursor-pointer hover:opacity-80"
            type="submit"
          >
            {isLoading ? ( <FaSpinner className="text-white text-2xl animate-spin w-full"/>) : (
              <p>{isSignIn ? lang[language].signIn : lang[language].signUp}</p>
            )}
          </button>

          {signInError && (
            <p className="text-sm text-amber-600 mb-4">{signInError}</p>
          )}

          <p className="opacity-50"> Or </p>

          {/* authenticated by Icons */}

          <div className="flex justify-center items-center w-full my-4 space-x-8 mb-6">
            <button
              className="w-6 h-6 text-lg hover:scale-110 cursor-pointer active:scale-110"
              onClick={signInWithGoogle}
            >
              <FaGoogle/>
            </button>
            <button className="w-6 h-6 text-lg hover:scale-110 active:scale-110 cursor-pointer" onClick={() => handleSignInOtherWay("facebook")}>
              <FaFacebookF/>
            </button>
            <button className="w-6 h-6 text-lg hover:scale-110 active:scale-110 cursor-pointer" onClick={() => handleSignInOtherWay("microsoft")}>
              <FaMicrosoft/>
            </button>
            <button className="w-6 h-6 text-lg hover:scale-110 active:scale-110 cursor-pointer" onClick={() => handleSignInOtherWay("twitter")}>
              <FaTwitter/>
            </button>
          </div>

          {
            otherSignInWay && (<p className="text-[12px] text-amber-600 mb-4 -mt-6 text-center">{otherSignInWayValue} method are not implemented yet. "try to go with google"</p>
            )
          }

          {isSignIn && (<p
            className="text-sm underline mb-4 cursor-pointer hover:text-amber-800 active:text-amber-800" onClick={()=> navigate('/forget-password')}
          >
            {lang[language].forgotPassword}
          </p>)}

          <p
            className="text-sm"
          >
           {isSignIn ? (lang[language].newToHyperFlix) : (lang[language].alreadyHaveAccount)}
           <span onClick={handleLoginClick} className="hover:text-amber-900 active:text-amber-900 cursor-pointer">{isSignIn ? lang[language].signUpNow : lang[language].signIn}</span>
          </p>
        </Form>
      </Formik>

      
    </>
  );
};
