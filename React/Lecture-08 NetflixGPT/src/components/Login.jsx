import { useRef, useState } from "react";
import Header from "./Header";
import validateData from "../utils/form-validator";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);
  const [errMessage, seterrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
    // console.log(isSignIn);
  }

  function handleLoginForm(e) {
    e.preventDefault();

    const nameValue = !isSignIn ? name.current?.value : null;
    const emailValue = email.current?.value;
    const passwordValue = password.current?.value;

    const message = validateData(nameValue, emailValue, passwordValue);
    seterrMessage(message);

    // If 'message' contains an error string, stop further processing and exit the function
    if (message) return;

    //Sign In / Sign Up logic
    if (!isSignIn) {
      //Sign Up logic
      createUserWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + " " + errorMessage);
        });
    } else {
      //Sign In logic
      signInWithEmailAndPassword(auth, emailValue, passwordValue)
        .then((userCredential) => {
          const user = userCredential.user;
          console.log(user.email + " Logged in Successfully");
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          seterrMessage(errorCode + " " + errorMessage);
        });
    }
  }

  return (
    <div className="header-container">
      <Header />
      <div className="netflix-header-container">
        <img
          src="/netflix-header.jpg"
          alt="logo"
          className="absolute w-full object-cover"
        />
      </div>

      <form
        onSubmit={handleLoginForm}
        className="absolute max-w-[400px] mx-auto my-36 right-0 left-0 bg-black/60 p-[40px_30px] flex flex-col justify-center gap-2 rounded-[9px] backdrop-blur-xs"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            ref={name}
            type="text"
            placeholder="Full name "
            className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          ref={email}
          type="email"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
        />
        <p className="text-red-500 font-bold text-lg">{errMessage}</p>

        <button className="p-4 my-4 w-full bg-red-700 rounded-sm cursor-pointer">
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>

        <p onClick={toggleSignIn} className="cursor-pointer">
          {isSignIn
            ? "New to Netflix? Sign Up now."
            : "Already an user? Sign In Now"}
        </p>
      </form>
    </div>
  );
}
