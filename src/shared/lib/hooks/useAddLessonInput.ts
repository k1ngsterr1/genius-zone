import { useState, useCallback } from "react";

type LessonInputType = {
  lesson_title: string;
};

export const useAddLessonInput = () => {
  const [lessonInputs, setLessons] = useState<LessonInputType[]>([]);

  const addNewLesson = useCallback(() => {
    const newLessonInput: LessonInputType = {
      lesson_title: "",
    };
    setLessons((prevLessons) => [...prevLessons, newLessonInput]);
  }, [lessonInputs]);

  const updateLessonInputs = (newLessons: any) => {
    setLessons(newLessons);
  };

  return {
    lessonInputs,
    addNewLesson,
    updateLessonInputs,
  };
};
