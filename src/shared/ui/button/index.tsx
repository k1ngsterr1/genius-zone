import React from "react";

interface ButtonProps {
  text: string;
  onClick: () => void;
  active: string;
}

export const Button: React.FC<ButtonProps> = ({ text, onClick, active }) => {
  return (
    <button
      onClick={onClick}
      className={`button--${active} flex justify-center items-center`}
    >
      {text}
    </button>
  );
};
