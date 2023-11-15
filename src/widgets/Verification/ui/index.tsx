import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Button } from "@shared/ui/button";
import { useNavigate } from "react-router-dom";
import illustration from "@assets/secure.svg";

export const VerificationScreen = () => {
  const email = useSelector((state: RootState) => state.emailReducer.email);
  const navigate = useNavigate();

  function navigateToMain() {
    navigate("/");
  }

  return (
    <div className="wrapper">
      <img src={illustration} alt="illustration" className="w-1/4 h-auto" />
      <h1 className="main-heading mt-8 w-2/4">
        На вашу почту <span className="blue"> {email}</span> пришло письмо с
        подтверждением
      </h1>
      <Button
        text="Подтвердить"
        className="button button--active mt-8"
        onClick={navigateToMain}
      />
    </div>
  );
};
