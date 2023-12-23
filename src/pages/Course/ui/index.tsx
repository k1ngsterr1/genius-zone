import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { CourseScreen } from "@widgets/Course/ui";
import { Footer } from "@features/Footer/ui";

export const CoursePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <CourseScreen />
      </div>
      <Footer />
    </>
  );
};
