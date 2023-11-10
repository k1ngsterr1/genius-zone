import React from "react";
import "./styles.scss";

interface ButtonProps {
  className: string;
  text: string;
}

export const Button: React.FC<ButtonProps> = ({ className, text }) => {
  return <button className={className}>{text}</button>;
};
