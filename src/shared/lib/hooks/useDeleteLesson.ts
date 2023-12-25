import axios from "axios";
import Cookies from "js-cookie";

export function useDeleteLesson(onSuccess: any) {
  const deleteLesson = async (
    courseID: any,
    moduleNum: any,
    lessonNum: any
  ) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.delete(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      if (onSuccess) {
        onSuccess(moduleNum);
      }
      console.log("Lesson successfully deleted:", response);
    } catch (error: any) {
      if (onSuccess) {
        onSuccess(moduleNum);
      }
      console.error("There was an error with lesson delete:", error);
    }
  };
  return { deleteLesson };
}
