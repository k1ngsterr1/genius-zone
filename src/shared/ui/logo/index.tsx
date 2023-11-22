import logo from "@assets/logo.svg";

import "./styles.scss";

export const Logo = () => {
  return (
    <div className="logo-container flex items-center">
      <img src={logo} className="logo-container__image" alt="logo" />
      <span className="ml-2 logo-container__text">
        Genius <span className="blue">Zone</span>
      </span>
    </div>
  );
};
