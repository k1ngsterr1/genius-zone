import { Header } from "@features/header/ui";
import { ChangePasswordScreen } from "@widgets/ChangePassword";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";

export const ChangePasswordPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
      <ChangePasswordScreen />
    </div>
  );
};
