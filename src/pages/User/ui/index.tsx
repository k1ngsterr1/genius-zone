import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { UserScreen } from "@widgets/User";
import { Footer } from "@features/Footer/ui";

export const UserPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <UserScreen />
      </div>
      <Footer />
    </>
  );
};
