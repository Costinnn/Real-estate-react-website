import Social from "../components/Home/s1/Social";
import About from "../components/Home/About";
import Gallery from "../components/Home/Gallery";
import Site from "../components/Home/Site";

import "./Home.scss";

import mobileBg from "../assets/Home/mobile-bg.jpg";
import desktopBg from "../assets/Home/desktop-bg.jpg";
import frontImg from "../assets/Home/header-img.jpg";

const Home = () => {
  return (
    <>
      <div className="home-section1">
        <div className="black-filter"></div>
        <div className="home-s1-content">
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
