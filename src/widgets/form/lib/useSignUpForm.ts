import { useForm } from "react-hook-form";

import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { saveEmail } from "@shared/lib/redux/store/emailSlice";

import axios from "axios";

export interface FormData {
  first_name: string;
  last_name: string;
  email: string;
  password: string;
  password_conf: string;
}

export function useSignUpForm() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  let errorText;

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
      const response = await axios.post(
        "https://probable-sole-crucial.ngrok-free.app/api/account/register/",
        data
      );

      console.log("Registration successful:", response.data);
      dispatch(saveEmail(data.email));

      navigate("/verification");
    } catch (error: any) {
      if (error.response) {
        errorText = error.data;
        // ! Сделать вывод ошибок
        console.log("Error Text:", errorText);
        console.error(
          "Registration failed with status:",
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
    watchedPassword,
  };
}
