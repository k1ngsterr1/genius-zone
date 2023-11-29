import { UtilityButton } from "@shared/ui/UtilityButton";
import { Footer } from "@features/Footer/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@shared/ui/Separator";
import { CourseTab } from "@widgets/CoureTab";

import image from "@assets/ruslan.jpg";

import "./styles.scss";
import { CategoryTab } from "@shared/ui/CategoryTab";
import { UserAside } from "@features/SidePanels/User/ui";

export const UserScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
        <UserAside />
        <div className="w-[73%] courses-container flex flex-col">
          <h1 className="main-heading">Моё обучение</h1>
          <div className="w-full flex items-center justify-between mt-8">
            <CourseTab buttonText={"Продолжить"} />
            <CourseTab margin={"ml-12"} buttonText={"Продолжить"} />
            <CourseTab margin={"ml-12"} buttonText={"Продолжить"} />
          </div>
          <div className="w-full flex items-center justify-between mt-8">
            <CourseTab buttonText={"Продолжить"} />
            <CourseTab margin={"ml-12"} buttonText={"Продолжить"} />
            <CourseTab margin={"ml-12"} buttonText={"Продолжить"} />
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
      <Footer />
    </>
  );
};
