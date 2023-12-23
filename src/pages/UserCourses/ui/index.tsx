import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@features/Footer/ui";
import { UserCoursesScreen } from "@widgets/UserCourses/ui";

export const UserCoursesPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <UserCoursesScreen />
      </div>
      <Footer />
    </>
  );
};
