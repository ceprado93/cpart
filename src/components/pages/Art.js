import { useState } from "react";
import "./Pages.scss";
import firma from "../assets/firma.png";
import cuadros from "../assets/cuadros.png";
import seriex from "../assets/seriex.png";
import oladiptico from "../assets/olaDiptico.svg";
import olapared from "../assets/olapared.svg";
import scarsbig from "../assets/scarsbig.png";
import scarspared from "../assets/scarspared.png";
import otono from "../assets/otono.svg";
import otonopared from "../assets/otonopared.svg";
import marrakech from "../assets/marrakech.svg";
import marrak from "../assets/marrak.svg";
import Teguise from "../assets/Teguise.png";
import teguiseC from "../assets/teguiseC.jpg";
import nieve from "../assets/nieve.jpg";
import nievepared from "../assets/nievepared.jpg";

const Art = () => {
  const [paintings, setPaintings] = useState(false);

  const handlePaintings = () => {
    paintings ? setPaintings(false) : setPaintings(true);
  };

  return (
    <>
      <section className="art__section">
        <img src={firma} alt="firma" />
        <div className="art__block">
          <article>
            <h3>Otras obras</h3>
            <img onClick={() => handlePaintings()} src={cuadros} alt="cuadros" />
          </article>
          <article>
            <h3>Serie "X"</h3>
            <img src={seriex} alt="seriex" />
          </article>
          <article>
            <h3>Serie "X"</h3>
            <img src={seriex} alt="seriex" />
          </article>
        </div>
      </section>

      {paintings && (
        <div className="painting__modal">
          <button className="painting__modal-button" onClick={() => handlePaintings()}>
            x
          </button>
          <div className="linea_cuadro-izq">
            <img className="wide__img" src={oladiptico} alt="la-ola" />
            <img className="narrow__img" src={olapared} alt="la-ola" />
            <p>
              La ola <br></br> Díptico 100x73cm
            </p>
          </div>
          <div className="linea_cuadro-drch">
            <p>
              Scars <br></br> 100x73cm
            </p>
            <img className="narrow__img" src={scarspared} alt="scars" />
            <img className="wide__img" src={scarsbig} alt="scars" />
          </div>
          <div className="linea_cuadro-izq">
            <img className="wide__img" src={otono} alt="Otoño" />
            <img className="narrow__img" src={otonopared} alt="Otoño" />
            <p>
              Otoño, la primavera <br></br>del invierno<br></br> Díptico 100x200cm
            </p>
          </div>
          <div className="linea_cuadro-drch">
            <p>
              Marrakech, la Ciudad Roja <br></br> Díptico 80x50cm
            </p>
            <img className="narrow__img" src={marrakech} alt="marrakech" />
            <img className="wide__img" src={marrak} alt="marrakech" />
          </div>
          <div className="linea_cuadro-izq">
            <img className="wide__img" src={teguiseC} alt="Teguise" />
            <img className="narrow__img" src={Teguise} alt="Teguise" />
            <p>
              Teguise<br></br> 40x40cm
            </p>
          </div>
          <div className="linea_cuadro-drch">
            <p>
              Nieve primavera <br></br> 60x80cm
            </p>
            <img className="narrow__img" src={nievepared} alt="nieve primavera" />
            <img className="wide__img" src={nieve} alt="nieve primavera" />
          </div>
        </div>
      )}
    </>
  );
};
export default Art;
