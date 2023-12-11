import React from "react";

import "./styles.scss";

interface ModuleItem {
  number: string;
  name: string;
  marginTop?: string;
}

interface ModuleProps {
  modules: ModuleItem[];
}

export const Module: React.FC<ModuleProps> = ({ modules }) => {
  return (
    <>
      {modules.map((module, index) => (
        <div
          key={index}
          className={`module flex items-center justify-start ${module.marginTop}`}
        >
          <span className="module__number pl-4">{module.number}</span>
          <span className="module__name pl-4">{module.name}</span>
        </div>
      ))}
    </>
  );
};
