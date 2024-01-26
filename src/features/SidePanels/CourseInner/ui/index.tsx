import { CourseDataTab } from "@entities/CourseDataTab/ui";
import { Button } from "@shared/ui/Button";

import React from "react";

export const CourseInnerSide = () => {
  return (
    <aside className="course-inner-side  flex flex-col sticky top-20">
      <span className="text-custom-black text-2xl font-bold">Бесплатно</span>
      <Button text="Поступить на курс" className="regular-button mt-4" />
      <Button text="Избранное" className="outline-button mt-4" />
      <CourseDataTab />
    </aside>
  );
};
