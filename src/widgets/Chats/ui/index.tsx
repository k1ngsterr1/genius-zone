import { useState, useEffect } from "react";
import { UserAside } from "@features/SidePanels/User/ui";
import { ChatBar } from "@widgets/ChatBar/ui";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import useLoadConversations from "@shared/lib/hooks/useLoadConversations";

export const ChatsScreen = () => {
  const { conversations } = useLoadConversations();
  const [isRead, setIsRead] = useState(false);

  return (
    <div className="wrapper--row mb-12">
      <UserAside />
      <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
        <h1 className="main-heading">Чаты</h1>
        {conversations.map((conversation) => {
          const initiator = conversation.initiator;
          return (
            <ChatBar
              key={initiator.id}
              image={initiator.photo}
              name={initiator.username}
              lastMessage={initiator.text}
              icon={isRead ? faCheckDouble : faCheck}
              isChecked={isRead ? "--checked" : ""}
            />
          );
        })}
      </section>
    </div>
  );
};
