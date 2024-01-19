import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface UserProfileData {
  username: string;
  image: string;
}

export const UserProfile: React.FC<UserProfileData> = ({ username, image }) => {
  return (
    <div className="user-profile flex flex-col items-start ">
      <img src={image} alt="user-image" className="user-profile__image" />
      <span className="user-profile__name mt-4">{username}</span>
      <address className="user-profile__location">Алматы, Казахстан</address>
      <div className="user-profile__tab flex items-center mt-4">
        <FontAwesomeIcon
          icon={faBriefcase}
          className="user-profile__tab__icon"
        />
        <span className="user-profile__tab__text ml-2">Frontend Developer</span>
      </div>
      <div className="user-profile__tab flex items-center mt-4">
        <FontAwesomeIcon icon={faStar} className="user-profile__tab__icon" />
        <span className="user-profile__tab__text ml-2">
          Пройдено курсов: 15
        </span>
      </div>
    </div>
  );
};
