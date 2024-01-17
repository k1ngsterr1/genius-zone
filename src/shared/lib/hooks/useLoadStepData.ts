import { useState } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axiosInstance from "@shared/lib/middleware";

interface StepData {
  stepTitle: string;
  contents: any[];
}

export function useLoadStepData() {
  const [stepData, setStepData] = useState<StepData | null>(null);
  const dispatch = useDispatch();

  const loadStepData = async (
    courseID: string | any,
    moduleNum: string | any,
    lessonNum: string | any,
    stepNum: string | any
  ) => {
    dispatch(turnOnLoader());
    try {
      const response = await axiosInstance.get(
        `/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/${stepNum}/`
      );
      setStepData(response.data);
      console.log("Step Successfully Loaded!", response.data);
    } catch (error: any) {
      console.error("There was an error with load step data:", error);
    } finally {
      dispatch(turnOffLoader());
    }

    // useEffect(() => {
    //   loadStepData(courseID, moduleNum, lessonNum, stepNum);
    // }, []);
  };
  return { stepData, loadStepData };
}
