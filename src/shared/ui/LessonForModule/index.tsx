import React from "react";
import { UtilityButton } from "../UtilityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface LessonForModuleProps {
  lessonTitle: string;
  lessonImage: string | undefined;
}

export const LessonForModule: React.FC<LessonForModuleProps> = ({
  lessonImage,
  lessonTitle,
}) => {
  return (
    <div className="lesson-module-tab flex items-center justify-between">
      <img
        src={lessonImage}
        className="lesson-module-tab__image"
        alt="lesson_image"
      />
      <span className="lesson-module-tab__text ">{lessonTitle}</span>
      <div className="lesson-module-tab__buttons flex items-center">
        <UtilityButton
          text="Редактировать"
          type="filled-btn"
          marginTop="mt-0"
        />
        <FontAwesomeIcon
          icon={faClose}
          className="lesson-module-tab__cross ml-4"
        />
      </div>
    </div>
  );
};
