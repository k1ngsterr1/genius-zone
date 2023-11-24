import React from "react";
import courseImagez from "@assets/cpp.jpg";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { FavoriteButton } from "@shared/ui/FavoriteButton";

import "./styles.scss";

interface CourseTabProps {
  courseName: string;
  courseDescription: string;
  courseImage: string;
  margin: string;
  buttonText: string;
}

export const CourseTab = ({
  courseName,
  courseDescription,
  courseImage,
  margin,
  buttonText,
}) => {
  return (
    <div className={`course-tab ${margin}`}>
      <div className="course-tab__row flex items-center justify-between">
        <h1 className="course-tab__row__heading">
          Введние в программирование (C++)
        </h1>
        <img className="course-tab__row__image" src={courseImagez} />
      </div>
      <p className="course-tab__description mt-4">
        Тесты, прилагаемые к условиям задач, даны только для примера. Их
        успешное прохождение ещё не гарантия правильной работы вашего кода и
      </p>
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
