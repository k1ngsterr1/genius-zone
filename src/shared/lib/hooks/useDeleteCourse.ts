import axios from "axios";

const useDeleteCourse = (courseId: string) => {
  const deleteCourse = async () => {
    try {
      const response = await axios.delete(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseId}/`
      );

      console.log("Course has been deleted successfully!", response.data);
    } catch (error: any) {
      console.error("There was an error deleting the course", error);
    }
  };
  return deleteCourse;
};

export default useDeleteCourse;
