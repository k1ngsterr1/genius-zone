import React from "react";

import "./styles.scss";

interface UtilityButtonProps {
  text: string;
  type: string;
  buttonType?: string | any;
  isDisabled?: boolean;
  className?: string;
  marginTop: string;
  onClick?: () => void;
}

export const UtilityButton: React.FC<UtilityButtonProps> = ({
  text,
  type,
  buttonType,
  className,
  marginTop,
  isDisabled,
  onClick,
}) => {
  return (
    <button
      disabled={isDisabled}
      onClick={onClick}
      type={buttonType}
      className={`utility-button__${type} ${className} ${marginTop} `}
    >
      {text}
    </button>
  );
};
