import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axiosInstance from "@shared/lib/middleware";

interface Course {
  title: string;
  id: string;
  description: string;
  preview: string;
}

function useLoadCourses() {
  const dispatch = useDispatch();
  const [courses, setCourses] = useState<Course[]>([]);

  const [error, setError] = useState(null);

  async function fetchCourses() {
    try {
      dispatch(turnOnLoader());
      const response = await axiosInstance.get("/courses/courses/");
      setCourses(response.data);
    } catch (error: any) {
      setError(error);
    } finally {
      dispatch(turnOffLoader());
    }
  }

  useEffect(() => {
    fetchCourses();
  }, []);

  const reloadCourseData = () => {
    fetchCourses();
  };

  return { courses, setCourses, reloadCourseData, error };
}

export default useLoadCourses;
