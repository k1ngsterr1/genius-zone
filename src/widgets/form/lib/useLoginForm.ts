// src/features/login/model/useLoginForm.ts
import { useForm } from "react-hook-form";

export interface LoginFormData {
  email: string;
  password: string;
}

// Mock API request function
// const fakeApiLoginRequest = async (data: LoginFormData) => {
//   console.log("Sending data to the API...", data);
//   // Simulate an API request
//   return new Promise((resolve) => {
//     setTimeout(() => {
//       console.log("Logged in!");
//       resolve("success");
//     }, 1000);
//   });
// };

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
      const response = await fetch(
        "https://probable-sole-crucial.ngrok-free.app/api/account/login/",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // Include other headers if necessary, like Authorization for tokens, etc.
          },
          body: JSON.stringify(data),
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const result = await response.json();
      console.log("Login successful:", result);
      // Perform any actions on successful login here, like redirecting the user
    } catch (error) {
      console.error("Login failed:", error);
      // Handle the error case here, like showing an error message to the user
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
