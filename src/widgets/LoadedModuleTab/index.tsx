import React, { FormEvent, useState } from "react";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { ModuleData } from "@shared/lib/hooks/useSaveModule";
import { OutlinedInput } from "@mui/material";
import { useUpdateModule } from "@shared/lib/hooks/useUpdateModule";
import { useParams } from "react-router-dom";
import { LessonTab } from "@widgets/LessonTab";
import { UtilityButton } from "@shared/ui/UtilityButton";

interface LoadedModuleTabProps {
  title: string | any;
  description: string | any;
  image: string | any;
  number: string | number | any;
  deleteFunction: () => void;
  id: number;
}

export const LoadedModuleTab: React.FC<LoadedModuleTabProps> = ({
  title,
  description,
  image,
  number,
  deleteFunction,
}) => {
  const courseID = useParams<{ courseID: string }>();
  const { updateModule } = useUpdateModule();
  const [module_title, setModuleTitle] = useState(title);
  const [module_description, setModuleDescription] = useState(description);

  const { reloadCourseData } = useLoadSpecificCourse(courseID.courseID);

  const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const moduleData: ModuleData = {
      module_title,
      module_description,
    };

    await updateModule(moduleData, courseID.courseID, number);
    reloadCourseData();
    console.log("reloaded course data zhopa");
  };

  return (
    <>
      <form
        className="module-tab flex flex-col items-center"
        onSubmit={handleSubmit}
      >
        <div className="module-tab__inputs flex-col items-start w-[70%] mt-5 mb-8">
          <span className="module-tab__inputs__text">{title}</span>
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
              value={module_title}
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
            value={module_description}
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
          <UtilityButton
            buttonType={"button"}
            text="Удалить модуль"
            onClick={deleteFunction}
            type={"filled-btn bg-red-500 ml-4 hover:bg-red-600"}
            marginTop="mt-6"
          />
        </div>
      </form>
      <LessonTab
        image={image}
        courseID={courseID.courseID}
        moduleNumber={number}
      />
    </>
  );
};
