import "./Layout.scss";
import mail from "../assets/email.svg";
import insta from "../assets/insta.svg";

const Footer = () => {
  return (
    <footer>
      <div className="footer__info">
        <div>
          <img src={mail} alt="mail" />
          <p>celiaperez.art@gmail.com</p>
        </div>
        <p>|</p>
        <div>
          <img src={insta} alt="instagram" />
          <p>cperez_art</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
