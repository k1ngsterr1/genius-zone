import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { useSelector } from "react-redux";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Loader } from "@shared/ui/Loader";
import { useParams } from "react-router-dom";
import BasicDateCalendar from "@shared/ui/Calendar/ui";

import cpp from "@assets/cpp.jpg";

import "./styles.scss";
import { RootState } from "@shared/lib/redux/store";

export const CourseEditScreen = () => {
  const courseID = useParams();

  const { courseData, error } = useLoadSpecificCourse(courseID);

  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

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

  return (
    <div className="wrapper--row mt-12">
      {courseData ? (
        <>
          <EditCourseTab
            image={courseData.preview}
            courseName={courseData.title}
          />
        </>
      ) : (
        <div>error</div>
      )}
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
