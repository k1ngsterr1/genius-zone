import { Footer } from "@features/Footer/ui";
import { Header } from "@features/header/ui";
import { RootState } from "@shared/lib/redux/store";
import { CourseEditSyllabusScreen } from "@widgets/CourseEdit/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";

export const NewCourseEditSyllabus = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <CourseEditSyllabusScreen />
      </div>
      <Footer />
    </>
  );
};
