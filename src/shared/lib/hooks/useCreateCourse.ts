import axios from "axios";
import Cookies from "js-cookie";

export interface CourseData {
  title: string;
  description: string;
}

export function useCreateCourse() {
  const createCourse = async (data: CourseData, image: File | null) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);
      if (image) {
        formData.append("preview", image, image.name); // The file is appended here
      }

      const token = Cookies.get("accessToken");
      const response = await axios.post(
        `https://inquisitive-creature-production.up.railway.app/api/courses/courses/`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Course Created Successfully:", response.data);
    } catch (error: any) {
      console.error(
        "There is an error with course creating:",
        error.response ? error.response : error
      );
    }
  };

  return { createCourse };
}
