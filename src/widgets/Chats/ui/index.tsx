import { useState } from "react";
import { UserAside } from "@features/SidePanels/User/ui";
import { ChatBar } from "@widgets/ChatBar/ui";
import { KebabMenu } from "@shared/ui/KebabMenu";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import cpp from "@assets/cpp.jpg";

export const ChatsScreen = () => {
  const [isRead, setIsRead] = useState(false);

  return (
    <div className="wrapper--row mb-12">
      <UserAside />
      <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
        <h1 className="main-heading">Чаты</h1>
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
        <ChatBar
          image={cpp}
          name="Miku"
          lastMessage="Иди нахуй"
          icon={isRead ? faCheckDouble : faCheck}
          isChecked={isRead ? "--checked" : ""}
        />
      </section>
      <KebabMenu />
    </div>
  );
};
