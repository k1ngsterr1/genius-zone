import { useState, useCallback, useEffect } from "react";
import axiosInstance from "@shared/lib/middleware";

function useLoadSteps(courseID: any, moduleNum: any, lessonNum: any) {
  const [steps, setSteps] = useState<any[]>([]);
  const [stepsContent, setStepsContent] = useState<any[]>([]);
  const [loading, setLoading] = useState(true); // A new state to track loading status

  const loadSteps = useCallback(async () => {
    setLoading(true);
    try {
      const response = await axiosInstance.get(
        `/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/`
      );
      const fetchedSteps = response.data.results.steps;
      if (!localStorage.getItem("steps")) {
        setSteps(fetchedSteps);
        const allContents = fetchedSteps.flatMap((step: any) => step.contents);
        setStepsContent(allContents);
      }
    } catch (error) {
      console.error("There was an error with loading steps:", error);
    }
    setLoading(false);
  }, [courseID, moduleNum, lessonNum]);

  useEffect(() => {
    const savedSteps = localStorage.getItem("steps");
    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    } else {
      loadSteps();
    }
  }, [loadSteps]);

  const addNewLoadStep = useCallback(() => {
    const maxStepNum = Math.max(0, ...steps.map((s: any) => s.step_num));
    const newStep = {
      step_num: maxStepNum + 1,
      // Initialize other properties for the new step as needed
    };

    // Update the local state with the new step
    setSteps((prevSteps: any) => {
      const updatedSteps = [...prevSteps, newStep];

      localStorage.setItem("steps", JSON.stringify(updatedSteps));
      console.log(updatedSteps);

      return updatedSteps;
    });
  }, [steps]);

  useEffect(() => {
    const savedSteps = localStorage.getItem("steps");
    if (savedSteps) {
      setSteps(JSON.parse(savedSteps));
    } else {
      loadSteps();
    }
  }, [loadSteps]);

  return { loadSteps, addNewLoadStep, steps, stepsContent };
}

export default useLoadSteps;
