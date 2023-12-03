import axios from "axios";
import Cookies from "js-cookie";

export interface CourseData {
  title: string;
  description: string;
}

export function useCreateCourse() {
  const createCourse = async (data: CourseData) => {
    try {
      const token = Cookies.get("accessToken");
      console.log(token);
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/courses/courses/`,
        data,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Course Created Successfully:", response.data);
    } catch (error: any) {
      console.error("There is an error with course creating:", error.response);
    }
  };

  return {
    createCourse,
  };
}
