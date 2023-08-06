import React from "react";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { logoutSuccess } from "../store/actions/authAction"; // Adjust the import path accordingly

export const Account = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.auth.isLoggedIn);
  const user = useSelector((state) => state.auth.user);


  const handleLogout = () => {
    dispatch(logoutSuccess());
  };


  return (
    <div>
      {isLoggedIn ? (
        <div className="container mx-auto mt-8 bg-red-500 p-4 rounded-lg">
          <h1 className="text-white text-2xl font-bold mb-4">
            Hello, {user.name}!
          </h1>
          <p className="text-white text-lg">Email: {user.email}</p>
          <div className="mt-4">
              <button
                className="bg-white text-red-500 px-4 py-2 mt-4 rounded-lg"
                onClick={handleLogout}
              >
                Logout
              </button>
            </div>
        </div>
      ) : (
        <div className="flex items-center justify-center min-h-screen">
          <div className="flex flex-col items-center">
            <Link
              to="/logIn"
              className="text-white text-center rounded-lg bg-red-500 p-6 mx-4 mb-4"
            >
              Log In
            </Link>
            <Link
              to="/signUp"
              className="text-white text-center rounded-lg bg-red-500 p-6 mx-4"
            >
              Sign Up
            </Link>
          </div>
        </div>
      )}
    </div>
  );
};
