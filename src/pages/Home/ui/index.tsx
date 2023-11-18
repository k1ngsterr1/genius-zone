import { Header } from "@features/header/ui";
import { Menu } from "@widgets/Menu";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
    </div>
  );
};
