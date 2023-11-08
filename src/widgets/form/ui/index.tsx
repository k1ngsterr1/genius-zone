import React from "react";
import { Input, Button } from "@shared/index";
import { useSignUpForm } from "@widgets/form/lib/useSignUpForm";

export const SignUpForm: React.FC = () => {
  const { register, handleSubmit, errors, isValid, isSubmitting, onSubmit } =
    useSignUpForm();

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <Input
          {...register("username", { required: "Username is required" })}
          type="text"
          placeholder="Username"
        />
        {errors.username && <span>{errors.username.message}</span>}
      </div>
      <div>
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
        {errors.email && <span>{errors.email.message}</span>}
      </div>
      <div>
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
        {errors.password && <span>{errors.password.message}</span>}
      </div>
      <Button
        text="Sign Up"
        onClick={handleSubmit(onSubmit)}
        active={isValid && !isSubmitting ? "active" : "inactive"}
      />
    </form>
  );
};

export default SignUpForm;
