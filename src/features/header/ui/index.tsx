import { Logo } from "@shared/index";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/button";

import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();

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
            <Button
              text="Войти"
              className="regular-button"
              onClick={() => navigate("/login")}
            />
            <Button
              text="Регистрация"
              className="outline-button"
              onClick={() => navigate("/registration")}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
