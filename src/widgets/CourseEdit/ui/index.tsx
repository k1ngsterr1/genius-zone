import { useEffect, useState } from "react";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { useSelector } from "react-redux";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Loader } from "@shared/ui/Loader";
import { useParams } from "react-router-dom";
import { RootState } from "@shared/lib/redux/store";
import { ModuleTab } from "@widgets/ModuleTab";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";
import { FinishedModuleTab } from "@shared/ui/FinishedModuleTab";
import BasicDateCalendar from "@shared/ui/Calendar/ui";

import "./styles.scss";

export const CourseEditScreen = () => {
  const courseID = useParams<{ courseID: string }>();
  const {
    moduleElements,
    addNewModule,
    cancelNewModule,
    toggleEditModule,
    updateModules,
  } = useAddNewModule();
  const { courseData, error } = useLoadSpecificCourse(courseID.courseID);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  const transformedModules =
    courseData?.modules.map((mod) => ({
      id: `module-${mod.module_num}`,
      title: mod.module_title.toString(),
      number: mod.module_num.toString(),
    })) ?? [];

  useEffect(() => {
    if (courseData?.modules) {
      updateModules(courseData.modules);
      console.log("modules:", moduleElements);
    }
  }, [courseData?.modules]);

  if (isLoading) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (error) {
    return (
      <>
        <ErrorTab text={error.message} />
      </>
    );
  }

  if (!courseData) {
    <div>There is no course data</div>;
  }

  // const renderedModules = courseData?.modules.map((module, index) =>
  //   module.isEditing ? (
  //     <ModuleTab
  //       lessonImage={courseData?.preview}
  //       key={module.id}
  //       id={module.id}
  //       number={index + 1}
  //     />
  //   ) : (
  //     <FinishedModuleTab
  //       key={module.id}
  //       image={courseData.preview}
  //       title={module.module_title}
  //       number={module.module_number}
  //       description={module.module_description}
  //       editModule={() => toggleEditModule(module.id)}
  //     />
  //   )
  // );

  return (
    <div className="wrapper--row mt-12">
      {courseData ? (
        <>
          <EditCourseTab
            image={courseData.preview}
            courseName={courseData.title}
            modules={transformedModules}
          />
        </>
      ) : (
        <div>error</div>
      )}
      <section className="w-[73%] course-edit-container flex flex-col items-center">
        <div className="w-[70%] flex">
          <UtilityButton
            text="Редактировать cодержимое"
            type="filled-btn"
            marginTop="mt-6 mb-6"
          />
        </div>
        <h2 className="w-[70%] float-left text-3xl font-semibold mb-8">
          Создание курса
        </h2>
        {/* {moduleElements.map((module, index) => (
          <ModuleTab
            lessonImage={courseData?.preview}
            key={module.id}
            id={module.id}
            number={index + 1}
          />
        ))}
        {courseData?.modules.map((module, index) => (
          <FinishedModuleTab
            editModule={() => toggleEditModule(module.id)}
            image={courseData.preview}
            title={module.module_title}
            number={module.module_number}
            description={module.module_description}
          />
        ))} */}
        {moduleElements.map((module, index) => {
          if (module.finished) {
            console.log("finished:", module.finished);
            return (
              <FinishedModuleTab
                editModule={() => toggleEditModule(module.id)}
                image={courseData?.preview}
                title={module.module_title || "Нет заголовка"}
                number={module.module_number || 0}
                key={module.id}
                description={module.module_description || "Нет описания"}
              />
            );
          } else if (module.isEditing) {
            console.log("isEditing:", module.isEditing);
            return (
              <ModuleTab
                lessonImage={courseData?.preview}
                key={module.id}
                id={module.id}
                number={index + 1}
              />
            );
          } else {
            return null;
          }
        })}
        <div className="course-edit-container__tab flex flex-col items-center justify-center">
          <p className="paragraph text-center w-[50%] text-gray-400">
            {!courseData ? (
              <>
                {" "}
                Ваш курс пока абсолютно пустой. Создайте первый модуль, чтобы
                добавить уроки
              </>
            ) : (
              <>
                В вашем курсе уже есть модули. Вы можете создать еще модули и
                дополнить ваш курс
              </>
            )}
          </p>
          <UtilityButton
            text="Новый модуль"
            marginTop="mt-6"
            type="filled-btn"
            onClick={addNewModule}
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
