import { useState } from "react";
import Header from "./Header";

export default function Login() {
  const [isSignIn, setIsSignIn] = useState(true);

  function toggleSignIn() {
    setIsSignIn(!isSignIn);
    console.log(isSignIn);
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

      <form className="absolute max-w-[400px] mx-auto my-36 right-0 left-0 bg-black/60 p-[40px_30px] flex flex-col justify-center gap-2 rounded-[9px] backdrop-blur-xs">
        <h1 className="font-bold text-3xl py-4">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>

        {!isSignIn && (
          <input
            type="text"
            placeholder="Full name "
            className="p-4 my-2 w-full bg-gray-700 rounded-sm"
          />
        )}
        <input
          type="email"
          placeholder="Email address"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-2 w-full bg-gray-700 rounded-sm"
        />

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
