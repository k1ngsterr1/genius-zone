// VerificationScreen.tsx
import { useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { Button } from "@shared/ui/button";
import { useVerifyEmail } from "@widgets/form/lib/useVerifyEmail";
import illustration from "@assets/secure.svg";

export const VerificationScreen = () => {
  const email = useSelector((state: RootState) => state.emailReducer.email);
  const { verifyEmail, error } = useVerifyEmail(email);

  return (
    <div className="wrapper">
      <img src={illustration} alt="illustration" className="w-1/4 h-auto" />
      <h1 className="main-heading mt-8 w-2/4">
        На вашу почту <span className="blue">{email}</span> пришло письмо с
        подтверждением
      </h1>
      {error && <p className="text-red-500">{error}</p>}{" "}
      {/* Display error message */}
      <Button
        text="Подтвердить"
        className="button button--active mt-8"
        onClick={verifyEmail}
      />
      <p className="paragraph mt-4">
        Не пришло письмо?{" "}
        <span
          className="link blue underline cursor-pointer"
          onClick={verifyEmail}
        >
          Отправить снова
        </span>
      </p>
    </div>
  );
};
