import axios from "axios";
import { useState, useCallback, useEffect } from "react";
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
  const [needsUpdate, setNeedsUpdate] = useState(false);
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch();

  const fetchCourseData = useCallback(async () => {
    dispatch(turnOnLoader());
    try {
      const response = await axios.get(
        `https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/`
      );
      console.log(response.data);
      setCourseData(response.data);
      setError(null);
    } catch (error: any) {
      setError(error);
    } finally {
      dispatch(turnOffLoader());
    }
  }, [courseID, dispatch]);

  useEffect(() => {
    fetchCourseData();
  }, []);

  const reloadCourseData = () => {
    if (courseID) {
      fetchCourseData();
      console.log("reloaded");
    }
  };

  const updateCourseData = () => {
    setNeedsUpdate(true);
  };

  return {
    courseData,
    error,
    reloadCourseData,
    fetchCourseData,
    updateCourseData,
  };
}
