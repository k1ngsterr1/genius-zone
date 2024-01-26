import React from "react";

import "./styles.scss";

interface CourseDataTabProps {
  lessons: string;
  modules: string;
}

export const CourseDataTab: React.FC<CourseDataTabProps> = ({
  lessons,
  modules,
}) => {
  return (
    <div className="course_data_tab w-[93%] mt-8">
      <span className="course_data_tab__text">В курс входят</span>
      <span className="course_data_tab__additional mt-4">
        <strong>Уроки:</strong> {lessons}
      </span>
      <span className="course_data_tab__additional mt-2">
        <strong>Модули:</strong> {modules}
      </span>
    </div>
  );
};
