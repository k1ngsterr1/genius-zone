import { useNavigate } from "react-router-dom";
import { CreateCourseSide } from "@features/SidePanels/CreateCourse/ui";
import { NewCourse } from "@widgets/NewCourse/ui";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Loader } from "@shared/ui/Loader";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import useLoadCourses from "@shared/lib/hooks/useLoadCourses";
import SearchBar from "@features/SearchBar/ui";

import noCourses from "@assets/no_courses.svg";

import "./styles.scss";

export const UserCoursesScreen = () => {
  const navigate = useNavigate();
  const { courses, setCourses, error, reloadCourseData } = useLoadCourses();

  const isLoading = useSelector((state: RootState) => state.loader.isLoading);

  const handleCourseDelete = (deletedCourseId: string) => {
    const updatedCourses = courses.filter(
      (course) => course.id !== deletedCourseId
    );
    setCourses(updatedCourses);
    reloadCourseData();
  };

  const handleOpenEditor = (courseId: string) => {
    navigate(`/create-course/${courseId}/syllabus`);
  };

  return (
    <div className="wrapper--row h-full mb-12">
      <CreateCourseSide />
      <section className="w-[73%] course-edit-container flex flex-col max-[640px]:hidden">
        <h1 className="main-heading">Ваши курсы</h1>
        <SearchBar onSearch={() => console.log("zhopa")} />
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        )}
        {!courses ||
          (courses.length === 0 && (
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={noCourses}
                className="no-courses"
                alt="no-courses-vector"
              />
              <h1 className="text-3xl text-custom-black">
                У вас пока нет курсов
              </h1>
            </div>
          ))}
        {error && <ErrorTab text="Ошибка с загрузкой курсов" />}
        {!isLoading &&
          !error &&
          courses.map((course) => (
            <NewCourse
              onClick={() => handleOpenEditor(course.id)}
              kebabEdit={() => handleOpenEditor(course.id)}
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.preview}
              onDelete={handleCourseDelete}
            />
          ))}
      </section>
      <section className="w-[90%] course-edit-container flex flex-col items-center m-auto min-[1024px]:hidden">
        <h1 className="main-heading">Ваши курсы</h1>
        <SearchBar onSearch={() => console.log("zhopa")} />
        {isLoading && (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        )}
        {!courses ||
          (courses.length === 0 && (
            <div className="flex flex-col justify-center items-center h-full">
              <img
                src={noCourses}
                className="no-courses"
                alt="no-courses-vector"
              />
              <h1 className="text-2xl text-custom-black">
                У вас пока нет курсов
              </h1>
            </div>
          ))}
        {error && <ErrorTab text="Ошибка с загрузкой курсов" />}
        {!isLoading &&
          !error &&
          courses.map((course) => (
            <NewCourse
              onClick={() => handleOpenEditor(course.id)}
              kebabEdit={() => handleOpenEditor(course.id)}
              id={course.id}
              title={course.title}
              description={course.description}
              image={course.preview}
              onDelete={handleCourseDelete}
            />
          ))}
      </section>
    </div>
  );
};
