import { UtilityButton } from "@shared/ui/UtilityButton";
import { Module } from "@shared/ui/Module";
import { ModuleSide } from "@shared/ui/ModuleSide";

import "./styles.scss";

interface Module {
  number: string;
  title: string;
  id: string;
}

interface EditCourseProps {
  image: string;
  courseName: string | undefined;
  modules: Module[];
}

export const EditCourseTab: React.FC<EditCourseProps> = ({
  image,
  modules,
  courseName,
}) => {
  if (!Array.isArray(modules) || modules.length === 0) {
    return (
      <aside className="course-edit-side sticky top-20">
        <img
          src={image}
          alt="course-edit-image"
          className="course-edit-side__image"
        />
        <UtilityButton
          text="Опубликовать"
          type="filled-btn"
          marginTop="mt-3"
          onClick={() => console.log("Опубликовать")}
        />
        <p className="course-edit-side__course-name mt-6">{courseName}</p>
        <p className="text-lg w-[70%] text-left mt-8">
          В вашем курсе пока нет никаких модулей
        </p>
      </aside>
    );
  }

  return (
    <aside className="course-edit-side sticky top-20">
      <img
        src={image}
        alt="course-edit-image"
        className="course-edit-side__image"
      />
      <p className="course-edit-side__course-name mt-6 w-[100%]">
        {courseName}
      </p>
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
