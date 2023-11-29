import React from "react";

import newImage from "@assets/cpp.jpg";

interface NewCourseProps {
  title: string;
  image: string;
}

export const NewCourse: React.FC<NewCourseProps> = ({ title, image }) => {
  return (
    <div className="new-course flex justfy-between items-start">
      <img src={newImage} className="new-course__image" alt={title} />
      <div className="new-course__content flex flex-column items-center">
        <h1 className="new-course__content__title">{title}</h1>
      </div>
    </div>
  );
};
