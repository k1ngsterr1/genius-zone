import React from "react";
import { useNavigate, useParams } from "react-router-dom";

import "./styles.scss";

interface StepSquareData {
  number: string | number | any;
  marginLeft?: string;
}

export const StepSquare: React.FC<StepSquareData> = ({
  number,
  marginLeft,
}) => {
  const navigate = useNavigate();
  const courseID = useParams<{ courseID: string }>();
  const moduleNumber = useParams<{ moduleNumber: string }>();
  const lessonNumber = useParams<{ lessonNumber: string }>();

  return (
    <div className={`step-square flex flex-col items-center ${marginLeft}`}>
      <span className="step-square__number">{number}</span>
      <div
        className="step-square__square rounded-sm"
        onClick={() =>
          navigate(
            `/lesson-settings/${courseID.courseID}/module/${moduleNumber.moduleNumber}/lesson/${lessonNumber.lessonNumber}/step/${number} `
          )
        }
      ></div>
    </div>
  );
};
