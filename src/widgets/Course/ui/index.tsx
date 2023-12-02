import { UtilityButton } from "@shared/ui/UtilityButton";
import SearchInput from "@shared/ui/SearchInput";

import illustration from "@assets/course.webp";

import "./styles.scss";

export const CourseScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
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
        </section>
      </main>
    </>
  );
};
