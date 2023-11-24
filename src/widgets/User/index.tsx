import { UtilityButton } from "@shared/ui/UtilityButton";
import { Footer } from "@features/Footer/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@shared/ui/Separator";
import { CourseTab } from "@widgets/CoureTab";

import image from "@assets/ruslan.jpg";

import "./styles.scss";
import { CategoryTab } from "@shared/ui/CategoryTab";

export const UserScreen = () => {
  return (
    <>
      <main className="wrapper--row mb-12">
        <aside className="user-profile-whole w-auto h-full sticky top-20">
          <div className="user-profile flex flex-col items-start ">
            <img src={image} alt="user-image" className="user-profile__image" />
            <span className="user-profile__name mt-4">Ruslan Makhmatov</span>
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
