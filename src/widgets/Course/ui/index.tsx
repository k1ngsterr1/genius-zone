import { useState } from "react";
import { CoursesAside } from "@features/SidePanels/Courses/ui";
import SearchBar from "@features/SearchBar/ui";

import "./styles.scss";

export const CourseScreen = () => {
  const [open, setOpen] = useState(true);

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <>
      <main className="wrapper--row mb-12">
        <CoursesAside />
        <section className="w-[73%] courses-container flex flex-col">
          <h1 className="main-heading">Курсы</h1>
          <SearchBar onSearch={() => console.log("zhopa")} />
        </section>
      </main>
    </>
  );
};
