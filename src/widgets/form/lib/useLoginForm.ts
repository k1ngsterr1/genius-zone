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
        `https://inquisitive-creature-production.up.railway.app/api/account/login/`,
        data,
        { withCredentials: true }
      );

      const accessToken = response.data.access;

      if (accessToken) {
        console.log("Cookies set");
        Cookies.set("accessToken", accessToken);
      }

      const userData = {
        firstName: response.data.user.first_name,
        lastName: response.data.user.last_name,
        userImage: response.data.user.photo,
      };

      console.log("userdata:", userData);

      localStorage.setItem("userData", JSON.stringify(userData));
      dispatch(logIn());

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
