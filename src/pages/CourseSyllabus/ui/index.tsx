import { Footer } from "@features/Footer/ui";
import { Header } from "@features/Header/ui";
import { RootState } from "@shared/lib/redux/store";
import { CourseSyllabusScreen } from "@widgets/CourseSyllabus/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";

export const CourseSyllabus = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <CourseSyllabusScreen />
      </div>
      <Footer />
    </>
  );
};
