import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axios from "axios";

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
      const response = await axios.get(
        "https://genzone.up.railway.app/api/courses/courses/"
      );
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
