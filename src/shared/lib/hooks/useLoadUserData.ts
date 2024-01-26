import { useState } from "react";
import { useDispatch } from "react-redux";
import { logOut } from "../redux/store/authSlice";
import axiosInstance from "../middleware";
import Cookies from "js-cookie";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";

export function useLoadUserData() {
  const dispatch = useDispatch();
  const [userData, setUserData] = useState();
  const [userCourses, setUsersCourses] = useState([]);

  const userID = Cookies.get("userID");

  const loadUserData = async (userID: any) => {
    try {
      if (userID === undefined) {
        dispatch(logOut());
      } else {
        const response = await axiosInstance.get(`/account/${userID}/`);
        const userCoursesResponse = await axiosInstance.get(
          `/account/${userID}/`
        );
        setUserData(response.data);
        setUsersCourses(userCoursesResponse.data.courses);

        console.log(
          "User Data has been loaded successfully!",
          userData,
          userCourses
        );
      }
    } catch (error: any) {
      console.log(`/account/${userID}/`);
      console.log("There was an error with loading user data:", error);
    }
  };

  return { loadUserData, userData, userCourses };
}
