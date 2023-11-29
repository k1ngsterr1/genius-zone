import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import image from "@assets/ruslan.jpg";

import "./styles.scss";

export const UserProfile = () => {
  return (
    <div className="user-profile flex flex-col items-start ">
      <img src={image} alt="user-image" className="user-profile__image" />
      <span className="user-profile__name mt-4">Ruslan Makhmatov</span>
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
