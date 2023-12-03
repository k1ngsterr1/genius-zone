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
        <h2 className="w-[70%] float-left text-3xl font-semibold mb-8">
          Создание курса
        </h2>
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
        <h2 className="text-2xl font-medium text-custom-black mt-16">
          Описание действия
        </h2>
        <p className="paragraph w-[50%] text-center mt-4 text-gray-500 text-xl">
          Создайте новые модули и укажите дату курса, чтобы сделать его видимыми
          для других пользователей, учтите, что все поля должны быть заполнеными
        </p>
      </section>
    </div>
  );
};
