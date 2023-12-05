import { useState, FormEvent } from "react";
import { CreateCourseSide } from "@features/SidePanels/CreateCourse/ui";
import { TextField } from "@mui/material";
import { Button } from "@shared/ui/button";
import { useCreateCourse } from "@shared/lib/hooks/useCreateCourse";

import "./styles.scss";

export const CreateNewCourseScreen = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createCourse } = useCreateCourse();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Prevent the default form submission
    await createCourse({ title, description }); // Call createCourse with the form data
  };

  return (
    <div className="wrapper--row mb-12">
      <CreateCourseSide />
      <section className="w-[73%]  new-courses-container flex flex-col">
        <h1 className="main-heading">Создание нового курса</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <TextField
            required
            name="title"
            variant="outlined"
            placeholder="Введите название вашего курса*"
            type="text"
            className="new-courses-container__input mt-8"
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextField
            required
            name="description"
            variant="outlined"
            multiline
            maxRows={4}
            size={"medium"}
            placeholder="Введите описание вашего курса*"
            type="text"
            className="new-courses-container__input mt-8"
            onChange={(e) => setDescription(e.target.value)}
          />
          <Button
            text="Создать курс"
            className="regular-button blue mt-8"
            type={"submit"}
          />
        </form>
        <p className="paragraph w-[60%] text-left text-xl mt-8">
          Присоединяйтесь к нашему сообществу экспертов и начните своё
          путешествие в мире онлайн-обучения сегодня. Наша интуитивно понятная
          платформа позволит вам легко и быстро начать работу над черновиком
          вашего курса.
        </p>
      </section>
    </div>
  );
};
