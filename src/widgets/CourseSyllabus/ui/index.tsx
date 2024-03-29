import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { useSelector } from "react-redux";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Loader } from "@shared/ui/Loader";
import { useParams, useNavigate } from "react-router-dom";
import { RootState } from "@shared/lib/redux/store";
import { ModuleTab } from "@widgets/ModuleTab";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";
import { FinishedModuleTab } from "@shared/ui/FinishedModuleTab";
import { SavePanel } from "@shared/ui/SavePanel";
import BasicDateCalendar from "@shared/ui/Calendar/ui";

import "./styles.scss";

export const CourseSyllabusScreen = () => {
  const courseID = useParams<{ courseID: string }>();
  const navigate = useNavigate();
  const { moduleElements, addNewModule } = useAddNewModule();
  const { courseData, error } = useLoadSpecificCourse(courseID.courseID);
  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  function handleNavigateToEditor() {
    navigate(`/create-course/${courseID.courseID}/edit`);
  }

  const handleAddModuleClick = () => {
    addNewModule();
  };

  const transformedModules =
    courseData?.modules.map((mod) => ({
      id: `module-${mod.module_num}`,
      title: mod.module_title.toString(),
      number: mod.module_num.toString(),
    })) ?? [];

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

  if (courseData?.modules.length == 0) {
    return (
      <div className="wrapper--row mt-12">
        <EditCourseTab
          image={courseData.preview}
          courseName={courseData.title}
          modules={transformedModules}
        />
        <section className="w-[73%] course-edit-container flex flex-col items-center max-[640px]:hidden">
          <h2 className="w-[70%] float-left text-3xl font-semibold mb-8">
            Создание курса
          </h2>
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
              {courseData.modules.length == 0 ? (
                <>
                  Ваш курс пока абсолютно пустой. Создайте первый модуль, чтобы
                  добавить уроки
                  <UtilityButton
                    text="Редактировать cодержимое"
                    type="filled-btn"
                    marginTop="mt-6 mb-6"
                    onClick={() => handleNavigateToEditor()}
                  />
                </>
              ) : (
                <>
                  В вашем курсе уже есть модули. Вы можете создать еще модули и
                  дополнить ваш курс
                </>
              )}
            </p>
          </div>
          <h2 className="text-2xl font-medium text-custom-black mt-16">
            Описание действия
          </h2>
          <p className="paragraph w-[50%] text-center mt-4 text-gray-500 text-xl">
            Создайте новые модули и укажите дату курса, чтобы сделать его
            видимыми для других пользователей, учтите, что все поля должны быть
            заполнеными
          </p>
        </section>
        <section className="w-[73%] course-edit-container flex flex-col items-center min-[1024px]:hidden">
          <h2 className="w-[70%] text-center text-3xl font-semibold mb-8">
            Создание курса
          </h2>
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
              {courseData.modules.length == 0 ? (
                <>
                  Ваш курс пока абсолютно пустой. Создайте первый модуль, чтобы
                  добавить уроки
                  <UtilityButton
                    text="Редактировать cодержимое"
                    type="filled-btn"
                    marginTop="mt-6 mb-6"
                    onClick={() => handleNavigateToEditor()}
                  />
                </>
              ) : (
                <>
                  В вашем курсе уже есть модули. Вы можете создать еще модули и
                  дополнить ваш курс
                </>
              )}
            </p>
          </div>
          <h2 className="text-2xl font-medium text-custom-black mt-16">
            Описание действия
          </h2>
          <p className="paragraph w-[50%] text-center mt-4 text-gray-500 text-xl">
            Создайте новые модули и укажите дату курса, чтобы сделать его
            видимыми для других пользователей, учтите, что все поля должны быть
            заполнеными
          </p>
        </section>
      </div>
    );
  }

  return (
    <div className="wrapper--row mt-12">
      <EditCourseTab
        image={courseData?.preview}
        courseName={courseData?.title}
        modules={transformedModules}
      />
      <section className="w-[73%] course-edit-container flex flex-col items-center max-[640px]:hidden">
        <div className="w-[70%] flex">
          <UtilityButton
            text="Редактировать cодержимое"
            type="filled-btn"
            marginTop="mt-6 mb-6"
            onClick={() => handleNavigateToEditor()}
          />
        </div>
        <h2 className="w-[70%] float-left text-3xl font-semibold mb-8">
          Создание курса
        </h2>
        {courseData?.modules.map((module, index) => {
          {
            console.log("finished:", module.finished);
            return (
              <FinishedModuleTab
                image={courseData?.preview}
                title={module.module_title || "Нет заголовка"}
                number={module.module_num || 0}
                key={module.id}
                description={module.module_description || "Нет описания"}
              />
            );
          }
        })}
        <h2 className="text-2xl font-medium text-custom-black mt-16">
          Описание действия
        </h2>
        <p className="paragraph w-[50%] text-center mt-4 text-gray-500 text-xl">
          Вы можете редактировать ваш курс, добавлять в него новые уроки и
          модули, для этого нажмите кнопку "Редактировать содержимое"
        </p>
      </section>
      <section className="w-[100%] m-auto course-edit-container flex flex-col items-center min-[1024px]:hidden">
        <h2 className="w-[100%] text-center text-3xl font-semibold mb-8">
          Создание курса
        </h2>
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

        <p className="paragraph text-center w-[100%] text-gray-400">
          {courseData?.modules.map((module, index) => {
            {
              console.log("finished:", module.finished);
              return (
                <FinishedModuleTab
                  image={courseData?.preview}
                  title={module.module_title || "Нет заголовка"}
                  number={module.module_num || 0}
                  key={module.id}
                  description={module.module_description || "Нет описания"}
                />
              );
            }
          })}
        </p>

        <h2 className="text-2xl font-medium text-custom-black mt-16">
          Описание действия
        </h2>
        <p className="paragraph w-[90%] text-center mt-4 text-gray-500 text-xl">
          Создайте новые модули и укажите дату курса, чтобы сделать его видимыми
          для других пользователей, учтите, что все поля должны быть заполнеными
        </p>
      </section>
    </div>
  );
};
