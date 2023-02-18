import "./Site.scss";

import s1 from "../../assets/Home/s1.jpg";
import s2 from "../../assets/Home/s2.jpeg";
import s3 from "../../assets/Home/s3.jpg";
import s4 from "../../assets/Home/s4.jpg";
import no1 from "../../assets/Home/no1.png";
import no2 from "../../assets/Home/no2.png";
import no3 from "../../assets/Home/no3.png";
import no4 from "../../assets/Home/no4.png";

const Site = () => {
  return (
    <div className="site">
      <div className="content">
        <h1>Etape santier</h1>
        <div>
          <div className="photos">
            <div className="photo-box">
              <img className="number" src={no1} alt="" />
              <img src={s1} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et
              vitae laudantium rerum voluptates.
            </p>
            <div className="photo-box">
              <img src={s2} alt="" />
              <img className="number" src={no2} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et
              vitae laudantium rerum voluptates.
            </p>
            <div className="photo-box">
              <img className="number" src={no3} alt="" />
              <img src={s3} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et
              vitae laudantium rerum voluptates.
            </p>
            <div className="photo-box">
              <img src={s4} alt="" />
              <img className="number" src={no4} alt="" />
            </div>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et
              vitae laudantium rerum voluptates.
            </p>
          </div>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rem et
            vitae laudantium rerum voluptates alias autem nesciunt, illo
            voluptas delectus quod nulla, animi, officiis laboriosam deserunt
            eum qui ea. Quae.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Site;
