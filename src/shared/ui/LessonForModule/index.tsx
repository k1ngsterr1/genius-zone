import React from "react";
import { useNavigate } from "react-router-dom";
import { UtilityButton } from "../UtilityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClose } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export interface LessonForModuleProps {
  lessonTitle: string;
  courseID: any;
  moduleNum: string | number;
  lessonNum: string | number;
  lessonImage: string | undefined;
  deleteLesson: () => void;
}

export const LessonForModule: React.FC<LessonForModuleProps> = ({
  lessonImage,
  lessonTitle,
  courseID,
  moduleNum,
  lessonNum,
  deleteLesson,
}) => {
  const navigate = useNavigate();

  const handleNavigateToLessonSettings = () => {
    navigate(
      `/lesson-settings/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/1`
    );
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
          type="filled-btn max-[640px]:hidden"
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
