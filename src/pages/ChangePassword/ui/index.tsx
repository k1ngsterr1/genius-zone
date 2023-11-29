import { Header } from "@features/header/ui";
import { ChangePasswordScreen } from "@widgets/ChangePassword";
import { Menu } from "@widgets/Menu";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Footer } from "@features/Footer/ui";

export const ChangePasswordPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <ChangePasswordScreen />
      </div>
      <Footer />
    </>
  );
};
