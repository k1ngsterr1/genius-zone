import { Input } from "@shared/index";
import { usePasswordVisibility } from "@shared/lib/hooks/usePasswordVisibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { usePasswordChange } from "@widgets/form/lib/useChangePassword";
import "../styles.scss";

export const ChangePasswordForm = () => {
  const {
    register,
    handleSubmit,
    errors,
    isSubmitting,
    isValid,
    onSubmit,
    watchedPassword,
  } = usePasswordChange();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();
  const {
    isVisible: isConfirmPasswordVisible,
    toggleVisibility: toggleConfirmPasswordVisibility,
  } = usePasswordVisibility();

  return (
    <form className="form flex flex-col items-center justify-center mt-16 max-[640px]:mt-8">
      <div className="form__input mt-4">
        <Input
          {...register("password", {
            required: "Заполните пароль",
          })}
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Пароль"
          isError={Boolean(errors.password)}
        />
        <FontAwesomeIcon
          icon={isPasswordVisible ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          className="form__input--eye"
        />
        {errors.password && (
          <span className="form__input--error">{errors.password.message}</span>
        )}
      </div>
      <div className="form__input mt-4">
        <Input
          {...register("confirmPassword", {
            validate: (value) =>
              value === watchedPassword || "Пароли не совпадают",
          })}
          type={isConfirmPasswordVisible ? "text" : "password"}
          placeholder="Повторите пароль"
          isError={Boolean(errors.confirmPassword)}
        />
        <FontAwesomeIcon
          icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
          onClick={toggleConfirmPasswordVisibility}
          className="form__input--eye"
        />
        {errors.confirmPassword && (
          <span className="form__input--error">
            {errors.confirmPassword.message}
          </span>
        )}
      </div>
    </form>
  );
};
