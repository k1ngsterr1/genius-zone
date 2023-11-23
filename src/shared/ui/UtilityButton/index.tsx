import React from "react";

import "./styles.scss";

interface UtilityButtonProps {
  text: string;
  type: string;
  className?: string;
  marginTop: string;
  onClick: () => void;
}

export const UtilityButton: React.FC<UtilityButtonProps> = ({
  text,
  type,
  className,
  marginTop,
  onClick,
}) => {
  return (
    <button
      onClick={() => onClick}
      className={`utility-button__${type} ${className} ${marginTop} `}
    >
      {text}
    </button>
  );
};
