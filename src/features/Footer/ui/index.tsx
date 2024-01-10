import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faTelegram } from "@fortawesome/free-brands-svg-icons/faTelegram";
import { Separator } from "@shared/ui/Separator";
import { Logo } from "@shared/ui/Logo";

import "./styles.scss";

export const Footer = () => {
  return (
    <footer className="footer flex flex-col ">
      <div className="footer__container flex flex-col">
        <nav className="footer__container__nav flex items-center justify-between mt-8 max-[640px]:flex-col">
          <Logo color="white" />
          <div className="w-[40%] flex items-center justify-between max-[640px]:flex-col">
            <Link to="/" className="footer__container__nav--link">
              Главная
            </Link>
            <Link to="/studying" className="footer__container__nav--link">
              Обучение
            </Link>
            <Link to="/studying" className="footer__container__nav--link">
              Мои курсы
            </Link>
            <Link to="/teaching" className="footer__container__nav--link">
              Преподование
            </Link>
            <Link to="/chats" className="footer__container__nav--link">
              Чаты
            </Link>
          </div>
          <div className="footer__container__nav__icons--icon w-[5%] flex items-center justify-between max-[640px]:justify-center mt-4">
            <FontAwesomeIcon
              icon={faInstagram}
              className="footer__container__nav__icons--icon"
            />
            <FontAwesomeIcon
              icon={faTelegram}
              className="footer__container__nav__icons--icon max-[640px]:ml-3"
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
