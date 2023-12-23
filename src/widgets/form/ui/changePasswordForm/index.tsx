import { Input } from "@shared/ui/Input";
import { RegistrationButton } from "@shared/ui/RegistrationButton";
import { usePasswordVisibility } from "@shared/lib/hooks/usePasswordVisibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { usePasswordChange } from "@widgets/form/lib/useChangePassword";
import { Link } from "react-router-dom";

import "../styles.scss";

export const ChangePasswordForm = () => {
  const { register, handleSubmit, errors, isSubmitting, isValid, onSubmit } =
    usePasswordChange();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();

  const {
    isVisible: isConfirmPasswordVisible,
    toggleVisibility: toggleConfirmPasswordVisibility,
  } = usePasswordVisibility();
  usePasswordVisibility();
  return (
    <form className="form flex flex-col items-center justify-center mt-16 max-[640px]:mt-8">
      <div className="form__input mt-4">
        <Input
          {...register("old_password", {
            required: "Введите старый пароль",
          })}
          type={isPasswordVisible ? "text" : "password"}
          placeholder="Введите старый пароль"
          isError={Boolean(errors.old_password)}
        />
        <FontAwesomeIcon
          icon={isPasswordVisible ? faEyeSlash : faEye}
          onClick={togglePasswordVisibility}
          className="form__input--eye"
        />
        {errors.old_password && (
          <span className="form__input--error">
            {errors.old_password.message}
          </span>
        )}
      </div>
      <div className="form__input mt-4">
        <Input
          {...register("new_password", {
            required: "Заполните пароль",
            minLength: {
              value: 6,
              message: "Пароль должен содержать не менее 6-ти символов",
            },
          })}
          type={isConfirmPasswordVisible ? "text" : "password"}
          placeholder="Введите новый пароль"
          isError={Boolean(errors.new_password)}
        />
        <FontAwesomeIcon
          icon={isConfirmPasswordVisible ? faEyeSlash : faEye}
          onClick={toggleConfirmPasswordVisibility}
          className="form__input--eye"
        />
        {errors.new_password && (
          <span className="form__input--error">
            {errors.new_password.message}
          </span>
        )}
      </div>
      <RegistrationButton
        text="Поменять пароль"
        onClick={handleSubmit(onSubmit)}
        active={isValid && !isSubmitting ? "active" : "inactive"}
      />
      <p className="form__paragraph mt-4">
        Или {""}
        <Link className="blue underline cursor-pointer" to="/login">
          войти?
        </Link>
      </p>
    </form>
  );
};
