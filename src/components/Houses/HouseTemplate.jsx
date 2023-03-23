import "./HouseTemplate.scss";

import { Link } from "react-router-dom";

const HouseTemplate = ({ house }) => {
  return (
    <Link to={`/houses/${house.id}`} className="house-template">
      <img src={house.img} alt="" />
      <h3>{house.title}</h3>
      <p>
        Suprafata: {house.houseArea}mp, Curte: {house.yardArea}mp
      </p>
    </Link>
  );
};

export default HouseTemplate;
