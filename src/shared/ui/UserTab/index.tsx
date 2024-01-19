import React from "react";
import Cookies from "js-cookie";
import { useNavigate } from "react-router-dom";

import "./styles.scss";

interface UserTabProps {
  firstName: string;
  lastName: string;
  userImage: string;
}

export const UserTab: React.FC<UserTabProps> = ({
  firstName,
  lastName,
  userImage,
}) => {
  const userID = Cookies.get("userID");
  const navigate = useNavigate();

  function navigateToUserPage() {
    navigate(`/user/${userID}`);
  }

  return (
    <div
      className="user-tab flex items-center justify-between"
      onClick={() => navigateToUserPage()}
    >
      <img className="user-tab__image mr-2" src={userImage} alt="user" />
      <span className="user-tab__name">
        {firstName} {lastName}
      </span>
    </div>
  );
};
