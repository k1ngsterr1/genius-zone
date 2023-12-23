import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import { UtilityButton } from "@shared/ui/UtilityButton";

import "./styles.scss";

interface LessonTabProps {
  image: string | undefined;
}

export const LessonTab: React.FC<LessonTabProps> = ({ image }) => {
  const [lessonName, setLessonName] = useState("");

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
          onChange={(e) => setLessonName(e.target.value)}
          sx={{
            width: "50%",
          }}
        />
        <UtilityButton
          text="Создать урок"
          className=""
          isDisabled={lessonName !== "" ? false : true}
          type={lessonName !== "" ? "filled-btn" : "filled-inactive-btn"}
          marginTop="mt-0"
          onClick={() => console.log("holla")}
        />
      </div>
    </div>
  );
};
