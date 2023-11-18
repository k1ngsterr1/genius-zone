import { MenuLink } from "@shared/ui/Link";

export const Menu = () => {
  return (
    <aside className="menu flex flex-col items-center">
      <MenuLink text="Главная" url="/" />
      <MenuLink text="Обучение" url="/teaching" />
      <MenuLink text="Преподование" url="/studying" />
    </aside>
  );
};
