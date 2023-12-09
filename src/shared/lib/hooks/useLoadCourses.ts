import { useState, useEffect } from "react";
import axios from "axios";

interface Course {
  title: string;
  id: string;
  description: string;
  preview: string;
}

function useLoadCourses() {
  const [courses, setCourses] = useState<Course[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function fetchCourses() {
      try {
        const response = await axios.get(
          "https://inquisitive-creature-production.up.railway.app/api/courses/courses/"
        );
        setCourses(response.data);
      } catch (error: any) {
        setError(error);
      } finally {
        setLoading(false);
      }
    }

    fetchCourses();
  }, []);

  return { courses, setCourses, loading, error };
}

export default useLoadCourses;
