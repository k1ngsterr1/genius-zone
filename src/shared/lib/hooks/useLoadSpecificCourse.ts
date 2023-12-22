import axios from "axios";
import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";

interface CourseData {
  title: string;
  id: string;
  description: string;
  preview: string | any;
  modules: any[];
}

export function useLoadSpecificCourse(courseID: string | any) {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchCourseData = async () => {
      try {
        const response = await axios.get(
          `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/`
        );
        console.log(response.data);
        setCourseData(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        dispatch(turnOffLoader());
      }
    };
    if (courseID) {
      fetchCourseData();
    }
  }, [courseID]);

  return { courseData, setCourseData, error };
}
