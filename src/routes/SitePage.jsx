import SiteInfo from "../components/Site/SiteInfo";

import "./SitePage.scss";

import SITE_DATA from "../assets/Site/SITE_DATA";
import backgroundImg from "../assets/Site/site-bg.jpg";

const SitePage = () => {
  return (
    <div className="sitepage">
      <section className="section1">
        <img src={backgroundImg} alt="" />
        <div className="content">
          <h1>STADIU SANTIER</h1>
          <p className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Numquam
            possimus repudiandae quia doloremque, est, facilis perferendis
            tenetur ea alias laborum adipisci.
          </p>
          <p className="text">
            <b>Program Birou Vanzari</b>
            <br /> LUNI - VINERI: 09:00 - 17:00 <br />
            SAMBATA: 09:00 - 12:00
          </p>
        </div>
      </section>
      <section className="section2">
        {SITE_DATA.map((item, index) => {
          return <SiteInfo key={index} data={item} />;
        })}
      </section>
    </div>
  );
};

export default SitePage;
