import { useNavigate } from "react-router-dom";
import logo from "@assets/logo.svg";

import "./styles.scss";

interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    <div className="logo-container flex items-center" onClick={navigateToMain}>
      <img src={logo} className="logo-container__image" alt="logo" />
      <span className={`ml-2 logo-container__text ${color}`}>
        Genius <span className={`blue ${color}`}>Zone</span>
      </span>
    </div>
  );
};
