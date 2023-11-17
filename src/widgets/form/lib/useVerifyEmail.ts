import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export function useVerifyEmail() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const verifyEmail = async () => {
    try {
      const response = await axios.get(
        "https://probable-sole-crucial.ngrok-free.app/api/account/email-verify/"
      );
      console.log("Verify successful:", response.data);
      navigate("/");
    } catch (error: any) {
      setError(
        error.response?.data?.error || "An error occurred during verification."
      );
    }
  };

  return { verifyEmail, error };
}
