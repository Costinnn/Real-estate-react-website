import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";

import GALLERY_DATA from "../assets/Home/data/GALLERY_DATA";

import "./HousePage.scss";

const HousePage = () => {
  const urlId = useParams();
  const project = GALLERY_DATA.filter((el) => el.id === Number(urlId.id));
  return (
    <section className="section-narrow project">
      <p>{project[0].title}</p>
    </section>
  );
};

export default HousePage;
