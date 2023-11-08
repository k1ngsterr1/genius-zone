// src/features/signup/model/useSignUpForm.ts
import { useForm } from "react-hook-form";

export interface FormData {
  username: string;
  email: string;
  password: string;
}

export function useSignUpForm() {
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

  return {
    register,
    handleSubmit,
    errors,
    isValid,
    isSubmitting,
    onSubmit,
  };
}
