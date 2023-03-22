import "./ContactPage.scss";

const ContactPage = () => {
  return (
    <div className="contactpage">
      <section className="section1">
        <div className="content">
          <div>
            <p className="bg-text">VILLAS RESIDENCE</p>
            <h1>CONTACTEAZA-NE</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Animi
              fuga dignissimos similique inventore suscipit modi maiores impedit
              rem autem architecto!
            </p>
          </div>
          <form>
            <div>
              <input type="text" placeholder="Nume" maxLength="25" required />
              <input type="email" placeholder="Email" maxLength="40" />
            </div>
            <div>
              <input
                type="text"
                placeholder="Telefon"
                maxLength="20"
                required
              />
              <input type="text" placeholder="Subiect" maxLength="35" />
            </div>
            <input
              type="text"
              placeholder="Ofera mai multe informatii."
              maxLength="500"
            />
            <button>TRIMITE MESAJ</button>
          </form>
        </div>
      </section>
      <section className="section2">
        <div>
          <span className="material-symbols-outlined">map</span>
          <h3>Viziteaza-ne birou</h3>
          <p>Soseaua Nicolina, nr. 1, Iasi 700522</p>
        </div>
        <div>
          <span className="material-symbols-outlined">phone_iphone</span>
          <h3>Suna-ne</h3>
          <p>0752 000 000</p>
        </div>
        <div>
          <span className="material-symbols-outlined">contact_mail</span>
          <h3>Trimite un email</h3>
          <p>contact@villasresidence.ro</p>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;
