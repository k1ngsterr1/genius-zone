import axios from "axios";
import Cookies from "js-cookie";

const useDeleteCourse = (courseId: string) => {
  const deleteCourse = async () => {
    try {
      const token = Cookies.get("accessToken");
      const response = await axios.delete(
        `https://genzone.up.railway.app/api/courses/course/${courseId}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );

      console.log("Course has been deleted successfully!", response.data);
    } catch (error: any) {
      console.error("There was an error deleting the course", error);
    }
  };
  return deleteCourse;
};

export default useDeleteCourse;
