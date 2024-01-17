import axiosInstance from "@shared/lib/middleware";

export function useDeleteLesson(onSuccess: any) {
  const deleteLesson = async (
    courseID: any,
    moduleNum: any,
    lessonNum: any
  ) => {
    try {
      const response = await axiosInstance.delete(
        `/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/`
      );
      if (onSuccess) {
        console.log("deleted Successfully");
        onSuccess(lessonNum);
      }
      console.log("Lesson successfully deleted:", response);
    } catch (error: any) {
      if (onSuccess) {
        console.log("deleted Successfully");
        onSuccess(lessonNum);
      }
      console.error("There was an error with lesson delete:", error);
    }
  };
  return { deleteLesson };
}
