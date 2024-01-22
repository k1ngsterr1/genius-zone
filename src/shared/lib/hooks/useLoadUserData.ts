import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/store/authSlice";
import axiosInstance from "../middleware";
import Cookies from "js-cookie";

export function useLoadUserData() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [courses, setCourses] = useState();

  const userID = Cookies.get("userID");

  const loadUserData = async () => {
    try {
      if (userID === undefined) {
        dispatch(logOut());
      } else {
        const response = await axiosInstance.get(`/account/${userID}/`);
        console.log(`/account/12/`);
        setUserData(response.data);
        if (userData) {
          setCourses(response.data.user.courses);
        }
        console.log(
          "User Data has been loaded successfylly!",
          response.data,
          courses
        );
      }
    } catch (error: any) {
      console.log(`/account/${userID}/`);
      console.log("There was an error with loading user data:", error);
    }
  };

  return { loadUserData, userData, courses };
}
