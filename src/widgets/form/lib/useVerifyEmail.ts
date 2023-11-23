// useVerifyEmail.ts
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export function useVerifyEmail(email: string) {
  const navigate = useNavigate();
  const [error, setError] = useState(""); // Error state

  const verifyEmail = async () => {
    try {
      const response = await axios.post(
        `${import.meta.env.VITE_BASE_URL}check_status/`,
        { email }
      );

      if (response.data.status === "verified") {
        console.log("Response Status:", response.data.status);
        console.log("Verify successful:", response.data);
        setError("");
        navigate("/");
      } else {
        console.log("Response Status:", response.data.status);
        setError(`Не удалось подтвердить почту: ${response.data.error}`);
      }
    } catch (error: any) {
      if (error.response) {
        setError(`Не удалось подтвердить почту: ${error.response.data.error}`);
      } else if (error.request) {
        setError("Не получен ответ");
      } else {
        setError("Произошла ошибка во время верификации");
      }
    }
  };

  return { verifyEmail, error };
}
