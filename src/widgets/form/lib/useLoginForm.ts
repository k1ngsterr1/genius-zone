import { useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logIn } from "@shared/lib/redux/store/authSlice";
import Cookies from "js-cookie";
import axios from "axios";

export interface LoginFormData {
  email: string;
  password: string;
}

export function useLoginForm() {
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const dispatch = useDispatch();

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
        `${import.meta.env.VITE_BASE_URL}api/account/login/`,
        data,
        { withCredentials: true }
      );

      console.log("Login successful:", response.data);

      const accessToken = response.data.access;
      console.log(accessToken);
      if (accessToken) {
        console.log("Cookies set");
        Cookies.set("accessToken", accessToken);
      }

      const firstName = response.data.user.first_name.toString();
      const lastName = response.data.user.last_name.toString();
      const userImage = response.data.user.photo.toString();

      dispatch(
        logIn({
          firstName: firstName,
          lastName: lastName,
          userImage: userImage,
        })
      );

      navigate("/create-course/new");
    } catch (error: any) {
      if (error.response) {
        console.error("Login failed with status:", error.response.status);
        setError(`Ошибка логина: ${error.response.status}`);
      } else if (error.request) {
        setError(`Ошибка ответа: ${error.request}`);
      } else {
        setError(`Ошибка во время установки: ${error.message}`);
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
    error,
  };
}
