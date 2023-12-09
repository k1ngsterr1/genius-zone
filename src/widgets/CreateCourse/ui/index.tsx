import { CreateCourseSide } from "@features/SidePanels/CreateCourse/ui";
import { NewCourse } from "@widgets/NewCourse/ui";
import { ErrorTab } from "@shared/ui/ErrorTab";
import { Loader } from "@shared/ui/Loader";
import useLoadCourses from "@shared/lib/hooks/useLoadCourses";
import SearchBar from "@features/SearchBar/ui";

export const CreateCourseScreen = () => {
  const { courses, setCourses, loading, error } = useLoadCourses();

  const handleCourseDelete = (deletedCourseId: string) => {
    const updatedCourses = courses.filter(
      (course) => course.id !== deletedCourseId
    );
    setCourses(updatedCourses);
  };

  return (
    <div className="wrapper--row h-full mb-12">
      <CreateCourseSide />
      <section className="w-[73%] course-edit-container flex flex-col">
        <h1 className="main-heading">Ваши курсы</h1>
        <SearchBar onSearch={() => console.log("zhopa")} />
        {loading && (
          <div className="flex justify-center items-center h-full">
            <Loader />
          </div>
        )}
        {error && <ErrorTab text="Ошибка с загрузкой курсов" />}

        {!loading &&
          !error &&
          courses.map((course) => (
            <NewCourse
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
