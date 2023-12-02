import ResponsiveDatePicker from "@shared/ui/Calendar/ui";

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
        src="course-edit-image"
        alt="course-edit-image"
        className="course-edit-side__image"
      />
      <span className="course-edit-side__name">Проверка</span>
    </aside>
  );
};
