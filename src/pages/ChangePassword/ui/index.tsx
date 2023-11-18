import { Header } from "@features/header/ui";
import { ChangePasswordScreen } from "@widgets/ChangePassword";
import { Menu } from "@widgets/Menu";

export const ChangePasswordPage = () => {
  return (
    <div className="page">
      <Header />
      <Menu />
      <ChangePasswordScreen />
    </div>
  );
};
