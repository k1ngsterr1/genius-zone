import axiosInstance from "@shared/lib/middleware";

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
      const response = await axiosInstance.put(
        `/courses/course/${courseID}/module/${moduleNum}/`,
        data
      );
      console.log("Module Updated!", response.data);
    } catch (error: any) {
      console.error("There was an error with module save:", error);
    }
  };
  return { updateModule };
};
