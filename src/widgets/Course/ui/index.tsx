<<<<<<< HEAD
import { UtilityButton } from "@shared/ui/UtilityButton";
import SearchInput from "@shared/ui/SearchInput";

import illustration from "@assets/course.webp";
=======
import { CoursesAside } from "@features/SidePanels/Courses/ui";
import { CourseTab } from "@widgets/CourseTab";
import SearchBar from "@features/SearchBar/ui";
>>>>>>> a1c7cd596b6707aade23a99bd7a22489787bd642

import "./styles.scss";

export const CourseScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
<<<<<<< HEAD
        <aside className="course-side-tab">
          <img
            src={illustration}
            alt="image"
            className="course-side-tab__img"
          />
          <UtilityButton
            text="Создать курс"
            type="outline-btn"
            marginTop="mt-16"
            onClick={() => console.log("click")}
          />
        </aside>
        <section className="w-[73%] courses-container flex flex-col">
          <h1 className="main-heading mb-8">Курсы</h1>
          <SearchInput />
=======
        <CoursesAside />
        <section className="w-[73%] courses-container flex flex-col">
          <h1 className="main-heading">Курсы</h1>
          <SearchBar onSearch={() => console.log("zhopa")} />
          <h2 className="text-2xl text-custom-black mt-8">Популряные</h2>
          <div className="w-full flex justify-between items-center mt-8">
            <CourseTab buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
          </div>
          <div className="w-full flex justify-between items-center mt-8">
            <CourseTab buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
          </div>
          <h2 className="text-2xl text-custom-black mt-8">Актуальные</h2>
          <div className="w-full flex justify-between items-center mt-8">
            <CourseTab buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
          </div>
          <div className="w-full flex justify-between items-center mt-8">
            <CourseTab buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
            <CourseTab margin=" ml-8" buttonText="Записаться" />
          </div>
>>>>>>> a1c7cd596b6707aade23a99bd7a22489787bd642
        </section>
      </main>
    </>
  );
};
