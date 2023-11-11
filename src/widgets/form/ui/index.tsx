import React, { useState } from "react";
import { Input } from "@shared/index";
import { usePasswordVisibility } from "@shared/lib/hooks/usePasswordVisibility";
import { RegistrationButton } from "@shared/ui/registration-button";
import { useSignUpForm } from "@widgets/form/lib/useSignUpForm";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEye, faEyeSlash } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    watchedPassword,
    onSubmit,
  } = useSignUpForm();

  const {
    isVisible: isPasswordVisible,
    toggleVisibility: togglePasswordVisibility,
  } = usePasswordVisibility();
  const {
    isVisible: isConfirmPasswordVisible,
    toggleVisibility: toggleConfirmPasswordVisibility,
  } = usePasswordVisibility();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col items-center justify-center mt-16"
    >
      <div className="form__input">
        <Input
          {...register("username", { required: "Заполните полное имя" })}
          type="text"
          placeholder="Полное имя"
          isError={Boolean(errors.username)} // Pass isError prop based on the error state
        />
        {errors.username && (
          <span className="form__input--error">{errors.username.message}</span>
        )}
      </div>
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
            minLength: {
              value: 6,
              message: "Пароль должен содержать не менее 6-ти символов",
            },
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
        {errors.password && (
          <span className="form__input--error">{errors.password.message}</span>
        )}
      </div>
      <RegistrationButton
        text="Создать аккаунт"
        onClick={handleSubmit(onSubmit)}
        active={isValid && !isSubmitting ? "active" : "inactive"}
      />
      <p className="form__paragraph mt-4">
        Выполняя вход, вы соглашаетесь с нашими{" "}
        <span className="blue underline cursor-pointer">
          Условиями использования
        </span>{" "}
        и{" "}
        <span className="blue underline cursor-pointer">
          Политикой конфиденциальности.
        </span>
      </p>
      <figure className="separator mt-4" />
      <p className="form__paragraph mt-4">
        Уже есть учетная запись?{" "}
        <span className="blue underline cursor-pointer">Вход</span>
      </p>
    </form>
  );
};

export default SignUpForm;
