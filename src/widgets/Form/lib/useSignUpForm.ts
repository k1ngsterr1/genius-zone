import { useState } from "react";
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
  const [error, setError] = useState("");

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
        `${import.meta.env.VITE_BASE_URL}api/account/register/`,
        data
      );

      console.log("Registration successful:", response.data);
      dispatch(saveEmail(data.email));

      navigate("/verification");
    } catch (error: any) {
      if (error.response) {
        setError(
          `Регистрация не удалась:
          ${error.response.status}`
        );

        console.error("Failed response data", error.response.data);
        setError(
          `Ошибка:
          ${error.response.data.email}`
        );
      } else if (error.request) {
        console.error("No response received:", error.request);
        setError(
          `Не получен ответ:
          ${error.request}`
        );
      } else {
        setError(`Ошибка во время установки: ${error.message}`);
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
    error,
  };
}
