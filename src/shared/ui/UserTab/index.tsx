import React from "react";

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
  return (
    <div className="user-tab flex items-center justify-between">
      <img className="user-tab__image mr-2" src={userImage} alt="user" />
      <span className="user-tab__name">
        {firstName} {lastName}
      </span>
    </div>
  );
};
