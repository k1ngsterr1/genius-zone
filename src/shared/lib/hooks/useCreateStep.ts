import axiosInstance from "../middleware";

export function useCreateStep() {
  const createStep = async (
    data: any,
    courseID: string,
    moduleNum: string,
    lessonNum: string,
    stepNum: string
  ) => {
    try {
      const response = await axiosInstance.post(
        `courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/`,
        data
      );
      const response2 = await axiosInstance.patch(
        `courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/${stepNum}/`,
        data
      );
      console.log("Step Successfully Created!", response.data, response2.data);
    } catch (error: any) {
      console.error("There was an error with step creation:", error);
    }
  };
  return { createStep };
}
