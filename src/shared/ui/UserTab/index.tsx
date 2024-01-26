import { useEffect } from "react";
import Cookies from "js-cookie";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import { useNavigate } from "react-router-dom";

import basicUser from "@assets/basic_user.png";

import "./styles.scss";
import { Skeleton } from "@mui/material";

export const UserTab = () => {
  const userID = Cookies.get("userID");
  const navigate = useNavigate();

  const { loadUserData, userData } = useLoadUserData();

  useEffect(() => {
    loadUserData(userID);
  }, [userID]);

  function navigateToUserPage() {
    navigate(`/user/${userID}`);
  }

  return (
    <>
      {userData && (
        <div
          className="user-tab flex items-center justify-between"
          onClick={() => navigateToUserPage()}
        >
          {userData.photo === undefined ? (
            <img
              className="user-tab__image mr-2"
              src={userData.photo}
              alt="user"
            />
          ) : (
            <img className="user-tab__image mr-2" src={basicUser} alt="user" />
          )}
          <span className="user-tab__name">{userData.username}</span>
        </div>
      )}
    </>
  );
};
