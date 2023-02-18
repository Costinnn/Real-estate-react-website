import "./Footer.scss";

import logo from "../assets/Global/logo.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <img src={logo} alt="logo" />
        <div>
          <div className="info">
            <h3>VILLAS RESIDENCE</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Illum
              nihil aspernatur debitis, maxime dignissimos exercitationem
              laboriosam explicabo iste corporis culpa.
            </p>
            <p>
              <b> LUNI - VINERI:</b> 09:00 - 17:00 <br />
              <b> SAMBATA:</b> 09:00 - 12:00
            </p>
          </div>
          <div className="contact">
            <h3>DATE DE CONTACT</h3>
            <p>
              <b>BIROU VANZARI</b>
              <br /> Soseaua Nicolina, nr. 1, Iasi 700522
            </p>
            <p>
              <b> TELEFON:</b> 0752 000 000
            </p>
            <p>
              <b>EMAIL:</b> contact@villasresidence.ro
            </p>
          </div>
          <div className="houses">
            <h3>CASE DISPONIBILE</h3>
            <p>Casa de 95mp</p>
            <p>Casa de 110mp</p>
            <p>Casa de 130mp</p>
            <button>VEZI CASE</button>
          </div>
        </div>
        <p>Copyright 2023 Villas Residence</p>
      </div>
    </footer>
  );
};

export default Footer;
