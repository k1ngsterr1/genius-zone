import { MenuLink } from "@shared/ui/Link";
import { Button } from "@shared/ui/Button";
import { Slide } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

export const Menu = () => {
  const navigate = useNavigate();

  return (
    <>
      <Slide direction="right" className="flex flex-col items-center">
        <aside className="menu flex flex-col items-center mt-20">
          <MenuLink text="Главная" url="/" />
          <MenuLink text="Обучение" url="/teaching" />
          <MenuLink text="Преподование" url="/studying" />
          <Button
            text="Войти"
            className="regular-button mt-16"
            onClick={() => navigate("/login")}
          />
          <Button
            text="Регистрация"
            className="outline-button mt-8"
            onClick={() => navigate("/registration")}
          />
        </aside>
      </Slide>
    </>
  );
};
