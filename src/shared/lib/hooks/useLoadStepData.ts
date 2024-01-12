import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axios from "axios";
import Cookies from "js-cookie";

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
      const token = Cookies.get("accessToken");
      const response = await axios.get(
        `https://genzone.up.railway.app/api/courses/course/${courseID}/module/${moduleNum}/lesson/${lessonNum}/step/${stepNum}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
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