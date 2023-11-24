import { Logo } from "@shared/index";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";

import "./styles.scss";
import { Separator } from "@shared/ui/Separator";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col">
      <div className="footer__container flex flex-col">
        <nav className="footer__container__nav flex items-center justify-between mt-8">
          <Logo color="white" />
          <div className="w-[40%] flex items-center justify-between">
            <Link to="/" className="footer__container__nav--link">
              Главная
            </Link>
            <Link to="/studying" className="footer__container__nav--link">
              Обучение
            </Link>
            <Link to="/teaching" className="footer__container__nav--link">
              Преподование
            </Link>
          </div>
          <div className="footer__container__nav__icons--icon w-[5%] flex items-center justify-between">
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer__container__nav__icons--icon"
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className="footer__container__nav__icons--icon"
            />
          </div>
        </nav>
        <Separator width="w-[100%]" margin="mt-6 mb-6" color="bg-white-100" />
        <span className="footer__container__text mb-4">
          Genius Zone All Rights Reserved 2023. ©
        </span>
      </div>
    </footer>
  );
};
