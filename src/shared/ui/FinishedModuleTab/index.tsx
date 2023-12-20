import React from "react";

import "./styles.scss";

interface FinishedTabProps {
  title: string;
  image: string;
  number: string;
  description: string;
}

export const FinishedModuleTab: React.FC<FinishedTabProps> = ({
  title,
  image,
  number,
  description,
}) => {
  return (
    <div className="finished-module">
      <div className="finished-module__upper">
        <img
          src={image}
          alt="image"
          className="finished-module__upper__image"
        />
        <div className="finished-module__upper__content">
          <span className="finished-module__upper__content__title fond-semibold">
            {title}
          </span>
          <span className="finished-module__upper__content__description">
            {description}
          </span>
        </div>
      </div>
    </div>
  );
};
