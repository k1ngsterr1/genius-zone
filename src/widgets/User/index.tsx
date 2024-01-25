import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { Separator } from "@shared/ui/Separator";
import { CourseTab } from "@widgets/CourseTab";
import { CategoryTab } from "@shared/ui/CategoryTab";
import { UserAside } from "@features/SidePanels/User/ui";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import { Loader } from "@shared/ui/Loader";

import notFound from "@assets/404.svg";

import "./styles.scss";

export const UserScreen = () => {
  const userID = useParams<{ userID: string }>();
  const { loadUserData, userData, userCourses } = useLoadUserData();

  useEffect(() => {
    loadUserData(userID.userID);
    console.log(userID.userID, userCourses);
  }, [userID]);

  if (!userData) {
    return (
      <>
        <Loader />
      </>
    );
  }

  if (userData == undefined) {
    return (
      <>
        <main className="wrapper--row mb-12">
          <div className="w-full courses-container flex flex-col items-center">
            <h1 className="main-heading">Такого пользователя не существует</h1>
            <img className="w-[40%] mt-20" src={notFound} alt="404" />
          </div>
        </main>
        ;
      </>
    );
  }

  return (
    <>
      <main className="wrapper--row mb-12">
        <UserAside
          username={userData.username}
          image={userData.photo}
          userID={userID.userID}
        />
        <div className="w-[73%] courses-container flex flex-wrap gap-3 flex-col">
          <h1 className="main-heading">Мои курсы</h1>
          <div className="flex flex-wrap gap-3 mt-8">
            {userCourses.map((course, index) => (
              <CourseTab
                key={course.id} // Make sure 'course.id' exists
                courseImage={course.preview}
                courseName={course.title}
                courseDescription={course.description}
                margin={index > 0 ? "ml-12" : "ml-0"} // Adjust margin as necessary
                buttonText={"Продолжить"}
              />
            ))}
          </div>
          <div className="w-full flex items-center justify-between mt-8">
            {/* <CourseTab buttonText={"Продолжить"} />
            <CourseTab margin={"ml-12"} buttonText={"Продолжить"} />
            <CourseTab margin={"ml-12"} buttonText={"Продолжить"} /> */}
          </div>
          <Separator width="w-[100%]" margin="mt-12 mb-12" color="" />
          <h2 className="main-heading">Вам может понравится</h2>
          <div className="w-full flex items-center justify-between mt-8">
            <CategoryTab name="Разработка на C++" level="Продвинутый" />
            <CategoryTab name="Разработка на JavaScript" level="Продвинутый" />
            <CategoryTab name="Soft Skills для новичков" level="Начальный" />
            <CategoryTab name="Vue.js 2023 для новичков" level="Начальный" />
          </div>
          <div className="w-full flex items-center justify-between mt-8">
            <CategoryTab name="Crypto Trading Binance" level="Продвинутый" />
            <CategoryTab name="Осваиваем Django за 1 курс" level="Начальный" />
            <CategoryTab
              name="Изучение английского C2"
              level="Профессиональный"
            />
            <CategoryTab name="Веб-Разработка: Начало" level="Начальный" />
          </div>
          <div className="w-full flex items-center justify-between mt-8">
            <CategoryTab name="Frontend Onion Architecture" level="Начальный" />
            <CategoryTab
              name="MVC Архитектура Node.JS 2023"
              level="Продвинутый"
            />
            <CategoryTab name="Немецкий Язык A2" level="Начальный" />
            <CategoryTab
              name="HR повышение квалификации"
              level="Профессиональный"
            />
          </div>
        </div>
      </main>
    </>
  );
};
