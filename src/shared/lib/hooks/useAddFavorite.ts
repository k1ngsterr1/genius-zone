import axiosInstance from "../middleware";

export const useFavoriteCourse = () => {
  const addFavoriteCourse = async (courseID: any) => {
    try {
      const response = await axiosInstance.get(
        `/courses/course/${courseID}/add_favorite_course/`
      );
      console.log("Favorite course successfully added!");
    } catch (error) {
      console.error("There was an error with favorite course:", error);
    }
  };

  const removeFavoriteCourse = async (courseID: any) => {
    try {
      const response = await axiosInstance.get(
        `/courses/course/${courseID}/remove_favorite_course/`
      );
      console.log("Favorite course successfully removed!");
    } catch (error: any) {
      console.error("There was an error with course removing", error);
    }
  };
  return { addFavoriteCourse, removeFavoriteCourse };
};
