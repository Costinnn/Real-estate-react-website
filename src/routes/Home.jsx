import Navigation from "../components/Home/s1/Navigation";
import Social from "../components/Home/s1/Social";
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery";
import Site from "../components/Home/Site";

import { useState } from "react";

import "./Home.scss";

import backgroundImg from "../assets/Home/1.jpg";
import frontImg from "../assets/Home/2.jpg";

const Home = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    if (!menuOpen) {
      setMenuOpen(true);
    } else {
      setMenuOpen(false);
    }

    console.log("here");
  };

  return (
    <>
      <div className="home-section1">
        <img src={backgroundImg} alt="" />
        <div className="black-filter"></div>

        <div className="home-s1-content">
          <p className="logo">Villas residence</p>
          <svg
            onClick={handleMenu}
            width="50px"
            height="50px"
            viewBox="0 0 24 24"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M2 7a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm0 5a1 1 0 0 1 1-1h18a1 1 0 1 1 0 2H3a1 1 0 0 1-1-1zm1 4a1 1 0 1 0 0 2h18a1 1 0 1 0 0-2H3z"
            />
          </svg>
          <Navigation
            handleMenu={handleMenu}
            showNav={menuOpen ? "shownav" : ""}
          />
          <p className="text-design1">Rafinament</p>
          <h1>Case de lux la marginea orasului</h1>
          <p className="text-design2">Eleganta</p>
          <p className="text-design3">Calitate</p>
          <img src={frontImg} alt="" />
          <Social />
        </div>
      </div>
      <About />
      <Gallery />
      <Site />
    </>
  );
};

export default Home;
