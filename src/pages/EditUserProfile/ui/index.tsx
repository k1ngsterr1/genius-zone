import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Header } from "@features/Header/ui";
import { Footer } from "@features/Footer/ui";
import { Menu } from "@widgets/Menu";
import { EditUserProfileScreen } from "@widgets/EditUserProfile/ui";

export const EditUserProfilePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      {" "}
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <EditUserProfileScreen />
      </div>
      <Footer />
    </>
  );
};
