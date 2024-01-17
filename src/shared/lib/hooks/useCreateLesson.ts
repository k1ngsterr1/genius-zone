import axiosInstance from "@shared/lib/middleware";

export interface LessonData {
  lesson_title: string;
  lesson_description: string;
}

export function useCreateLesson() {
  const createLesson = async (
    data: LessonData,
    courseID: any,
    moduleNum: any
  ) => {
    try {
      const response = await axiosInstance.post(
        `/courses/course/${courseID}/module/${moduleNum}/lesson/`,
        data
      );
      console.log("Lesson Saved!", response.data);
    } catch (error: any) {
      console.error("There was an error with lesson save:", error);
    }
  };
  return { createLesson };
}
