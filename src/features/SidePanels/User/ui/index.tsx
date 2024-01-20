import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { UtilityButton } from "@shared/ui/UtilityButton";
import { Separator } from "@shared/ui/Separator";
import { UserProfile } from "@shared/ui/UserProfile";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import Cookies from "js-cookie";
import useLogOut from "@shared/lib/hooks/useLogOut";

import "./styles.scss";

export const UserAside = () => {
  const handleLogOut = useLogOut();
  const navigate = useNavigate();
  const userID = Cookies.get("userID");
  const { loadUserData, userData } = useLoadUserData();

  useEffect(() => {
    loadUserData(userID);
    console.log("userID:", userID);
  }, [userID]);

  return (
    <>
      {userData && (
        <aside className="user-profile-whole w-auto h-full sticky top-20">
          <div className="user-profile flex flex-col items-start ">
            <UserProfile />
            <UtilityButton
              text="Изменить"
              marginTop="mt-6"
              onClick={() => navigate(`/user/${userID}/edit`)}
              type={"filled-btn"}
            />
            <UtilityButton
              text="Выйти"
              marginTop="mt-6"
              onClick={() => handleLogOut()}
              type={"filled-btn bg-red-500 hover:bg-red-600"}
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
      )}
    </>
  );
};
