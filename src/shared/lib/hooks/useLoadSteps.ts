import { useState } from "react";
import axios from "axios";

function useLoadSteps() {
  const [steps, setSteps] = useState([]);

  const loadSteps = async (
    courseID: any,
    moduleNum: any,
    lessonNum: any,
    stepNum: any
  ) => {
    try {
      const response = await axios.get(`
       https://inquisitive-creature-production.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/${stepNum}`);
      setSteps(response.data);
    } catch (error: any) {
      console.error("There was an error with loading steps:", error);
    }
    return { loadSteps, steps };
  };
}

export default useLoadSteps;
