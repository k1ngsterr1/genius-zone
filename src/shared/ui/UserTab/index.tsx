import React, { useEffect } from "react";
import Cookies from "js-cookie";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

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
          <img
            className="user-tab__image mr-2"
            src={userData.photo}
            alt="user"
          />
          <span className="user-tab__name">{userData.username} </span>
        </div>
      )}
    </>
  );
};
