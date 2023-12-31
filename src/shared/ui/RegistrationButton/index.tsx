import React from "react";

import "./styles.scss";

interface ButtonProps {
  text: string;
  onClick?: () => void;
  active: "active" | "inactive";
}

export const RegistrationButton: React.FC<ButtonProps> = ({
  text,
  onClick,
  active,
}) => {
  const isActive = active === "active";

  return (
    <button
      onClick={onClick}
      className={`button mt-8 ${
        isActive ? "button--active" : "button--inactive"
      } flex justify-center items-center`}
      disabled={!isActive}
    >
      {text}
    </button>
  );
};
