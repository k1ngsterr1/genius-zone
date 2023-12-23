import { Header } from "@features/Header/ui";
import { Footer } from "@features/Footer/ui";
import { CourseEditorScreen } from "@widgets/CourseEditor/ui";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";

export const CourseEditorPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <CourseEditorScreen />
      </div>
      <Footer />
    </>
  );
};
