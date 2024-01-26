import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import Cookies from "js-cookie";

import basicUser from "@assets/basic_user.png";

import "./styles.scss";

export const UserProfile = () => {
  const userID = Cookies.get("userID");
  const { loadUserData, userData } = useLoadUserData();

  useEffect(() => {
    loadUserData(userID);
    console.log("userID:", userID);
  }, [userID]);

  return (
    <>
      {userData && (
        <div className="user-profile flex flex-col items-start ">
          {userData.photo === undefined ? (
            <img
              src={userData.photo}
              alt="user-image"
              className="user-profile__image"
            />
          ) : (
            <img
              src={basicUser}
              alt="user-image"
              className="user-profile__image"
            />
          )}
          <span className="user-profile__name mt-4">{userData.username}</span>
          <address className="user-profile__location">
            Алматы, Казахстан
          </address>
          <div className="user-profile__tab flex items-center mt-4">
            <FontAwesomeIcon
              icon={faBriefcase}
              className="user-profile__tab__icon"
            />
            <span className="user-profile__tab__text ml-2">
              Frontend Developer
            </span>
          </div>
          <div className="user-profile__tab flex items-center mt-4">
            <FontAwesomeIcon
              icon={faStar}
              className="user-profile__tab__icon"
            />
            <span className="user-profile__tab__text ml-2">
              Пройдено курсов: 15
            </span>
          </div>
        </div>
      )}
    </>
  );
};
