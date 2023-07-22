import React from 'react';
import { Link } from 'react-router-dom';

export const Landing = () => {
  const myLogoUrl = 'https://firebasestorage.googleapis.com/v0/b/ubiqum-academy.appspot.com/o/MYtineraryLogo.png?alt=media&token=81a1f989-9583-415f-9094-7e930866d759&_gl=1*1y0zbn6*_ga*MTQ2NTQ4MDUwOS4xNjg0MzE4OTM4*_ga_CW55HF8NVT*MTY4NjI1MDAzOS40Mi4xLjE2ODYyNTA5MzEuMC4wLjA';
  const myButtonUrl = 'https://firebasestorage.googleapis.com/v0/b/ubiqum-academy.appspot.com/o/circled-right-2.png?alt=media&token=0e514106-0dbb-453b-8b4c-659cccb41cbf&_gl=1*19zecpc*_ga*MTQ2NTQ4MDUwOS4xNjg0MzE4OTM4*_ga_CW55HF8NVT*MTY4NjI1MDAzOS40Mi4xLjE2ODYyNTA5NzQuMC4wLjA';
  const myHomeUrl = 'https://firebasestorage.googleapis.com/v0/b/ubiqum-academy.appspot.com/o/homeIcon.png?alt=media&token=be34d820-8859-4f7a-9cdb-1bea154ff0d3&_gl=1*d9nt9v*_ga*MTQ2NTQ4MDUwOS4xNjg0MzE4OTM4*_ga_CW55HF8NVT*MTY4NjI1MDAzOS40Mi4xLjE2ODYyNTEwMDAuMC4wLjA';
  return (
    <div className="container grid">
      <div className='header text-center max-w-xs mx-auto'>
        <img src={myLogoUrl} alt='logo' className='w-11/12 rounded-lg ml-2 my-2.5' />
        <p>Find your perfect trip!</p>
        <p>Designed by insiders who know and love their cities.</p>
      </div>
      <div className='mx-auto mt-4'>
        <h2 className='text-xl font-bold'>Start Browsing</h2>
        <img src={myButtonUrl} alt='citiesButton' className='w-24 rounded-lg o my-6' />
      </div>
      <div className='space-x-16 mx-auto'>
        <p className='mb-6'>Want to build your own MYtinerary?</p>
        <Link to='/logIn' className='underline'>Log In</Link>
        <Link to='/signUp' className='underline'>Sign Up</Link>
      </div>
      <img src={myHomeUrl} alt='homeButton' className='w-10 rounded-lg mx-auto mt-14 mb-5' />
    </div>
  )
}

