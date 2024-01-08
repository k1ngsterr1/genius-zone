import React from "react";

import "./styles.scss";
import { UtilityButton } from "@shared/ui/UtilityButton";

interface InputLessonProps {
  inputValue: string;
  lessonImage: string;
}

export const InputLesson: React.FC<InputLessonProps> = ({
  inputValue,
  lessonImage,
}) => {
  return (
    <div className="input-lesson">
      <div className="input-lesson__upper">{inputValue}</div>
      <div className="input-lesson__content">
        <img
          src={lessonImage}
          alt={inputValue}
          className="input-lesson__content__image"
        />
        <div className="input-lesson__content__container">
          <input
            type="text"
            value={inputValue}
            placeholder={inputValue}
            className="input-lesson__content__container__input"
          />
          <UtilityButton
            text="Сохранить"
            onClick={() => console.log("save")}
            type="filled-btn"
            marginTop="mt-4"
          />
        </div>
      </div>
    </div>
  );
};
