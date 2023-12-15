import React from "react";

import "./styles.scss";

interface ModuleSideProps {
  number: string;
  title: string;
}

export const ModuleSide: React.FC<ModuleSideProps> = ({ number, title }) => {
  return (
    <div className="module-side">
      <span className="module-side__number">{number}</span>
      <span className="module-side__title">{title}</span>
    </div>
  );
};
