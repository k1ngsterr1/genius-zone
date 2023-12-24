import axios from "axios";
import Cookies from "js-cookie";

const useDeleteModule = () => {
  const deleteModule = async (
    courseId: string | number | any,
    moduleNum: string | number
  ) => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.delete(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseId}/module/${moduleNum}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Module has been deleted successfully!", response.data);
    } catch (error: any) {
      console.error("There was an error deleting the Module", error);
    }
  };
  return { deleteModule };
};

export default useDeleteModule;
