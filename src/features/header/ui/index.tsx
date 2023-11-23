// Components
import { Logo } from "@shared/index";
import { Link, useNavigate } from "react-router-dom";
import { Button } from "@shared/ui/button";
import { UserTab } from "@shared/ui/UserTab";
import Hamburger from "hamburger-react";

// Hooks
import { useOpenMenu } from "@shared/lib/hooks/useOpenMenu";
import { useSelector } from "react-redux";

import "./styles.scss";

export const Header = () => {
  const navigate = useNavigate();

  // Redux Open Menu
  const isMenuOpen = useSelector((state: any) => state.menu.isOpen);
  const openMenu = useOpenMenu(isMenuOpen);

  return (
    <header className="header flex items-center justify-between">
      <div className="header__container flex items-center justify-between mt-16  max-[640px]:hidden">
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
            {/* <UserTab firstName="" lastName="" userImage="" /> */}
          </div>
        </div>
      </div>
      <div className="header__mob-container flex items-center justify-between max-[640px]:flex min-[640px]:hidden">
        <Logo />
        <Hamburger color="#0B1887" onToggle={openMenu} />
      </div>
    </header>
  );
};
