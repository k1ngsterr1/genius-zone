import { CoursesAside } from "@features/SidePanels/Courses/ui";
import { CourseTab } from "@widgets/CourseTab";
import { CourseSwiper } from "@features/CourseSwiper/ui";
import SearchBar from "@features/SearchBar/ui";

import offer from "@assets/genius-zone.webp";

import "./styles.scss";

export const CourseScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
        <CoursesAside />
        <section className="w-[73%] courses-container flex flex-col max-[640px]:hidden">
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
        <section className="w-[100%] m-auto flex flex-col items-center justify-center min-[1024px]:hidden">
          <img src={offer} className="rounded-xl w-[100%]" alt="offer" />
          <h1 className="main-heading mt-8">Курсы</h1>
          <SearchBar onSearch={() => console.log("zhopa")} />
          <h2 className="text-2xl text-custom-black mt-8">Популряные</h2>
          <CourseSwiper />
          <h2 className="text-2xl text-custom-black mt-8">Актуальные</h2>
          <CourseSwiper />
        </section>
      </main>
    </>
  );
};
