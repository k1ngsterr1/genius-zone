// src/features/login/model/useLoginForm.ts
import { useForm } from "react-hook-form";

export interface LoginFormData {
  email: string;
  password: string;
}

// Mock API request function
const fakeApiLoginRequest = async (data: LoginFormData) => {
  console.log("Sending data to the API...", data);
  // Simulate an API request
  return new Promise((resolve) => {
    setTimeout(() => {
      console.log("Logged in!");
      resolve("success");
    }, 1000);
  });
};

export function useLoginForm() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await fakeApiLoginRequest(data);
      console.log(response);
    } catch (error) {
      console.error(error);
    }
  };

  return {
    register,
    handleSubmit,
    isValid,
    errors,
    isSubmitting,
    onSubmit,
  };
}
