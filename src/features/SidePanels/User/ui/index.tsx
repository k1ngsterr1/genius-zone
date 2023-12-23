import { UtilityButton } from "@shared/ui/UtilityButton";
import { Separator } from "@shared/ui/Separator";
import { UserProfile } from "@shared/ui/UserProfile";
import useLogOut from "@shared/lib/hooks/useLogOut";

import "./styles.scss";

export const UserAside = () => {
  const handleLogOut = useLogOut();

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
        <UtilityButton
          text="Выйти"
          marginTop="mt-6"
          onClick={() => handleLogOut()}
          type={"filled-btn bg-red-500"}
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
