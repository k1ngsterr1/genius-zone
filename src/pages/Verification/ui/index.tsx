import { Header } from "@features/Header/ui";
import { VerificationScreen } from "@widgets/Verification/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Footer } from "@features/Footer/ui";

export const VerificationPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <VerificationScreen />
      </div>
      <Footer />
    </>
  );
};
