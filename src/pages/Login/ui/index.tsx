import { Header } from "@features/header/ui";
import { LoginScreen } from "@widgets/Login/ui";
import { LoginForm } from "@widgets/form/ui/loginForm";

export const LoginPage = () => {
  return (
    <div className="page">
      <Header />
      <LoginScreen />
    </div>
  );
};
