import "./About.scss";

import aboutImg from '../../assets/Home/about.jpg'

const About = () => {
  return (
    <div className="s2-home">
      <h1>Gaseste locul potrivit pentru familia ta</h1>
      <div className="numbers">
        <div>
          <p>27+</p>
          <p>Case vandute</p>
        </div>
        <div>
          <p>62+</p>
          <p>Clienti multumiti</p>
        </div>
      </div>
      <div className="mission">
        <p>
          Misiunea noastra este de a construi locuinte calitative pentru
          persoane care-si iubesc familiile. Locuinte care vor servi cel putin
          pentru 3 generatii.
        </p>
        <button className="contact-btn">Contact</button>
        <button className="aboutus-btn">Despre noi</button>
      </div>
      <img src={aboutImg} alt="" />
    </div>
  );
};

export default About;
