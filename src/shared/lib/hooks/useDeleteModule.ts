import axiosInstance from "@shared/lib/middleware";

const useDeleteModule = (onSuccess: any) => {
  const deleteModule = async (
    courseId: string | number | any,
    moduleNum: string | number
  ) => {
    try {
      const response = await axiosInstance.delete(
        `/courses/course/${courseId}/module/${moduleNum}/`
      );

      console.log("Module has been deleted successfully!", response.data);

      if (onSuccess) {
        onSuccess(moduleNum);
      }
    } catch (error: any) {
      console.error("There was an error deleting the Module", error);
      if (onSuccess) {
        onSuccess(moduleNum);
        console.log("success reload");
      }
    }
  };
  return { deleteModule };
};

export default useDeleteModule;
