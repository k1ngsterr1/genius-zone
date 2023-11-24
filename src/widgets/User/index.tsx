import image from "@assets/ruslan.jpg";

import { UtilityButton } from "@shared/ui/UtilityButton";
import { Footer } from "@features/Footer/ui";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBriefcase, faStar } from "@fortawesome/free-solid-svg-icons";
import { Separator } from "@shared/ui/Separator";
import { CourseTab } from "@widgets/CoureTab";

import "./styles.scss";

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
        </div>
      </main>
      <Footer />
    </>
  );
};
