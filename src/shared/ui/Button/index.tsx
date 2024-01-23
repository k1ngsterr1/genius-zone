import React from "react";
import "./styles.scss";

interface ButtonProps {
  className: string;
  text: string;
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: () => void;
}

export const Button: React.FC<ButtonProps> = ({
  className,
  text,
  onClick,
  type = "button",
}) => {
  return (
    <button className={className} onClick={onClick} type={type}>
      {text}
    </button>
  );
};
