import { useState, useEffect } from "react";
import "./Pages.scss";
import firma from "../assets/firma.png";
import malawi from "../assets/malawi.svg";
import grabado from "../assets/grabado.svg";
import next from "../assets/nextBlack.svg";
import prev from "../assets/prevBlack.svg";

const Grabados = () => {
  const [idx, setIdx] = useState(undefined);
  const [showModal, setShowModal] = useState(false);

  const toogleModal = (e) => {
    console.log(e);
    setIdx(e);
    setShowModal(true);
  };

  const handleModal = () => {
    idx === "1" ? setIdx("2") : setIdx("1");
  };
  return (
    <section className="grabados__section">
      <img src={firma} alt="firma" />
      <div className="grabado__list">
        <div style={{ position: "relative", textalign: "center", height: "100%" }} onClick={() => toogleModal("1")} id="article__destacadas">
          <article className="articleCard" style={{ backgroundImage: `url(${malawi})` }}></article>
          <h2 id="SemiBold">Malawi</h2>
        </div>
        <div key="2" style={{ position: "relative", textalign: "center", height: "100%" }} onClick={() => toogleModal("2")} id="article__destacadas">
          <article className="articleCard" style={{ backgroundImage: `url(${grabado})` }}></article>
          <h2 id="SemiBold">Grabado</h2>
        </div>
        {/* <img src={malawi} alt="malawi" />
        <img src={grabado} alt="grabado" /> */}
      </div>
      {showModal && (
        <div className="grabados__modal">
          <button onClick={() => setShowModal(false)}>X</button>
          <div className="grabados__modal-block">
            <img className="prev__img" src={prev} alt="prev" onClick={() => handleModal()} />
            {idx === "1" ? (
              <div className="grabados__modal-main">
                <img className="grabago__img" src={malawi} alt="malawi" />
                <h4>Malawi</h4>
                <p>Xilografía - 35x25cm</p>
              </div>
            ) : (
              <div className="grabados__modal-main">
                <img className="grabago__img" src={grabado} alt="malawi" />
                <h4>Malawi</h4>
                <p>Xilografía - 35x25cm</p>
              </div>
            )}
            <img className="next__img" onClick={() => handleModal()} src={next} alt="next" />
          </div>
        </div>
      )}
    </section>
  );
};
export default Grabados;
