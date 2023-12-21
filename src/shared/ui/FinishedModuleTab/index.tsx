import React, { useState } from "react";
import IconButton from "@mui/material/IconButton";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import { KebabMenu } from "../KebabMenu";

import "./styles.scss";
import { UtilityButton } from "../UtilityButton";

interface FinishedTabProps {
  title: string;
  image: string;
  number: string;
  description: string;
}

export const FinishedModuleTab: React.FC<FinishedTabProps> = ({
  title,
  image,
  description,
}) => {
  return (
    <div className="finished-module">
      <div className="finished-module__upper">
        <div className="finished-module__upper__image-and-content">
          <img
            src={image}
            alt="image"
            className="finished-module__upper__image-and-content__image"
          />
          <div className="finished-module__upper__image-and-content__content">
            <span className="finished-module__upper__image-and-content__content__title fond-semibold">
              {title}
            </span>
            <span className="finished-module__upper__image-and-content__content__description">
              {description}
            </span>
          </div>
        </div>
        <UtilityButton text="Редактировать" type="filled-btn" />
      </div>
    </div>
  );
};
