import { Header } from "@features/header/ui";
import { Menu } from "@widgets/Menu";
import { RegistrationScreen } from "@widgets/Registration";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@features/Footer/ui";

export const RegistrationPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <RegistrationScreen />
      </div>
      <Footer />
    </>
  );
};
