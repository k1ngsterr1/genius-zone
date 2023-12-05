import { UtilityButton } from "@shared/ui/UtilityButton";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@shared/ui/Separator";
import { UserProfile } from "@shared/ui/UserProfile";
import image from "@assets/ruslan.jpg";

import "./styles.scss";

export const UserAside = () => {
  return (
    <aside className="user-profile-whole w-auto h-full sticky top-20">
      <div className="user-profile flex flex-col items-start ">
        <UserProfile />
        <UtilityButton
          text="Изменить"
          marginTop="mt-6"
          onClick={() => console.log("LOL")}
          type={"filled-btn"}
        />
        <Separator width="w-[90%]" margin="mt-4 mb-4" color="bg-gray-100" />
        <div className="user-profile__tab-buttons flex flex-col items-start">
          <UtilityButton
            text="Моё обучение"
            marginTop="mt-0"
            onClick={() => console.log("LOL")}
            type={"transparent-active"}
          />
          <UtilityButton
            text="Избранные Курсы"
            marginTop="mt-3"
            onClick={() => console.log("LOL")}
            type={"transparent-inactive"}
          />
        </div>
      </div>
    </aside>
  );
};