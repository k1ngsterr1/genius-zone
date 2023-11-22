import { Input, RegistrationButton } from "@shared/index";
import { usePasswordVisibility } from "@shared/lib/hooks/usePasswordVisibility";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";
import { useLoginForm } from "@widgets/form/lib/useLoginForm";
import { Link } from "react-router-dom";

import "../styles.scss";

export const LoginForm = () => {
  const { register, handleSubmit, errors, isSubmitting, isValid, onSubmit } =
    useLoginForm();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col items-center justify-center mt-16 max-[640px]:mt-8"
    >
      <div className="form__input mt-4">
        <Input
          {...register("email", {
            required: "Заполните электронную почту",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Пожалуйста введите электронную почту правильно",
            },
          })}
          type="email"
          placeholder="Email"
          isError={Boolean(errors.email)}
        />
        {errors.email && (
          <span className="form__input--error">{errors.email.message}</span>
        )}
      </div>
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
      <RegistrationButton
        text="Войти"
        onClick={handleSubmit(onSubmit)}
        active={isValid && !isSubmitting ? "active" : "inactive"}
      />
      <p className="form__paragraph mt-4">
        Или забыли {""}
        <Link className="blue underline cursor-pointer" to="/change-password">
          пароль
        </Link>
      </p>
      <figure className="separator mt-4" />
      <p className="form__paragraph mt-4">
        У вас еще нет учетной записи?
        <Link to="/registration" className="blue underline cursor-pointer">
          Зарегистрироваться
        </Link>
      </p>
    </form>
  );
};
