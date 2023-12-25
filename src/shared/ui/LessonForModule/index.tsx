import React from "react";

interface LessonForModuleProps {
  lessonTitle: string;
  lessonImage: string;
}

export const LessonForModule: React.FC<LessonForModuleProps> = ({
  lessonImage,
  lessonTitle,
}) => {
  return (
    <div className="lesson-module-tab flex items-center justify-between">
      <img
        src={lessonImage}
        className="lesson-module__image"
        alt="lesson_image"
      />
      <span className="lesson-module-tab__text text-lg">{lessonTitle}</span>
    </div>
  );
};
