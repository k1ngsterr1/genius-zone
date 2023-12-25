import React, { useState } from "react";
import { OutlinedInput } from "@mui/material";
import { LessonData } from "@shared/lib/hooks/useCreateLesson";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useCreateLesson } from "@shared/lib/hooks/useCreateLesson";

import "./styles.scss";

interface LessonTabProps {
  image: string | undefined;
  moduleNumber: string | number | any;
  courseID: string | number | any;
}

export const LessonInput: React.FC<LessonTabProps> = ({
  image,
  moduleNumber,
  courseID,
}) => {
  const { createLesson } = useCreateLesson();
  const [lesson_title, setLessonName] = useState("");
  const lesson_description = "Trash Description";

  function handleCreateLesson() {
    const lessonData: LessonData = {
      lesson_title,
      lesson_description,
    };
    createLesson(lessonData, courseID, moduleNumber);
  }

  return (
    <div className="lesson-tab-input mb-8">
      <div className="lesson-tab-input__row flex items-center justify-between">
        <img
          src={image}
          className="lesson-tab-input__row__image"
          alt="course-image"
        />
        <OutlinedInput
          placeholder="Название нового урока"
          onChange={(e) => setLessonName(e.target.value)}
          sx={{
            width: "40%",
          }}
        />
        <UtilityButton
          text="Создать урок"
          className=""
          isDisabled={lesson_title !== "" ? false : true}
          type={lesson_title !== "" ? "filled-btn" : "filled-inactive-btn"}
          marginTop="mt-0"
          onClick={handleCreateLesson}
        />
      </div>
    </div>
  );
};
