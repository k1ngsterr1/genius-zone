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
    try {
      const response = await fetch(
        "https://probable-sole-crucial.ngrok-free.app/api/account/register/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      console.log(result);
      // Handle the success case - perhaps navigate to a thank you page or clear the form
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
      // Handle the error case - show user feedback, log the error, etc.
    }
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
