import { CourseInnerCard } from "@entities/CourseInnerCard/ui";
import { CourseInnerSide } from "@features/SidePanels/CourseInner/ui";
import { useLoadSpecificCourse } from "@shared/lib/hooks/useLoadSpecificCourse";
import { Loader } from "@shared/ui/Loader";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import notFound from "@assets/404.svg";

interface InnerCourseData {
  description: string;
}

export const CourseInnerScreen: React.FC<InnerCourseData> = ({
  description,
}) => {
  const courseID = useParams<{ courseID: string }>();
  const { fetchCourseData, courseData } = useLoadSpecificCourse(
    courseID.courseID
  );

  useEffect(() => {
    fetchCourseData();
  });

  if (!courseData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (courseData == undefined) {
    return (
      <>
        {" "}
        <main className="wrapper--row mb-12">
          <div className="w-full courses-container flex flex-col items-center">
            <h1 className="main-heading">Такого курса не существует</h1>
            <img className="w-[40%] mt-20" src={notFound} alt="404" />
          </div>
        </main>
      </>
    );
  }

  return (
    <div className="wrapper--row mt-12">
      <section className="w-[73%] course-edit-container flex flex-col items-center max-[640px]:hidden">
        <CourseInnerCard
          name={courseData.title}
          description={courseData?.description}
          photo={courseData.preview}
        />
        <h2 className="text-3xl font-semibold mb-8">О курсе</h2>
        <p className="paragraph"></p>
      </section>
      <CourseInnerSide />
    </div>
  );
};
