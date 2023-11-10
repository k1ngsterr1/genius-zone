// src/features/signup/model/useSignUpForm.ts
import { useForm } from "react-hook-form";

export interface FormData {
  username: string;
  email: string;
  password: string;
  confirmPassword: string;
}

export function useSignUpForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isValid, isSubmitting },
  } = useForm<FormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const watchedPassword = watch("password");

  const onSubmit = async (data: FormData) => {
    console.log(data);
    // Handle form submission, e.g., via API
  };

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    onSubmit,
    watchedPassword,
  };
}
