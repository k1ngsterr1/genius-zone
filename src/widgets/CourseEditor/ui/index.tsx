import { useEffect } from "react";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";
import { ModuleTab } from "@widgets/ModuleTab";
import { LoadedModuleTab } from "@widgets/LoadedModuleTab";
import { useParams, useNavigate } from "react-router-dom";
import { Loader } from "@shared/ui/Loader";
import { SavePanel } from "@shared/ui/SavePanel";
import BasicDateCalendar from "@shared/ui/Calendar/ui";

export const CourseEditorScreen = () => {
  const courseID = useParams<{ courseID: string }>();
  const navigate = useNavigate();
  const { moduleElements, addNewModule, cancelNewModule, updateModules } =
    useAddNewModule();
  const { courseData } = useLoadSpecificCourse(courseID.courseID);
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
    }
  }, [courseData?.modules]);

  if (!courseData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="wrapper--row mt-12">
      <EditCourseTab
        image={courseData.preview}
        courseName={courseData.title}
        modules={transformedModules}
      />
      <section className="w-[73%] course-edit-container flex flex-col items-center">
        <h2 className="w-[70%] float-left text-3xl font-semibold mb-8">
          Редактирование курса
        </h2>
        {courseData.modules.map((module, index) => (
          <LoadedModuleTab
            image={courseData.preview}
            title={module?.module_title}
            description={module?.module_description}
            number={module.module_num}
            key={module.id}
            id={module.id}
          />
        ))}
        {moduleElements.map((module, index) => {
          if (module.isEditing) {
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
