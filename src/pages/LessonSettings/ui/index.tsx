import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@features/Footer/ui";
import { LessonSettingsScreen } from "@widgets/LessonSettings/ui";

export const LessonSettings = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <LessonSettingsScreen />
      </div>
      <Footer />
    </>
  );
};
