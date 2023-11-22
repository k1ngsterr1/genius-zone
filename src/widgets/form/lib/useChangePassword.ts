import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export interface ChangePasswordFormData {
  old_password: string;
  new_password: string;
}

export function usePasswordChange() {
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting, isValid },
  } = useForm<ChangePasswordFormData>({
    mode: "onChange",
    criteriaMode: "all",
  });

  const onSubmit = async (data: ChangePasswordFormData) => {
    try {
      const response = await axios.put(
        `${import.meta.env.VITE_BASE_URL}change-password/`,
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
    errors,
    isValid,
    isSubmitting,
    onSubmit,
  };
}
