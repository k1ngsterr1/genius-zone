import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { Loader } from "@shared/ui/Loader";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { InputLesson } from "@widgets/InputLesson/ui";
import TextEditor from "@features/TextEditor/ui";

import cpp from "@assets/cpp.jpg";

export const LessonSettingsScreen = () => {
  const courseID = useParams<{ courseID: string }>();
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

  useEffect(() => {
    console.log("Course data:", courseData);
    console.log("Lesson number:", lessonNumber);
    console.log("Lesson title:", lessonTitle);
  }, [courseData, lessonNumber]);

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
        <TextEditor />
      </section>
    </div>
  );
};
