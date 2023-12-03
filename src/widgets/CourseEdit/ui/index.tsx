import React from "react";
import cpp from "@assets/cpp.jpg";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import BasicDateCalendar from "@shared/ui/Calendar/ui";

import "./styles.scss";

export const CourseEditScreen = () => {
  return (
    <div className="wrapper--row mt-12">
      <EditCourseTab image={cpp} courseName="Введение в программирование C++" />
      <section className="w-[73%] course-edit-container flex flex-col items-center">
        <div className="course-edit-container__tab flex flex-col items-center justify-center">
          <p className="paragraph text-center w-[50%] text-gray-400">
            Ваш курс пока абсолютно пустой. Создайте первый модуль, чтобы
            добавить уроки
          </p>
          <UtilityButton
            text="Новый модуль"
            marginTop="mt-6"
            type="filled-btn"
            onClick={() => console.log("New Module")}
          />
          <BasicDateCalendar />
        </div>
      </section>
    </div>
  );
};
