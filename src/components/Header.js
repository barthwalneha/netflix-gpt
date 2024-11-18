import React, { useEffect } from "react";
import { LOGO } from "../utils/constant";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";
import { removeUser } from "../utils/userSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constant";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: "uid",
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };
  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  return (
    <div>
      <div className=" flex justify-between absolute w-screen px-8 py-2 bg-gradient-to-b from-black z-10">
        <img className="w-44" src={LOGO} alt="logo" />
        {user && (
          <div className="flex p-2">
            {showGptSearch && (
              <select
                className="p-2 m-2 bg-gray-900 text-white"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.dentifier} value={lang.identifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}
            <button
              className="py-2 px-4 mx-2 my-2 bg-purple-800 text-white   rounded-lg"
              onClick={handleGptSearchClick}
            >
              {showGptSearch ? "Home Page" : "GPT Search"}
            </button>
            <img className="w-12 h-12 " src={user?.photoURL} alt="user-icon" />
            <button onClick={handleSignOut} className="font-bold text-white ">
              (Sign Out)
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
