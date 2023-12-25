import React, { useState } from "react";
import { ModuleData } from "@shared/lib/hooks/useSaveModule";
import { OutlinedInput } from "@mui/material";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useSaveModule } from "@shared/lib/hooks/useSaveModule";
import { useParams } from "react-router-dom";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { LessonForModule } from "@shared/ui/LessonForModule";

interface ModuleWithLessonsProps {
  id: string | number;
  number: any;
  titleValue?: string;
  descriptionValue?: string;
  lessonImage: string | undefined;
}

export const ModuleWithLessons: React.FC<ModuleWithLessonsProps> = ({
  number,
  lessonImage,
}) => {
  const courseID = useParams<{ courseID: string }>();
  const { reloadCourseData } = useLoadSpecificCourse(courseID.courseID);
  const { updateModuleElements } = useAddNewModule();
  const [module_title, setModuleTitle] = useState("");
  const [module_description, setModuleDescription] = useState("");

  const { saveModule } = useSaveModule();

  const handleSubmit = async () => {
    const moduleData: ModuleData = {
      module_title,
      module_description,
    };

    await saveModule(moduleData, courseID.courseID);
    reloadCourseData();

    console.log("updateModules:", updateModuleElements);
  };

  return (
    <div className="module-tab flex flex-col items-center">
      <div className="module-tab__inputs flex-col items-start w-[70%] mt-5 mb-8">
        <span className="module-tab__inputs__text">
          Модуль С Уроками {`${number}`}
        </span>
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
          isDisabled={module_description && module_title !== "" ? false : true}
          buttonType={"submit"}
          text="Сохранить модуль"
          onClick={handleSubmit}
          type={
            module_description && module_title !== ""
              ? "filled-btn"
              : "filled-inactive-btn"
          }
          marginTop="mt-6"
        />
      </div>
      <div className="module-tab__lessons flex-col items-start w-[70%] mt-0 mb-8">
        <span className="text-2xl">Уроки</span>
        <LessonForModule lessonImage={lessonImage} lessonTitle="Проверка" />
      </div>
    </div>
  );
};
