import "./Pages.scss";
import firma from "../assets/firma.png";
import portrait from "../assets/portrait.jpg";

const Bio = () => {
  return (
    <section className="bio__section">
      <img src={firma} alt="firma" />
      <div className="bio__info">
        <img src={portrait} alt="firma" />
        <div className="bio__text">
          <p>
            Celia Pérez (1996), graduada en Bellas Artes e Ingeniería en Diseño Industrial, comienza su carrera como artista independiente en 2019. Actualmente se encuentra asentada en Bilbao, donde
            lleva a cabo su actividad profesional.
          </p>
          <p>
            Su principal fuente de inspiración son los colores y las texturas de la naturaleza, que abstrae para dar vida a sus obras. Trabaja la técnica mixta sobre lienzo a través de la exploración
            de diferentes materiales de construcción, por lo tanto, sus obras están en constante desarrollo.
          </p>
        </div>
      </div>
    </section>
  );
};
export default Bio;
