import { useEffect, useState, FormEvent, useRef } from "react";
import { useParams } from "react-router-dom";
import { UserAside } from "@features/SidePanels/User/ui";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import { Button } from "@shared/ui/Button";
import { useImageUpload } from "@shared/lib/hooks/useUploadImage";
import { TextField } from "@mui/material";
import { useUpdateUser } from "@shared/lib/hooks/useUpdateUser";
import { Loader } from "@shared/ui/Loader";

import notFound from "@assets/404.svg";

export const EditUserProfileScreen = () => {
  const [username, setUsername] = useState("");
  const [first_name, setFirstName] = useState("");
  const [last_name, setLastName] = useState("");
  const [userPosition, setUserPosition] = useState("");
  const [userCity, setUserCity] = useState("");

  const fileInputRef = useRef<HTMLInputElement>(null);
  const userID = useParams<{ userID: string }>();
  const { loadUserData, userData } = useLoadUserData();
  const { updateUserData } = useUpdateUser();
  const { image, previewUrl, handleImageChange, clearImage } = useImageUpload();

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await updateUserData(
      { username, first_name, last_name },
      image,
      userID.userID
    );
  };

  useEffect(() => {
    loadUserData(userID.userID);
    console.log(userData);
  }, [userID]);

  if (!userData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (userData == undefined) {
    return (
      <>
        <main className="wrapper--row mb-12">
          <div className="w-full courses-container flex flex-col items-center">
            <h1 className="main-heading">Такого пользователя не существует</h1>
            <img className="w-[40%] mt-20" src={notFound} alt="404" />
          </div>
        </main>
        ;
      </>
    );
  }

  return (
    <div className="wrapper--row mb-12">
      <UserAside username={userData.username} image={userData.photo} />
      <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
        <h1 className="main-heading">Редактировать профиль</h1>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="w-[50%] flex items-center justify-between">
            <span className="text-xl text-custom-black mt-5">Ваш Никнейм*</span>
            <TextField
              required
              name="username"
              variant="outlined"
              placeholder={userData.username}
              type="text"
              sx={{
                width: "70%",
              }}
              className="new-courses-container__input mt-8"
              onChange={(e) => setUsername(e.target.value)}
            />
          </div>
          <div className="w-[50%] flex items-center justify-between">
            <span className="text-xl text-custom-black mt-5">Ваше имя*</span>
            <TextField
              required
              name="first_name"
              variant="outlined"
              placeholder={userData.first_name}
              type="text"
              sx={{
                width: "70%",
              }}
              className="new-courses-container__input mt-8"
              onChange={(e) => setFirstName(e.target.value)}
            />
          </div>
          <div className="w-[50%] flex items-center justify-between">
            <span className="text-xl text-custom-black mt-5">Фамилия*</span>

            <TextField
              required
              name="last_name"
              variant="outlined"
              multiline
              maxRows={4}
              size={"medium"}
              placeholder={userData.last_name}
              type="text"
              sx={{
                width: "70%",
              }}
              className="new-courses-container__input mt-8"
              onChange={(e) => setLastName(e.target.value)}
            />
          </div>
          <div className="w-[50%] flex items-center justify-between">
            <span className="text-xl text-custom-black mt-5">Ваш город*</span>
            <TextField
              name="city"
              variant="outlined"
              multiline
              maxRows={4}
              size={"medium"}
              placeholder={"Начните вводить свой город"}
              type="text"
              sx={{
                width: "70%",
              }}
              className="new-courses-container__input mt-8"
              onChange={(e) => setUserCity(e.target.value)}
            />
          </div>
          <div className="w-[50%] flex items-center justify-between">
            <span className="text-xl text-custom-black mt-5">
              Ваша должность*
            </span>

            <TextField
              name="position"
              variant="outlined"
              multiline
              maxRows={4}
              size={"medium"}
              placeholder="Напишите вашу должность"
              type="text"
              sx={{
                width: "70%",
              }}
              className="new-courses-container__input mt-8"
              onChange={(e) => setUserPosition(e.target.value)}
            />
          </div>
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
              text="Изменить фото"
              className="regular-button blue mt-8"
              type="button"
              onClick={handleButtonClick}
            />
          </label>
          {previewUrl && (
            <div>
              <div className="w-[23%] border-custom-blue border-2 rounded flex flex-col items-center justify-center bg-custom-lightest-blue mt-8">
                <p className="text-lg text-custom-black font-medium p-4 text-center">
                  Новая фотография для вашего профиля:
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
            text="Сохранить"
            type="submit"
            className="regular-button blue mt-8"
            onClick={() => handleSubmit}
          />
        </form>
      </section>
      <section className="w-[90%] new-courses-container m-auto flex flex-col items-center min-[1024px]:hidden">
        <h1 className="main-heading">Редактировать профиль</h1>
        <form className="flex flex-col items-center">
          <TextField
            required
            name="title"
            variant="outlined"
            placeholder="Введите название вашего курса*"
            type="text"
            className="new-courses-container__input mt-8"
            // onChange={(e) => setTitle(e.target.value)}
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
            // onChange={(e) => setDescription(e.target.value)}
          />
          <input
            accept="image/*"
            style={{ display: "none" }}
            id="raised-button-file"
            multiple
            name="preview"
            className="regular-button blue"
            type="file"
            // onChange={handleImageChange}
            // ref={fileInputRef}
          />
          <label htmlFor="raised-button-file">
            <Button
              text="Изменить фото"
              className="regular-button blue mt-8"
              type="button"
              onClick={handleButtonClick}
            />
          </label>
          {previewUrl && (
            <div className="flex flex-col items-center">
              <div className="w-[100%] border-custom-blue border-2 rounded flex flex-col items-center justify-center bg-custom-lightest-blue mt-8">
                <p className="text-lg text-custom-black font-medium p-4 text-center">
                  Фотография вашего профиля:
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
            text="Сохранить"
            type="submit"
            className="regular-button blue mt-8"
            onClick={() => handleSubmit}
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
