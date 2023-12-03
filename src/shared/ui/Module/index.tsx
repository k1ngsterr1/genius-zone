import React from "react";

interface ModuleProps {
  number: string;
  name: string;
}

export const Module: React.FC<ModuleProps> = ({ number, name }) => {
  return (
    <div className="module flex items-center justify-between">
      <span className="module__number">{number}</span>
      <span className="module__name">{name}</span>
    </div>
  );
};
