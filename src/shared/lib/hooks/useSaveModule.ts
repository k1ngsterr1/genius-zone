import axiosInstance from "@shared/lib/middleware";
import Cookies from "js-cookie";

export interface ModuleData {
  module_title: string;
  module_description: string;
}

export const useSaveModule = () => {
  const saveModule = async (data: ModuleData, courseID: string | any) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axiosInstance.post(
        `/courses/course/${courseID}/module/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Module Saved!", response.data);
    } catch (error: any) {
      console.error("There was an error with module save:", error);
    }
  };
  return { saveModule };
};
