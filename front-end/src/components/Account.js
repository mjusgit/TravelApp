import React from "react";
import { Link } from "react-router-dom";
export const Account = () => {

  return(
<div className="flex items-center justify-center min-h-screen">
  <div className="flex flex-col items-center">
    <Link to="/logIn" className="text-white text-center rounded-lg bg-red-500 p-8 mx-4 mb-4">
      Log In
    </Link>
    <Link to="/signUp" className="text-white text-center rounded-lg bg-red-500 p-8 mx-4">
      Sign Up
    </Link>
  </div>
</div>

)}