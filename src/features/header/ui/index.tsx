import { Logo } from "@shared/index";
import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header className="header flex items-center justify-between">
      <div className="header__content mt-8 flex items-center justify-between">
        <Logo />
        <div className="header__links">
          <Link to="/">Главная</Link>
          <Link to="/study">Обучение</Link>
          <Link to="/gift">Преподование</Link>
        </div>
      </div>
    </header>
  );
};
