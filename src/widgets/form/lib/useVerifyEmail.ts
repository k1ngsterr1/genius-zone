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
        setError(`Verification failed: ${response.data.error}`);
        console.error("Verification failed:", response.data.error);
      }
    } catch (error: any) {
      if (error.response) {
        setError(`Verify failed: ${error.response.data.error}`);
      } else if (error.request) {
        setError("No response received.");
      } else {
        setError("An error occurred during verification.");
      }
    }
  };

  return { verifyEmail, error };
}
