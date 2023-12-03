import axios from "axios";

export interface CourseData {
  title: string;
  description: string;
}

export function useCreateCourse() {
  const createCourse = async (data: CourseData) => {
    // event?.preventDefault();
    try {
      console.log("trying");
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}api/courses/courses/`,
        data
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
