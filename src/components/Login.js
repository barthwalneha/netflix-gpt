import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInPage, setIsSignInPage] = useState(true);

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
          type="text"
          placeholder="Email address"
          className="my-4  p-4 w-full  bg-gray-500 "
        />
        <br />
        <input
          type="password"
          placeholder="Password"
          className="my-4 p-4 w-full bg-gray-500"
        />
        <button className="my-6 p-4 bg-red-700 w-full rounded-lg">
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
