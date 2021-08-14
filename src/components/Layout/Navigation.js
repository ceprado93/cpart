import { Link, useLocation } from "react-router-dom";
import "./Layout.scss";

const Navigation = () => {
  let location = useLocation();

  return (
    <div className="navigation">
      <Link to="/">Celia Pérez</Link>
      <ul>
        <Link to="/arte" className={location.pathname === "/arte" && "selected"}>
          Arte
        </Link>
        <Link to="/grabados" className={location.pathname === "/grabados" && "selected"}>
          Grabados
        </Link>
        <Link to="/bio" className={location.pathname === "/bio" && "selected"}>
          Bio
        </Link>
        <Link to="/contacto" className={location.pathname === "/contacto" && "selected"}>
          Contacto
        </Link>
      </ul>
    </div>
  );
};

export default Navigation;
