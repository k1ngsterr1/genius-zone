import { useEffect } from "react";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";
import { ModuleTab } from "@widgets/ModuleTab";
import { LoadedModuleTab } from "@widgets/LoadedModuleTab";
import { useParams } from "react-router-dom";
import { Loader } from "@shared/ui/Loader";
import { ModuleWithLessons } from "@widgets/ModuleWithLessonsEditable";
import BasicDateCalendar from "@shared/ui/Calendar/ui";
import useDeleteModule from "@shared/lib/hooks/useDeleteModule";
import { useDeleteLesson } from "@shared/lib/hooks/useDeleteLesson";
import { LessonForModule } from "@shared/ui/LessonForModule";

export const CourseEditorScreen = () => {
  const courseID = useParams<{ courseID: string }>();
  const { moduleElements, addNewModule } = useAddNewModule();
  const { courseData, reloadCourseData } = useLoadSpecificCourse(
    courseID.courseID
  );

  const handleDeleteSuccess = () => {
    reloadCourseData();
  };

  const { deleteModule } = useDeleteModule(handleDeleteSuccess);

  const transformedModules =
    courseData?.modules.map((mod) => ({
      id: `module-${mod.module_num}`,
      title: mod.module_title.toString(),
      number: mod.module_num.toString(),
      lessons: mod.lessons.map((lesson: any) => ({
        lessonTitle: lesson.lesson_title,
      })),
    })) ?? [];

  useEffect(() => {
    console.log(courseData);
    console.log("before updating modules:", courseData?.modules);
    if (courseData?.modules) {
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
        {courseData.modules.map((module, index) => {
          if (module.lessons && module.lessons.length > 0) {
            const lessonsForModule = module.lessons.map((lesson: any) => ({
              lessonTitle: lesson.lesson_title,
              lessonNumber: lesson.lesson_num,
            }));
            return (
              <ModuleWithLessons
                key={module.id}
                id={module.id}
                number={index + 1}
                title={module.module_title}
                description={module.module_description}
                image={courseData.preview}
                lessons={lessonsForModule}
                deleteFunction={() =>
                  deleteModule(courseID.courseID, module.module_num)
                }
              />
            );
          } else {
            return (
              <LoadedModuleTab
                key={module.id}
                id={module.id}
                image={courseData.preview}
                title={module.module_title}
                description={module.module_description}
                number={module.module_num}
                deleteFunction={() =>
                  deleteModule(courseID.courseID, module.module_num)
                }
              />
            );
          }
        })}
        {moduleElements.map((module, index) => {
          return (
            <ModuleTab
              lessonImage={courseData?.preview}
              key={module.id}
              id={module.id}
              number={index + 1}
            />
          );
        })}
        <div className="course-edit-container__tab flex flex-col items-center justify-center">
          <p className="paragraph text-center w-[50%] text-gray-400">
            {courseData.modules.length === 0 ? (
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
      </section>
    </div>
  );
};
