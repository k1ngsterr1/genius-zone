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
    lessonNum: string,
    stepNum: string
  ) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.post(
        `https://genzone.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      const response2 = await axios.patch(
        `https://genzone.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/${stepNum}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Step Successfully Created!", response.data, response2.data);
    } catch (error: any) {
      console.error("There was an error with step creation:", error);
    }
  };
  return { createStep };
}
