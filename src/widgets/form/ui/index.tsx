import React from "react";
import { useForm } from "react-hook-form";
import { Button, Input } from "@shared/index";

interface FormData {
  username: string;
  email: string;
  password: string;
}

export const SignUpForm: React.FC = () => {
  const {
    register,
    handleSubmit,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Handle form submission, e.g., via API
  };

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
