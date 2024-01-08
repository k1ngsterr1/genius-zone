import React, { useState } from "react";
import { ModuleData } from "@shared/lib/hooks/useSaveModule";
import { OutlinedInput } from "@mui/material";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { useSaveModule } from "@shared/lib/hooks/useSaveModule";
import { useParams } from "react-router-dom";
import { useUpdateModule } from "@shared/lib/hooks/useUpdateModule";
import { LessonForModuleProps } from "@shared/ui/LessonForModule";
import { useAddNewModule } from "@shared/lib/hooks/useAddNewModule";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { LessonForModule } from "@shared/ui/LessonForModule";
import { LessonInput } from "@shared/ui/LessonInput";
import { useDeleteLesson } from "@shared/lib/hooks/useDeleteLesson";
import { useAddLessonInput } from "@shared/lib/hooks/useAddLessonInput";

interface ModuleWithLessonsProps {
  id: string | number;
  number: any;
  title: string;
  deleteFunction: () => void;
  description: string;
  image: string | undefined;

  lessons: LessonForModuleProps[];
}

export const ModuleWithLessons: React.FC<ModuleWithLessonsProps> = ({
  image,
  title,
  description,
  number,
  deleteFunction,
  lessons,
}) => {
  const courseID = useParams<{ courseID: string }>();
  const { reloadCourseData } = useLoadSpecificCourse(courseID.courseID);

  const handleDeleteSuccess = () => {
    reloadCourseData();
    location.reload();
  };
  const { updateModule } = useUpdateModule();
  const { updateModuleElements } = useAddNewModule();
  const { lessonInputs, addNewLesson } = useAddLessonInput();
  const { deleteLesson } = useDeleteLesson(handleDeleteSuccess);
  const [module_title, setModuleTitle] = useState(title);
  const [module_description, setModuleDescription] = useState(description);

  const handleSubmit = async () => {
    const moduleData: ModuleData = {
      module_title,
      module_description,
    };

    await updateModule(moduleData, courseID.courseID, number);
    reloadCourseData();

    console.log("updateModules:", updateModuleElements);
  };

  return (
    <div className="module-tab flex flex-col items-center">
      <div className="module-tab__inputs flex-col items-start w-[80%] mt-5 mb-8">
        <span className="module-tab__inputs__text">{title}</span>
        <div className="module-tab__inputs__upper-row flex mt-4">
          <OutlinedInput
            placeholder="Название модуля"
            type="text"
            name="module_title"
            required
            value={module_title}
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
          value={module_description}
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
        <UtilityButton
          buttonType={"button"}
          text="Удалить модуль"
          onClick={() => deleteFunction()}
          type={"filled-btn bg-red-500 ml-4 hover:bg-red-600"}
          marginTop="mt-6"
        />
      </div>
      <div className="module-tab__lessons flex-col items-start w-[80%] mt-0 mb-8">
        <span className="text-2xl">Уроки</span>
        {lessons.map((lesson) => (
          <LessonForModule
            courseID={courseID.courseID}
            lessonTitle={lesson.lessonTitle}
            moduleNum={number}
            lessonImage={image}
            lessonNum={lesson.lessonNum}
            deleteLesson={() =>
              deleteLesson(courseID.courseID, number, lesson.lessonNum)
            }
          />
        ))}
        {lessonInputs.map(() => {
          return (
            <LessonInput
              courseID={courseID.courseID}
              moduleNumber={number}
              image={image}
            />
          );
        })}
      </div>
      <div className="w-[80%] flex items-start">
        <UtilityButton
          text="Добавить Урок"
          marginTop="mt-3 mb-6"
          type="filled-inactive-hover"
          onClick={addNewLesson}
        />
      </div>
    </div>
  );
};
