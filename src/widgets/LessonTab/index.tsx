import React from "react";
import { OutlinedInput } from "@mui/material";
import { UtilityButton } from "@shared/ui/UtilityButton";

import "./styles.scss";

interface LessonTabProps {
  image: string | undefined;
  buttonType: string;
}

export const LessonTab: React.FC<LessonTabProps> = ({ image, buttonType }) => {
  return (
    <div className="lesson-tab mb-8">
      <div className="lesson-tab__row flex items-center justify-between">
        <img
          src={image}
          className="lesson-tab__row__image"
          alt="course-image"
        />
        <OutlinedInput
          placeholder="Введи название нового урока"
          sx={{
            width: "50%",
          }}
        />
        <UtilityButton
          type={buttonType}
          text="Создать урок"
          marginTop="mt-0"
          onClick={() => console.log("holla")}
        />
      </div>
    </div>
  );
};
