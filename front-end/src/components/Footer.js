import { Link } from "react-router-dom";

export const Footer = () => {
  const myHomeUrl =
    "https://firebasestorage.googleapis.com/v0/b/ubiqum-academy.appspot.com/o/homeIcon.png?alt=media&token=be34d820-8859-4f7a-9cdb-1bea154ff0d3&_gl=1*d9nt9v*_ga*MTQ2NTQ4MDUwOS4xNjg0MzE4OTM4*_ga_CW55HF8NVT*MTY4NjI1MDAzOS40Mi4xLjE2ODYyNTEwMDAuMC4wLjA";
  return (
    <div>
      <div className="bg-red-500 p-4 text-white text-center fixed left-0 bottom-0 w-full">
        <Link to="/">
          <img
            src={myHomeUrl}
            alt="homeButton"
            className="h-5 rounded-lg mx-auto"
          />
        </Link>
      </div>
    </div>
  );
};
