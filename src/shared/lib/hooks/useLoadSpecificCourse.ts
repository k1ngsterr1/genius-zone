import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";

interface CourseData {
  title: string;
  id: string;
  description: string;
  preview: string;
}

export function useLoadSpecificCourse(courseID: string | any) {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        dispatch(turnOnLoader);
        const response = await axios.get(
          `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/`
        );
        setCourseData(response.data);
      } catch (error: any) {
        console.log("Error fetching course data:", error);
        setError(error);
      } finally {
        dispatch(turnOffLoader);
      }
    };
    if (courseID) {
      fetchCourseData();
    }
  }, [courseID]);

  return { courseData, setCourseData, error };
}
