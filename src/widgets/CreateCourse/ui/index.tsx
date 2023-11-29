import { CourseTab } from "@widgets/CourseTab";
import { CreateCourseSide } from "@features/SidePanels/CreateCourse/ui";
import SearchBar from "@features/SearchBar/ui";
import { NewCourse } from "@widgets/NewCourse/ui";

import cpp from "@assets/cpp.jpg";

export const CreateCourseScreen = () => {
  return (
    <div className="wrapper--row h-full mb-12">
      <CreateCourseSide />
      <section className="w-[73%] course-edit-container flex flex-col">
        <h1 className="main-heading">Ваши курсы</h1>
        <SearchBar onSearch={() => console.log("zhopa")} />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
        <NewCourse
          title="Курсы по C++"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate eos quos ad a magnam quisquam assum
          !"
          image={cpp}
        />
      </section>
    </div>
  );
};
