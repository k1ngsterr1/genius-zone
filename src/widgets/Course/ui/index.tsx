import { CoursesAside } from "@features/SidePanels/Courses/ui";
import { CourseTab } from "@widgets/CourseTab";
import SearchBar from "@features/SearchBar/ui";
import TextField from "@mui/material/TextField";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import LocalizationProvider from "@mui/lab/LocalizationProvider";
import DatePicker from "@mui/lab/DatePicker";

import "./styles.scss";

export const CourseScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
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
        </section>
      </main>
    </>
  );
};
