import { Header } from "@features/Header/ui";
import { Footer } from "@features/Footer/ui";
import { CourseEditorScreen } from "@widgets/CourseEditor/ui";
import { RootState } from "@shared/lib/redux/store";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";

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
