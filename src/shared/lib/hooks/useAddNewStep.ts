import { useState, useCallback } from "react";

type StepType = {
  number: string | number;
};

export const useAddNewStep = () => {
  const [stepElements, setSteps] = useState<StepType[]>([]);

  const addNewStep = useCallback(() => {
    const newStep: StepType = {
      number: stepElements.length + 2,
    };
    setSteps((prevSteps) => [...prevSteps, newStep]);
  }, [stepElements]);

  const updateStepElements = (newSteps: any) => {
    setSteps(newSteps);
  };

  return {
    stepElements,
    addNewStep,
    updateStepElements,
  };
};
