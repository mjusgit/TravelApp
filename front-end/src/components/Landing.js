import React from "react";
import { Link } from "react-router-dom";

export const Landing = () => {
  const myLogoUrl =
    "https://firebasestorage.googleapis.com/v0/b/ubiqum-academy.appspot.com/o/MYtineraryLogo.png?alt=media&token=81a1f989-9583-415f-9094-7e930866d759&_gl=1*1y0zbn6*_ga*MTQ2NTQ4MDUwOS4xNjg0MzE4OTM4*_ga_CW55HF8NVT*MTY4NjI1MDAzOS40Mi4xLjE2ODYyNTA5MzEuMC4wLjA";
  const myButtonUrl =
    "https://firebasestorage.googleapis.com/v0/b/ubiqum-academy.appspot.com/o/circled-right-2.png?alt=media&token=0e514106-0dbb-453b-8b4c-659cccb41cbf&_gl=1*19zecpc*_ga*MTQ2NTQ4MDUwOS4xNjg0MzE4OTM4*_ga_CW55HF8NVT*MTY4NjI1MDAzOS40Mi4xLjE2ODYyNTA5NzQuMC4wLjA";
  return (
    <div className="container grid min-h-screen">
      <div className="header text-center max-w-xs mx-auto">
        <img
          src={myLogoUrl}
          alt="logo"
          className="w-11/12 rounded-lg ml-2 my-3"
        />
        <p>Find your perfect trip!</p>
        <p>Designed by insiders who know and love their cities.</p>
      </div>
      <div className="mx-auto mb-auto">
        <h2 className="text-xl font-bold">Start Browsing</h2>
        <Link to="/cities">
          <img
            src={myButtonUrl}
            alt="citiesButton"
            className="w-24 rounded-lg m-4"
          />
        </Link>
      </div>
      <div className="mx-auto mb-10">
        {" "}
        {/* Use mt-auto here to push this section to the bottom */}
        <p className="mb-6">Want to build your own MYtinerary?</p>
        <Link
          to="/logIn"
          className="text-white text-center rounded-lg bg-red-500 p-2 ms-4 "
        >
          Log In
        </Link>
        <Link
          to="/signUp"
          className="text-white text-center rounded-lg bg-red-500 p-2 ms-16"
        >
          Sign Up
        </Link>
      </div>
    </div>
  );
};
