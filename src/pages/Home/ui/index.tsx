import { Header } from "@features/Header/ui";
import { Menu } from "@widgets/Menu";
import { RootState } from "@shared/lib/redux/store";
import { useSelector } from "react-redux";
import { Footer } from "@features/Footer/ui";

import login from "@assets/login.svg";

import "./styles.scss";

export const HomePage = () => {
  const isMenuOpen = useSelector((state: RootState) => state.menu.isOpen);
  const firstName = useSelector((state: RootState) => state.auth.firstName);
  const lastName = useSelector((state: RootState) => state.auth.lastName);

  return (
    <>
      <div className="page">
        <Header />
        {isMenuOpen && <Menu />}
        <h1 className="text-4xl font-bold text-custom-black w-[30%] text-center mt-24 max-[640px]:text-2xl w-[80%]">
          Авторизуйтесь чтобы начать пользоваться{" "}
          <span className="text-custom-blue">Genius Zone</span>
        </h1>
        <img src={login} className="login-vector" alt="login" />
      </div>
      <Footer />
    </>
  );
};
