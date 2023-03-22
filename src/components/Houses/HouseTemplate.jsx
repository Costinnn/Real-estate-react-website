import "./HouseTemplate.scss";

const HouseTemplate = ({ house }) => {
  return (
    <div className="house-template">
      <img src={house.img} alt="" />
      <h3>{house.title}</h3>
      <p>
        Suprafata: {house.houseArea}mp, Curte: {house.yardArea}mp
      </p>
    </div>
  );
};

export default HouseTemplate;
