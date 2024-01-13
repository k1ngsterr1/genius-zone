import { UserAside } from "@features/SidePanels/User/ui";

export const IndividualChat = () => {
  return (
    <div className="wrapper--row h-full mb-12">
      <UserAside />
      <section className="w-[73%] course-edit-container flex flex-col max-[640px]:hidden"></section>
    </div>
  );
};
