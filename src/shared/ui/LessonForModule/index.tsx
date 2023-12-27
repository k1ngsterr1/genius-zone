import React from "react";
import { useNavigate } from "react-router-dom";
import { UtilityButton } from "../UtilityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export interface LessonForModuleProps {
  lessonTitle: string;
  lessonNum: string | number;
  lessonImage: string | undefined;
  deleteLesson: () => void;
}

export const LessonForModule: React.FC<LessonForModuleProps> = ({
  lessonImage,
  lessonTitle,
  lessonNum,
  deleteLesson,
}) => {
  const navigate = useNavigate();

  const handleNavigateToLessonSettings = () => {
    navigate(`/lesson-settings/${lessonNum}/lesson`);
  };

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
          onClick={handleNavigateToLessonSettings}
        />
        <FontAwesomeIcon
          icon={faClose}
          onClick={deleteLesson}
          className="lesson-module-tab__cross ml-4"
        />
      </div>
    </div>
  );
};
