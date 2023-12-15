import React from "react";
import { OutlinedInput } from "@mui/material";
import { LessonTab } from "@widgets/LessonTab";

import "./styles.scss";

interface ModuleTabProps {
  number: string;
}

export const ModuleTab: React.FC<ModuleTabProps> = ({ number }) => {
  return (
    <>
      <div className="module-tab flex flex-col items-center">
        <div className="module-tab__inputs flex-col items-start w-[70%] mt-5 mb-8">
          <span className="module-tab__inputs__text">Модуль {`${number}`}</span>
          <div className="module-tab__inputs__upper-row flex mt-4">
            <OutlinedInput
              placeholder="Название модуля"
              type="text"
              sx={{
                width: "95%",
                height: "clamp(20px,2.0832vw,80px)",
              }}
            />{" "}
          </div>
          <OutlinedInput
            placeholder="Описание модуля"
            type="text"
            className="mt-4"
            sx={{
              width: "100%",
              height: "clamp(20px,2.0832vw,80px)",
            }}
          />
        </div>
      </div>
      <LessonTab image="cpp" buttonType="filled-inactive-btn" />
    </>
  );
};
