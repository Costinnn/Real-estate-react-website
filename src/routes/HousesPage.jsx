import "./HousesPage.scss";
import { Link } from "react-router-dom";

import HouseTemplate from "../components/Houses/HouseTemplate";

import GALLERY_DATA from "../assets/Home/data/GALLERY_DATA";

const HousesPage = () => {
  return (
    <div className="housespage">
      <div className="nav-bg"></div>
      <section className="section1">
        <h1>CASE NOI IN IASI</h1>
        <p>
          Suprafete utile intre 95mp si 120mp, iar teren intre 350mp si 500mp
        </p>
        {GALLERY_DATA.map((house, index) => (
          <HouseTemplate house={house} key={index} />
        ))}
      </section>
      <section className="section2">
        <p>Case noi la cheie</p>
        <h1>
          Zona Nicolina, <br /> case construite premium
        </h1>
        <div>
          <span className="material-symbols-outlined">phone_iphone</span>
          <br />
          <a href="tel:0752 000 000">0752 000 000</a>
        </div>
        <div>
          <span className="material-symbols-outlined">contact_mail</span>
          <br />
          <a href="mailto:contact@villasresidence.ro">
            contact@villasresidence.ro
          </a>
        </div>
        <div>
          <span className="material-symbols-outlined">event_available</span>
          <br />
          <Link to="/contact">Programeaza o vizita</Link>
        </div>
      </section>
      <section className="section3">
        <h2>Facilitati</h2>
        <ul>
          <li>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            Gaz metan
          </li>
          <li>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            Curent electric
          </li>
          <li>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            Strada asfaltata
          </li>
          <li>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            Statie transport comun
          </li>
          <li>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            Strada privata
          </li>
          <li>
            <span className="material-symbols-outlined">arrow_drop_up</span>
            Canalizare
          </li>
        </ul>
      </section>
    </div>
  );
};

export default HousesPage;
