import { useState, useCallback } from "react";
import axios from "axios";

function useLoadSteps() {
  const [steps, setSteps] = useState<any>([]);
  const [stepsContent, setStepsContent] = useState<any>([]);

  const loadSteps = useCallback(
    async (courseID: any, moduleNum: any, lessonNum: any) => {
      try {
        const response = await axios.get(
          `https://genzone.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/`
        );
        const steps = response.data.results.steps;
        setSteps(steps);
        const allContents = steps.flatMap((step: any) => step.contents);
        setStepsContent(allContents);
      } catch (error) {
        console.error("There was an error with loading steps:", error);
      }
    },
    []
  );

  const addNewLoadStep = useCallback(() => {
    const maxStepNum = Math.max(0, ...steps.map((s: any) => s.step_num));
    const newStep = {
      step_num: maxStepNum + 1,
    };
    setSteps((prevSteps: any) => [...prevSteps, newStep]);
  }, [steps]);

  return { loadSteps, addNewLoadStep, steps, stepsContent };
}

export default useLoadSteps;
