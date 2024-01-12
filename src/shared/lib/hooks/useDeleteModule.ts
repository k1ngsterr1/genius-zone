import axios from "axios";
import Cookies from "js-cookie";

const useDeleteModule = (onSuccess: any) => {
  const deleteModule = async (
    courseId: string | number | any,
    moduleNum: string | number
  ) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.delete(
        `https://genzone.up.railway.app/api/courses/course/${courseId}/module/${moduleNum}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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
