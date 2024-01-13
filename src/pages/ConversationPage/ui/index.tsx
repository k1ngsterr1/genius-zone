import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Footer } from "@features/Footer/ui";
import { IndividualChat } from "@widgets/IndividualChat/ui";

export const ConversationPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <IndividualChat />
      </div>
      <Footer />
    </>
  );
};
