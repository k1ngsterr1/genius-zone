import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface LoginFormData {
  email: string;
  password: string;
}

export function useLoginForm() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<LoginFormData>({
    mode: "onChange",
  });

  const onSubmit = async (data: LoginFormData) => {
    try {
      const response = await axios.post(
        "https://probable-sole-crucial.ngrok-free.app/api/account/login/",
        data
      );

      console.log("Login successful:", response.data);

      navigate("/");
    } catch (error: any) {
      if (error.response) {
        console.error("Login failed with status:", error.response.status);
        console.error("Failed response data", error.response.data);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error during setup:", error.message);
      }
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
