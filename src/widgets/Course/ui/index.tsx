import { Autocomplete, TextField } from "@mui/material";
import { UtilityButton } from "@shared/ui/UtilityButton";

export const CourseScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
        <aside className="course-side-tab">
          <UtilityButton
            text="Создать курс"
            type="outline-btn"
            marginTop="mt-0"
            onClick={() => console.log("click")}
          />
        </aside>
        <section className="w-[73%] courses-container flex flex-col">
          <h1 className="main-heading">Курсы</h1>
        </section>
      </main>
    </>
  );
};
