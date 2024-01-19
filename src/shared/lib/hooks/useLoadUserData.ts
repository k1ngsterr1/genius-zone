import { useState } from "react";
import axiosInstance from "../middleware";

export function useLoadUserData() {
  const [userData, setUserData] = useState();

  const loadUserData = async (userID: any) => {
    try {
      const response = await axiosInstance.get(`/account/${userID}/`);
      console.log(`/account/${userID}/`);
      setUserData(response.data);
      console.log("User Data has been loaded successfylly!", response.data);
    } catch (error: any) {
      console.log(`/account/${userID}/`);
      console.log("There was an error with loading user data:", error);
    }
  };

  return { loadUserData, userData };
}
