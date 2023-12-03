import React from "react";
import { EditCourseTab } from "@features/SidePanels/EditCourse/ui";
import { UtilityButton } from "@shared/ui/UtilityButton";
import ResponsiveDatePicker from "@shared/ui/Calendar/ui";

export const CourseEditScreen = () => {
  return (
    <div className="wrapper--row mt-12">
      <section className="w-[73%] course-edit-container flex flex-col">
        <EditCourseTab image="" courseName="name" />
        <UtilityButton
          text="Новый модуль"
          marginTop="mt-0"
          type="filled"
          onClick={() => console.log("New Module")}
        />
        {/* <ResponsiveDatePicker /> */}
      </section>
    </div>
  );
};
