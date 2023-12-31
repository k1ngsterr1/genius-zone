import { Header } from "@features/Header/ui";
import { LoginScreen } from "@widgets/Login/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@features/Footer/ui";

export const LoginPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <LoginScreen />
      </div>
      <Footer />
    </>
  );
};
