import { UtilityButton } from "@shared/ui/UtilityButton";
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
      <h2 className="text-lg text-custom-black">Модули:</h2>
    </aside>
  );
};
