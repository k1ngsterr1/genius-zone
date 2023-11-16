import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface ChangePasswordFormData {
  password: string;
  confirmPassword: string;
}

export function usePasswordChange() {
  const navigate = useNavigate();

  const {
    register,
    watch,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ChangePasswordFormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const watchedPassword = watch("password");

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      const response = await axios.put(
        "https://probable-sole-crucial.ngrok-free.app/api/account/change-password/",
        data
      );
      console.log("Password Changed Successful:", response.data);
      navigate("/login");
    } catch (error: any) {
      if (error.response) {
        console.error(
          "Password Change failed with status:",
          error.response.status
        );
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
    watchedPassword,
    errors,
    isValid,
    isSubmitting,
    onSubmit,
  };
}
