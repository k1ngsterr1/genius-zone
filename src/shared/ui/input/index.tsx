import React from "react";

import "./styles.scss";

type InputProps = React.InputHTMLAttributes<HTMLInputElement> & {};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ ...props }, ref) => {
    return <input className="input text-gray-600" ref={ref} {...props} />;
  }
);

Input.displayName = "Input";
