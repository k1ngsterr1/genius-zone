import React from "react";

import "./styles.scss";

interface ModuleProps {
  number: string;
  name: string;
  marginTop?: string;
}

export const Module: React.FC<ModuleProps> = ({ number, name, marginTop }) => {
  return (
    <div className={`module flex items-center justify-start ${marginTop}`}>
      <span className="module__number pl-4">{number}</span>
      <span className="module__name pl-4">{name}</span>
    </div>
  );
};
