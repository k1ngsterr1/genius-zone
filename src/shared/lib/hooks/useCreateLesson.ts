import axios from "axios";
import Cookies from "js-cookie";

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
      const token = Cookies.get("accessToken");
      const response = await axios.post(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Lesson Saved!", response.data);
    } catch (error: any) {
      console.error("There was an error with lesson save:", error);
    }
  };
  return { createLesson };
}
