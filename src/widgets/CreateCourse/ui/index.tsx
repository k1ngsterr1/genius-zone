import { CourseTab } from "@widgets/CourseTab";
import { CreateCourseSide } from "@features/SidePanels/CreateCourse/ui";
import SearchBar from "@features/SearchBar/ui";

export const CreateCourseScreen = () => {
  return (
    <div className="wrapper--row h-full mb-12">
      <CreateCourseSide />
      <section className="w-[73%] course-edit-container flex flex-col">
        <h1 className="main-heading">Ваши курсы</h1>
        <SearchBar onSearch={() => console.log("zhopa")} />
      </section>
    </div>
  );
};
