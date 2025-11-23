import React, { useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { PHOTO_URL_DEFAULT, LOGO_URL, BG_IMAGE_URL } from "../utils/constants";

export const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const [signInError, setSignInError] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const location = useLocation();

  // initial data
  const initialSignUpData = {
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
  };
  const initialSignInData = {
    email: location.state?.userEmail || "",
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
  const submitFormData = (values, { resetForm }) => {
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
              dispatch(addUser({ uid: uid, fullName: fullName, email: email, photoURL: PHOTO_URL_DEFAULT }));
              navigate("/home");
            })
            .catch((error) => {
              console.log("Profile update error:", error);
            });
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
        });
    } else {
      // Sign in Logic
      signInWithEmailAndPassword(auth, email, password)
        .then((userCredential) => {
          const user = userCredential.user;
          const { uid, displayName, email, photoURL } = user;
          dispatch(addUser({ uid: uid, fullName: displayName, email: email, photoURL: photoURL }));
          navigate("/home");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setSignInError(
            errorCode === "auth/invalid-credential"
              ? "Invalid credentials. Please try again."
              : errorMessage
          );
        });
    }
    resetForm();
  };

  const handleLoginClick = () => {
    setIsSignIn(!isSignIn);
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

      <Formik
        key={isSignIn ? "Sign In" : "Sign Up"}
        initialValues={isSignIn ? initialSignInData : initialSignUpData}
        validationSchema={isSignIn ? signInValidation : signUpValidation}
        onSubmit={submitFormData}
      >
        <Form className="flex flex-col items-center p-8 bg-black  absolute z-20 text-amber-50 left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 sm:w-3/12">
          <h1 className="py-2 font-bold text-2xl mb-6">
            {isSignIn ? "Sign In" : "Sign Up"}
          </h1>

          {!isSignIn && (
            <div className="mb-4 w-full flex flex-col">
              <Field
                className="border border-amber-50 rounded-sm p-2 outline-none"
                type="text"
                name="fullName"
                // id="fullName"
                placeholder="Full Name"
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
              className="border border-amber-50 rounded-sm p-2 outline-none"
              type="email"
              name="email"
              // id="email"
              placeholder="Email Address"
            ></Field>
            <ErrorMessage name="email">
              {(msg) => (
                <span className="text-[12px] text-amber-600">{msg}</span>
              )}
            </ErrorMessage>
          </div>

          <div className="mb-4 w-full flex flex-col">
            <Field
              className="border border-amber-50 rounded-sm p-2 outline-none"
              type="password"
              name="password"
              // id="password"
              placeholder="Password"
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
                className="border border-amber-50 rounded-sm p-2 outline-none"
                type="password"
                name="confirmPassword"
                // id="confirmPassword"
                placeholder="Confirm Password"
              ></Field>
              <ErrorMessage name="confirmPassword">
                {(msg) => (
                  <span className="text-[12px] text-amber-600">{msg}</span>
                )}
              </ErrorMessage>
            </div>
          )}

          <button
            className="bg-amber-700 w-full rounded-sm p-2 mb-4 cursor-pointer"
            type="submit"
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>

          {signInError && (
            <p className="text-sm text-amber-600 mb-4">{signInError}</p>
          )}

          <p className="text-sm underline mb-4 cursor-pointer">
            Forgot your password?
          </p>

          <p
            className="text-md font-sm cursor-pointer"
            onClick={handleLoginClick}
          >
            {isSignIn
              ? "New to Netflix? Sign Up now."
              : "Already have an account? Sign In."}
          </p>
        </Form>
      </Formik>
    </>
  );
};
