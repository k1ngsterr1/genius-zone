import React from "react";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { FavoriteButton } from "@shared/ui/FavoriteButton";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

interface CourseTabProps {
  courseName: string;
  courseDescription: string;
  courseImage: string;
  margin?: string;
  courseID: string;
  buttonText: string;
}

export const CourseTab: React.FC<CourseTabProps> = ({
  courseName,
  courseDescription,
  courseImage,
  margin,
  buttonText,
  courseID,
}) => {
  const navigate = useNavigate();

  return (
    <div
      className={`course-tab ${margin}`}
      onClick={() => navigate(`/course/${courseID}`)}
    >
      <div className="course-tab__row flex items-center justify-between ">
        <h1 className="course-tab__row__heading">{courseName}</h1>
        <img className="course-tab__row__image" src={courseImage} />
      </div>
      <p className="course-tab__description mt-4">{courseDescription}</p>
      <div className="flex items-center justify-between mt-4">
        <UtilityButton
          type="filled-btn"
          text={buttonText}
          marginTop="mt-0"
          onClick={() => console.log("lol")}
        />
        <FavoriteButton type="filled" />
      </div>
    </div>
  );
};
