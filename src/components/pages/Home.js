import { useState, useEffect } from "react";
import "./Pages.scss";
import firma from "../assets/firma.png";
import cuadroSombra from "../assets/cuadroSombra.png";
import firmando from "../assets/firmando.png";
import imgprincipal from "../assets/imgprincipal.png";
import next from "../assets/next.svg";
import prev from "../assets/prev.svg";

const Home = () => {
  const [carPos, setCarPos] = useState(2);

  const moveLeft = () => {
    carPos === 2 ? setCarPos(1) : carPos === 1 ? setCarPos(3) : setCarPos(2);
  };

  const moveRight = () => {
    carPos === 2 ? setCarPos(3) : carPos === 3 ? setCarPos(1) : setCarPos(2);
  };

  useEffect(() => {
    const slider = document.querySelector(".items");
    const slides = document.querySelectorAll(".item");
    const button = document.querySelectorAll(".button");

    let current = Math.floor(Math.random() * slides.length);
    let prev = current > 0 ? current - 1 : slides.length - 1;
    let next = current < slides.length - 1 ? current + 1 : 0;

    const update = () => {
      console.log(current);
      slides.forEach((it) => {
        it.classList.remove("active");
        it.classList.remove("prev");
        it.classList.remove("next");
      });

      slides[current]?.classList.add("active");
      slides[prev]?.classList.add("prev");
      slides[next]?.classList.add("next");
    };

    for (let i = 0; i < button.length; i++) {
      button[i].addEventListener("click", () => (i == 0 ? gotoPrev() : gotoNext()));
    }

    const gotoPrev = () => (current > 0 ? gotoNum(current - 1) : gotoNum(slides.length - 1));
    const gotoNext = () => (current < slides.length - 1 ? gotoNum(current + 1) : gotoNum(0));

    const gotoNum = (number) => {
      current = number;
      prev = current > 0 ? current - 1 : slides.length - 1;
      next = current < slides.length - 1 ? current + 1 : 0;

      update();
    };
  }, [carPos]);

  const handleClick = (i) => {
    setCarPos(i);
  };

  return (
    <div className="home">
      <header>
        <img src={firma} alt="firma" />
      </header>
      <section className="home__carousel">
        <div className="items">
          <div className="item active">
            <img src={imgprincipal} />
          </div>
          <div className=" item next">
            <img src={cuadroSombra} style={{ objectPosition: "100% 60%" }} />
          </div>
          <div className="item prev">
            <img src={firmando} style={{ objectPosition: "100% 38%" }} />
          </div>
          <div className="button-container">
            <div className="button prev" onClick={() => handleClick(0)}></div>
            <div className="button next" onClick={() => handleClick(1)}></div>
          </div>
        </div>

        {/* {carPos === 2 ? (
          <>
            <img className="imgRight" src={firmando} alt="firmando" />
            <img className="imgMiddle" src={imgprincipal} alt="imgprincipal" />
            <img className="imgLeft" src={cuadroSombra} alt="cuadroSombra" />
          </>
        ) : carPos === 1 ? (
          <>
            <img className="imgRight" src={imgprincipal} alt="firmando" />
            <img className="imgMiddle" src={cuadroSombra} style={{ objectPosition: "100% 60%" }} alt="imgprincipal" />
            <img className="imgLeft" src={firmando} alt="cuadroSombra" />
          </>
        ) : (
          <>
            <img className="imgRight" src={cuadroSombra} alt="firmando" />
            <img className="imgMiddle" style={{ objectPosition: "100% 38%" }} src={firmando} alt="imgprincipal" />
            <img className="imgLeft" src={imgprincipal} alt="cuadroSombra" />
          </>
        )} */}
      </section>
    </div>
  );
};

export default Home;
