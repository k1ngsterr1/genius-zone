import { UtilityButton } from "@shared/ui/UtilityButton";
import { Module } from "@shared/ui/Module";
import { ModuleSide } from "@shared/ui/ModuleSide";

import "./styles.scss";

interface Module {
  number: string;
  title: string;
}

interface EditCourseProps {
  image: string;
  number: string;
  courseName: string;
  modules: Module[];
}

export const EditCourseTab: React.FC<EditCourseProps> = ({
  image,
  modules,
  courseName,
}) => {
  return (
    <aside className="course-edit-side sticky top-20">
      <img
        src={image}
        alt="course-edit-image"
        className="course-edit-side__image"
      />
      <p className="course-edit-side__course-name mt-6">{courseName}</p>
      <UtilityButton
        text="Опубликовать"
        type="filled-btn"
        marginTop="mt-3"
        onClick={() => console.log("Опубликовать")}
      />
      <h2 className="text-xl text-custom-black font-bold mt-5">Модули:</h2>
      {modules.map((module) => (
        <ModuleSide
          key={module.number}
          number={module.number}
          title={module.title}
        />
      ))}
    </aside>
  );
};
