import axiosInstance from "@shared/lib/middleware";
import { useNavigate } from "react-router-dom";

export interface CourseData {
  title: string;
  description: string;
}

export function useCreateCourse() {
  const navigate = useNavigate();

  const createCourse = async (data: CourseData, image: File | null) => {
    try {
      const formData = new FormData();
      formData.append("title", data.title);
      formData.append("description", data.description);

      if (image) {
        formData.append("preview", image, image.name);
      }

      const response = await axiosInstance.post(`/courses/courses/`, formData);

      const courseID = response.data.id;

      console.log("Course Created Successfully:", response.data);

      navigate(`/create-course/${courseID}/edit`);
    } catch (error: any) {
      console.error(
        "There is an error with course creating:",
        error.response ? error.response : error
      );
    }
  };

  return { createCourse };
}
