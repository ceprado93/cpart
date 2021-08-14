import "./Pages.scss";
import firma from "../assets/firma.png";

const Contact = () => {
  return (
    <section className="contact__section">
      <img src={firma} alt="firma" />
      <form>
        <div className="form-line">
          <input type="text" placeholder="NOMBRE" required />
          <input type="text" placeholder="APELLIDOS" required />
        </div>
        <div className="form-line">
          <input type="text" placeholder="EMAIL" required />
        </div>
        <div className="form-line">
          <input type="text" placeholder="TELEFONO" required />
        </div>
        <div className="form-line">
          <textarea placeholder="CONSULTA" rows="4" required />
        </div>

        <button type="submit" className="contactForm__btn">
          ENVIAR
        </button>
      </form>
    </section>
  );
};
export default Contact;
