import React from "react";

import "./styles.scss";

interface CourseInnerCardData {
  name: string;
  photo: string;
  description: string;
}

export const CourseInnerCard: React.FC<CourseInnerCardData> = ({
  name,
  description,
  photo,
}) => {
  return (
    <div className="course_inner_card">
      <div className="course_inner_card__text_content">
        <h1 className="course_inner_card__text_content__heading">{name}</h1>
        <p className="course_inner_card__paragraph">{description}</p>
      </div>
      <img className="course_inner_card__image" src={photo} />
    </div>
  );
};
