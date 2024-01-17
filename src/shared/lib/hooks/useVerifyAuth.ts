import { useState } from "react";
import { useDispatch } from "react-redux";
import { logIn } from "../redux/store/authSlice";
import axiosInstance from "@shared/lib/middleware";

export function useVerifyAuth() {
  const dispatch = useDispatch();
  const [isLoading, setLoaded] = useState(true);

  const verifyAuth = async () => {
    try {
      const response = await axiosInstance.get(`/courses/courses/`);

      if (response.status === 200) {
        const userData = response.data.user;
        dispatch(logIn(userData));
      }
    } catch (error) {
      console.error("Authentication verification failed:", error);
    } finally {
      setLoaded(false);
    }
  };

  return { verifyAuth, isLoading };
}
