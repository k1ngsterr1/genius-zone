import React, { FormEvent, useState } from "react";
import { OutlinedInput } from "@mui/material";
import { LessonTab } from "@widgets/LessonTab";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useSaveModule } from "@shared/lib/hooks/useSaveModule";
import { useParams } from "react-router-dom";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";

import "./styles.scss";

interface ModuleTabProps {
  id: string | number;
  number: any;
  lessonImage: string | undefined;
}

export const ModuleTab: React.FC<ModuleTabProps> = ({
  number,
  lessonImage,
  id,
}) => {
  const courseID = useParams<{ courseID: string }>();
  const [module_title, setModuleTitle] = useState("");
  const [module_description, setModuleDescription] = useState("");
  const { saveModule } = useSaveModule();
  const { cancelNewModule } = useAddNewModule();

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    await saveModule({ module_title, module_description }, courseID.courseID);
  };

  return (
    <>
      <form
        className="module-tab flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="module-tab__inputs flex-col items-start w-[70%] mt-5 mb-8">
          <span className="module-tab__inputs__text">Модуль {`${number}`}</span>
          <div className="module-tab__inputs__upper-row flex mt-4">
            <OutlinedInput
              placeholder="Название модуля"
              type="text"
              name="module_title"
              required
              sx={{
                width: "95%",
                height: "clamp(20px,2.0832vw,80px)",
              }}
              onChange={(e) => setModuleTitle(e.target.value)}
            />
          </div>
          <OutlinedInput
            placeholder="Описание модуля"
            type="text"
            required
            className="mt-4"
            sx={{
              width: "100%",
              height: "clamp(20px,2.0832vw,80px)",
            }}
            onChange={(e) => setModuleDescription(e.target.value)}
          />
          <UtilityButton
            isDisabled={
              module_description && module_title !== "" ? false : true
            }
            buttonType={"submit"}
            text="Сохранить модуль"
            type={
              module_description && module_title !== ""
                ? "filled-btn"
                : "filled-inactive-btn"
            }
            marginTop="mt-6"
          />
          {/* <UtilityButton
            text="Отменить"
            type={"filled-btn bg-red-400 ml-4 hover:bg-red-600"}
            marginTop="mt-6"
            buttonType={"button"}
            onClick={() => cancelNewModule(id)}
          /> */}
        </div>
      </form>
      <LessonTab image={lessonImage} buttonType="filled-inactive-btn" />
    </>
  );
};
