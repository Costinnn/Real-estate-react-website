import "./AboutUsPage.scss";

import s1img from "../assets/AboutUs/s1.jpg";

const AboutUsPage = () => {
  return (
    <div className="aboutpage">
      <div className="nav-bg"></div>
      <div className="content">
        <section className="section1">
          <h1>DESPRE VILLAS RESIDENCE</h1>
          <p>Case pentru 3 generatii </p>
          <h4>DE CE SA NE ALEGI PE NOI?</h4>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            Voluptatibus quis doloribus, nesciunt itaque perspiciatis maxime,
            non eligendi odit tempora iure omnis quam quas nisi, et tempore quos
            vero eveniet. Velit? Lorem ipsum dolor sit amet consectetur,
            adipisicing elit. Voluptatibus quis doloribus, nesciunt itaque
            perspiciatis maxime, non eligendi odit tempora iure omnis quam quas
            nisi, et tempore quos vero eveniet. Velit?
          </p>
          <img src={s1img} alt="structure" />
        </section>
      </div>
      <section className="section2">
        <p>Case noi la cheie</p>
        <h1>
          Zona Nicolina, <br /> case construite premium
        </h1>
        <div>
          <span className="material-symbols-outlined">phone_iphone</span>
          <p>0752 000 000</p>
        </div>
        <div>
          <span className="material-symbols-outlined">contact_mail</span>
          <p>contact@villasresidence.ro</p>
        </div>
        <div>
          <span className="material-symbols-outlined">event_available</span>
          <p>Programeaza o vizita</p>
        </div>
      </section>
      <div className="content">
        <section className="section3">
          <p className="bg-text">DESPRE NOI</p>
          <div className="box1">
            <p>
              <span>5</span>ani <br />
              <b>EXPERIENTA IN CONSTRUCTII</b>
            </p>
            <p>
              Avand deja o vasta experienta in constructia locuintelor colective
              si individuale din orasul Iasi
            </p>
            <div>
              <p>Villas Residence - alege-i pe cei mai buni</p>
              <span className="material-symbols-outlined">engineering</span>
            </div>
          </div>
          <div className="box2">
            <p>
              <span>23+</span>
              <br />
              <b> LOCUINTE VANDUTE</b>
              <br />
            </p>
            <p>
              Am reusit sa oferim famillilor care s-au mutat in locuintele
              construite de noi un mediu perfect pentru copii, parinti, bunici
              si animale de companie.
            </p>
          </div>
        </section>
      </div>
    </div>
  );
};

export default AboutUsPage;
