import { Footer } from "@features/Footer/ui";
import { Header } from "@features/header/ui";
import { CourseEditScreen } from "@widgets/CourseEdit/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";

export const NewCourseEdit = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <CourseEditScreen />
      </div>
      <Footer />{" "}
    </>
  );
};
