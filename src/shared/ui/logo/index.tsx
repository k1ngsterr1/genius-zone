import logo from "@assets/logo.svg";

import "./styles.scss";

interface LogoProps {
  color?: string;
}

export const Logo: React.FC<LogoProps> = ({ color }) => {
  return (
    <div className="logo-container flex items-center">
      <img src={logo} className="logo-container__image" alt="logo" />
      <span className={`ml-2 logo-container__text ${color}`}>
        Genius <span className={`blue ${color}`}>Zone</span>
      </span>
    </div>
  );
};
