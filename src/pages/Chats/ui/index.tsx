import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { ChatsScreen } from "@widgets/Chats/ui";
import { Footer } from "@features/Footer/ui";

const ChatsPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <ChatsScreen />
      </div>
      <Footer />
    </>
  );
};

export default ChatsPage;
