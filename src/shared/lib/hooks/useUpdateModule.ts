import axios from "axios";
import Cookies from "js-cookie";

export interface ModuleData {
  module_title: string;
  module_description: string;
}

export const useUpdateModule = () => {
  const updateModule = async (
    data: ModuleData,
    courseID: string | any,
    moduleNum: string | any
  ) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.put(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Module Updated!", response.data);
      console.log(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}`
      );
    } catch (error: any) {
      console.error("There was an error with module save:", error);
      console.log(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}`
      );
    }
  };
  return { updateModule };
};
