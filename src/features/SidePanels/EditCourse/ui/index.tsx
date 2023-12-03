import { UtilityButton } from "@shared/ui/UtilityButton";
import { Module } from "@shared/ui/Module";

import "./styles.scss";

interface EditCourseProps {
  image: string;
  courseName: string;
}

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
      <Module number="1.1" name="Типы данных" marginTop="mt-4" />
      <Module number="1.2" name="Функции" marginTop="mt-1" />
      <Module number="1.3" name="Алгоритмы" marginTop="mt-1" />
      <Module number="1.3" name="Методы" marginTop="mt-1" />
      <Module number="1.4" name="Void" marginTop="mt-1" />
    </aside>
  );
};
