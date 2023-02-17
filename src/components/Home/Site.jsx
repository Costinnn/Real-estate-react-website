import "./Site.scss";

import s1 from "../../assets/Home/s1.jpg";
import s2 from "../../assets/Home/s2.jpeg";
import s3 from "../../assets/Home/s3.jpg";
import s4 from "../../assets/Home/s4.jpg";

const Site = () => {
  return (
    <div className="site">
      <div className="content">
        <h1>Etape santier</h1>
        <div>
          <div className="photos">
            <img src={s1} alt="" />
            <img src={s2} alt="" />
            <img src={s3} alt="" />
            <img src={s4} alt="" />
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
