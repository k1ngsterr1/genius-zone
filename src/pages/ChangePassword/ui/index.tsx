import { Header } from "@features/header/ui";
import { Menu } from "@widgets/Menu";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
<<<<<<< HEAD
import { ChangePasswordScreen } from "@widgets/ChangePassword";
=======
import { Footer } from "@features/Footer/ui";
>>>>>>> a1c7cd596b6707aade23a99bd7a22489787bd642

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
