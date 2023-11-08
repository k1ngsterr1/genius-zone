import React from "react";

interface InputProps {
  placeholder?: string;
  inputType?: string;
  inputValue?: string;
}

export const Input: React.FC<InputProps> = ({
  placeholder,
  inputType,
  inputValue,
}) => {
  return (
    <input
      className="input"
      type={inputType}
      value={inputValue}
      placeholder={placeholder}
    />
  );
};
