import { Logo } from "@shared/index";
import { Link } from "react-router-dom";

import "./styles.scss";

export const Header = () => {
  return (
    <header className="header flex items-center justify-between">
      <div className="header__container flex items-center justify-between mt-8">
        <Logo />
        <div className="header__links flex items-center justify-between">
          <Link to="/" className="link">
            Главная
          </Link>
          <Link to="/study" className="link">
            Обучение
          </Link>
          <Link to="/gift" className="link">
            Преподование
          </Link>
        </div>
      </div>
    </header>
  );
};
