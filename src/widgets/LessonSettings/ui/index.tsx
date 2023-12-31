import { useState, useEffect } from "react";
import { OutlinedInput } from "@mui/material";
import { useParams } from "react-router-dom";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { Loader } from "@shared/ui/Loader";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { InputLesson } from "@widgets/InputLesson/ui";
import TextEditor from "@features/TextEditor/ui";

import cpp from "@assets/cpp.jpg";

export const LessonSettingsScreen = () => {
  const [lessonStepValue, setLessonStepValue] = useState("");

  const courseID = useParams<{ courseID: string }>();
  const moduleNumber = useParams<{ moduleNumber: string }>();
  const lessonNumber = useParams<{ lessonNumber: string }>();

  const { courseData, reloadCourseData, modulesData } = useLoadSpecificCourse(
    courseID.courseID
  );

  const lessonTitle = courseData?.modules
    .flatMap((mod) => mod.lessons)
    .find(
      (lesson) => lesson.lesson_num.toString() === lessonNumber.lessonNumber
    )?.lesson_title;

  const transformedModules =
    courseData?.modules.map((mod) => ({
      id: `module-${mod.module_num}`,
      title: mod.module_title.toString(),
      number: mod.module_num.toString(),
      lessons: mod.lessons.map((lesson: any) => ({
        lessonTitle: lesson.lesson_title,
      })),
    })) ?? [];

  if (!courseData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  return (
    <div className="wrapper--row mb-12">
      <EditCourseTab
        image={courseData.preview}
        courseName={courseData.title}
        modules={transformedModules}
      />
      <section className="w-[73%] lessons-step-container flex flex-col">
        <h2 className="w-[70%] float-left text-3xl font-semibold mb-8">
          Настройки Урока
        </h2>
        <InputLesson lessonImage={cpp} inputValue={lessonTitle} />
        <span className="text-2xl text-custom-black mt-8">Создание шага</span>
        <div className="w-[70%] bg-gray-100 flex flex-col items-start rounded p-4 mt-6">
          <span className="text-xl">Заголовок Шага</span>
          <OutlinedInput
            type="text"
            placeholder="Введите заголовок для урока"
            sx={{
              width: "70%",
              marginTop: "clamp(8px,0.83328vw,32px)",
              height: "clamp(20px,2.0832vw,80px)",
            }}
            onChange={(e) => setLessonStepValue(e.target.value)}
          />
        </div>
        <TextEditor
          courseID={courseID.courseID}
          lessonNum={lessonNumber.lessonNumber}
          moduleNum={moduleNumber.moduleNumber}
          stepTitle={lessonStepValue}
        />
      </section>
    </div>
  );
};
