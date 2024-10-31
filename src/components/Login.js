import React, { useState, useRef } from "react";
import Header from "./Header";
import { checkValidData } from "../utils/Validate";
import { updateProfile } from "firebase/auth";
import { addUser } from "../utils/userSlice";

import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
//-----------------------------------
const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();
  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = (e) => {
    e.preventDefault();
    const nameValue = name.current ? name.current.value : "";
    const emailValue = email.current.value;
    const passwordValue = password.current.value;
    let message = checkValidData(emailValue, passwordValue);
    setErrorMessage(message);

    if (message) return;
    if (!isSignInPage) {
      //sign up
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Sign up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: nameValue,
            photoURL:
              "https://cdn2.f-cdn.com/contestentries/1440473/30778261/5bdd02db9ff4c_thumb900.jpg",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: "uid",
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
              navigate("/browse");
            })
            .catch((error) => {
              setErrorMessage(error);
            });

          console.log(user);

          // ...
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + " " + errorMessage);
        });
    } else {
      //sign in
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          console.log(user);
          navigate("/browse");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setErrorMessage(errorCode + "" + errorMessage);
        });
    }
  };

  const toggleIsSignInPage = () => {
    setIsSignInPage(!isSignInPage);
  };

  return (
    <div>
      <Header />

      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/fc164b4b-f085-44ee-bb7f-ec7df8539eff/d23a1608-7d90-4da1-93d6-bae2fe60a69b/IN-en-20230814-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="bgimage"
        />
      </div>
      <form className="absolute w-1/4 h-2/3 bg-black bg-opacity-80  p-5 my-40 mx-auto right-0 left-0 rounded-lg">
        <h1 className="font-bold text-3xl py-4  text-white">
          {isSignInPage ? "Sign In" : "Sign Up"}{" "}
        </h1>
        {!isSignInPage && (
          <input
            ref={name}
            className="my-4  p-4 w-full  bg-gray-500"
            type="text"
            placeholder="Full name "
          />
        )}

        {/* {!isSignInPage && (
          <input
            className="my-4  p-4 w-full  bg-gray-500"
            type="number"
            placeholder="mobile number "
          ></input>
        )} */}

        <input
          ref={email}
          type="text"
          placeholder="Email address"
          className="my-4  p-4 w-full  bg-gray-500 "
        />
        <br />
        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-500"
        />
        <p className="text-red-600 font-bold text-lg"> {errorMessage}</p>
        <button
          className="my-6 p-4 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInPage ? "Sign in" : "Sign Up"}
        </button>
        <p
          onClick={toggleIsSignInPage}
          className="text-white py-4 cursor-pointer"
        >
          {isSignInPage
            ? "New to netflix ? Sign up now"
            : "Already a user, Sign in now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
