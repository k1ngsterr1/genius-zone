import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Header } from "@features/header/ui";
import { Menu } from "@widgets/Menu";
import { Footer } from "@features/Footer/ui";

export const SyllabusPage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);

  return (
    <div className="page">
      <Header />
      {isMenuOpen && <Menu />}
    </div>
  );
};
