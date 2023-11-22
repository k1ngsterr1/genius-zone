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
      <img
        src={illustration}
        alt="illustration"
        className="w-[25%] h-auto max-[1024px]:w-[50%]"
      />
      <h1 className="email w-[45%] text-center mt-8">
        На вашу почту <span className="blue">{email}</span> пришло письмо с
        подтверждением
      </h1>
      {error && <p className="text-red-500">{error}</p>}
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
