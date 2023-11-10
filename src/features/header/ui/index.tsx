import { Logo } from "@shared/index";
import { Link } from "react-router-dom";

import "./styles.scss";
import { Button } from "@shared/ui/button";

export const Header = () => {
  return (
    <header className="header flex items-center justify-between">
      <div className="header__container flex items-center justify-between mt-16">
        <Logo />

        <div className="header__links flex items-center justify-between">
          <Link to="/" className="header__links--link">
            Главная
          </Link>
          <Link to="/study" className="header__links--link">
            Обучение
          </Link>
          <Link to="/gift" className="header__links--link">
            Преподование
          </Link>
          <div className="buttons flex items-center justify-between ml-4">
            <Button text="Войти" className="regular-button" />
            <Button text="Регистрация" className="outline-button" />
          </div>
        </div>
      </div>
    </header>
  );
};
