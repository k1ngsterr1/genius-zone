import React from "react";

import "./styles.scss";

interface CategoryTabProps {
  name: string;
  level: string;
}

export const CategoryTab: React.FC<CategoryTabProps> = ({ name, level }) => {
  return (
    <div className="category-tab flex flex-col items-start">
      <span className="category-tab__text">{name}</span>
      <span className="category-tab__level mt-5">{level} Уровень</span>
    </div>
  );
};
