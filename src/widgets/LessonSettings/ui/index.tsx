import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { Loader } from "@shared/ui/Loader";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { InputLesson } from "@widgets/InputLesson/ui";

import cpp from "@assets/cpp.jpg";

export const LessonSettingsScreen = () => {
  const courseID = useParams<{ courseID: string }>();
  const lessonID = useParams<{ lessonID: string }>();
  const { courseData, reloadCourseData, modulesData } = useLoadSpecificCourse(
    courseID.courseID
  );

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
    console.log("course data:", courseData);
    console.log("before updating modules:", modulesData);
    if (courseData?.modules) {
    }
  }, [courseData?.modules]);

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
        <InputLesson lessonImage={cpp} />
      </section>
    </div>
  );
};
