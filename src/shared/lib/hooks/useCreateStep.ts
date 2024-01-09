import axios from "axios";
import Cookies from "js-cookie";

// export interface StepData {
//   content_num: any;
//   content_type: any;
//   step_title: string;
// }

export function useCreateStep() {
  const createStep = async (
    data: any,
    courseID: string,
    moduleNum: string,
    lessonNum: string
  ) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.post(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log(token);
      console.log("Step Successfully Created!", response.data);
    } catch (error: any) {
      console.log(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/`
      );
      console.error("There was an error with step creationz:", error);
    }
  };
  return { createStep };
}
