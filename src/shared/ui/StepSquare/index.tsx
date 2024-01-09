import React from "react";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

interface StepSquareData {
  number: string | number;
  marginLeft?: string;
}

export const StepSquare: React.FC<StepSquareData> = ({
  number,
  marginLeft,
}) => {
  const navigate = useNavigate();

  return (
    <div className={`step-square flex flex-col items-center ${marginLeft}`}>
      <span className="step-square__number">{number}</span>
      <div
        className="step-square__square rounded-sm"
        onClick={() =>
          navigate(`/lesson-settings/39/1/2/lesson/step/${number}`)
        }
      ></div>
    </div>
  );
};