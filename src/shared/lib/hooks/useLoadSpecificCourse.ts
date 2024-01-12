import { useState, useCallback, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axios from "axios";

interface CourseData {
  title: string;
  id: string;
  description: string;
  preview: string | any;
  modules: any[];
}

export function useLoadSpecificCourse(courseID: string | any) {
  const [courseData, setCourseData] = useState<CourseData | null>(null);
  const [modulesData, setModulesData] = useState<any>();
  const [error, setError] = useState<Error | null>(null);
  const dispatch = useDispatch();

  const fetchCourseData = useCallback(async () => {
    dispatch(turnOnLoader());
    try {
      const response = await axios.get(
        `https://genzone.up.railway.app/api/courses/course/${courseID}/`
      );
      setCourseData(response.data);
      setModulesData(response.data.modules);
      setError(null);
    } catch (error: any) {
      setError(error);
    } finally {
      dispatch(turnOffLoader());
    }
  }, [courseID, dispatch]);

  useEffect(() => {
    fetchCourseData();
  }, [courseID]);

  const reloadCourseData = () => {
    if (courseID) {
      fetchCourseData();
    }
  };

  return {
    error,
    courseData,
    modulesData,
    reloadCourseData,
    fetchCourseData,
  };
}
