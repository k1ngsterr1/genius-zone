import React from "react";
import { Input } from "@shared/index";
import { RegistrationButton } from "@shared/ui/registration-button";
import { useSignUpForm } from "@widgets/form/lib/useSignUpForm";

import "./styles.scss";

export const SignUpForm: React.FC = () => {
  const { register, handleSubmit, errors, isValid, isSubmitting, onSubmit } =
    useSignUpForm();

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="form flex flex-col items-center justify-center mt-16"
    >
      <div className="form__input">
        <Input
          {...register("username", { required: "Username is required" })}
          type="text"
          placeholder="Username"
          isError={Boolean(errors.username)} // Pass isError prop based on the error state
        />
        {errors.username && (
          <span className="form__input--error">{errors.username.message}</span>
        )}
      </div>
      <div className="form__input mt-4">
        <Input
          {...register("email", {
            required: "Email is required",
            pattern: {
              value: /^\S+@\S+$/i,
              message: "Please enter a valid email address",
            },
          })}
          type="email"
          placeholder="Email"
        />
        {errors.email && (
          <span className="form__input--error">{errors.email.message}</span>
        )}
      </div>
      <div className="form__input mt-4">
        <Input
          {...register("password", {
            required: "Password is required",
            minLength: {
              value: 6,
              message: "Password must be at least 6 characters",
            },
          })}
          type="password"
          placeholder="Password"
        />
        {errors.password && (
          <span className="form__input--error">{errors.password.message}</span>
        )}
      </div>
      <RegistrationButton
        text="Sign Up"
        onClick={handleSubmit(onSubmit)}
        active={isValid && !isSubmitting ? "active" : "inactive"}
      />
    </form>
  );
};

export default SignUpForm;
