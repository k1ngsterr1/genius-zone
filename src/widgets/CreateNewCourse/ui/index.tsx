import { useState, FormEvent, useRef } from "react";
import { CreateCourseSide } from "@features/SidePanels/CreateCourse/ui";
import { TextField } from "@mui/material";
import { useCreateCourse } from "@shared/lib/hooks/useCreateCourse";
import { useImageUpload } from "@shared/lib/hooks/useUploadImage";
import { Button } from "@shared/ui/Button";

import "./styles.scss";

export const CreateNewCourseScreen = () => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const { createCourse } = useCreateCourse();
  const { image, previewUrl, handleImageChange, clearImage } = useImageUpload();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await createCourse({ title, description }, image);
  };

  return (
    <div className="wrapper--row mb-12">
      <CreateCourseSide />
      <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
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
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            name="preview"
            className="regular-button blue"
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
          <label htmlFor="raised-button-file">
            <Button
              text="Добавить фото"
              className="regular-button blue mt-8"
              type="button"
              onClick={handleButtonClick}
            />
          </label>
          {previewUrl && (
            <div>
              <div className="w-[23%] border-custom-blue border-2 rounded flex flex-col items-center justify-center bg-custom-lightest-blue mt-8">
                <p className="text-lg text-custom-black font-medium p-4 text-center">
                  Фотография для вашего курса:
                </p>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="new-course-container__preview pb-4"
                />
              </div>
              <Button
                text="Убрать фото"
                className="regular-button blue mt-8"
                type="button"
                onClick={clearImage}
              />
            </div>
          )}
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
      <section className="w-[90%] new-courses-container m-auto flex flex-col items-center min-[1024px]:hidden">
        <h1 className="main-heading">Создание нового курса</h1>
        <form className="flex flex-col items-center" onSubmit={handleSubmit}>
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
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            name="preview"
            className="regular-button blue"
            type="file"
            onChange={handleImageChange}
            ref={fileInputRef}
          />
          <label htmlFor="raised-button-file">
            <Button
              text="Добавить фото"
              className="regular-button blue mt-8"
              type="button"
              onClick={handleButtonClick}
            />
          </label>
          {previewUrl && (
            <div>
              <div className="w-[100%] border-custom-blue border-2 rounded flex flex-col items-center justify-center bg-custom-lightest-blue mt-8">
                <p className="text-lg text-custom-black font-medium p-4 text-center">
                  Фотография для вашего курса:
                </p>
                <img
                  src={previewUrl}
                  alt="Preview"
                  className="new-course-container__preview pb-4"
                />
              </div>
              <Button
                text="Убрать фото"
                className="regular-button blue mt-8"
                type="button"
                onClick={clearImage}
              />
            </div>
          )}
          <Button
            text="Создать курс"
            className="regular-button blue mt-8"
            type={"submit"}
          />
        </form>
        <p className="paragraph w-[100%] text-center text-xl mt-8">
          Присоединяйтесь к нашему сообществу экспертов и начните своё
          путешествие в мире онлайн-обучения сегодня. Наша интуитивно понятная
          платформа позволит вам легко и быстро начать работу над черновиком
          вашего курса.
        </p>
      </section>
    </div>
  );
};
