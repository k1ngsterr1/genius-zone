import React from "react";
interface ButtonProps {
  text: string;
  onClick: () => void;
  active: "active" | "inactive";
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, active }) => {
  const isActive = active === "active";

  return (
    <button
      onClick={onClick}
      className={`button ${
        isActive ? "button--active" : "button--inactive"
      } flex justify-center items-center`}
      disabled={!isActive} // The button will be disabled if not active
    >
      {text}
    </button>
  );
};
