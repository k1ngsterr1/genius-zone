import { UtilityButton } from "@shared/ui/UtilityButton";
import { Module } from "@shared/ui/Module";

import "./styles.scss";

interface EditCourseProps {
  image: string;
  number: string;
  courseName: string;
}

interface ModuleItem {
  number: string;
  name: string;
  marginTop?: string;
}

const moduleItems: ModuleItem[] = [
  { number: "01", name: "Module One", marginTop: "mt-4" },
  { number: "02", name: "Module Two", marginTop: "mt-4" },
  // ... other modules
];

export const EditCourseTab: React.FC<EditCourseProps> = ({
  image,
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
    </aside>
  );
};
