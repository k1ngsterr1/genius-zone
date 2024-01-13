import { useState, useEffect } from "react";
import { UserAside } from "@features/SidePanels/User/ui";
import { ChatBar } from "@widgets/ChatBar/ui";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import useLoadConversations from "@shared/lib/hooks/useLoadConversations";
import useStartConversation from "@shared/lib/hooks/useStartConversation";

import noChats from "@assets/no_courses.svg";

export const ChatsScreen = () => {
  const { conversations } = useLoadConversations();
  const { startConversation } = useStartConversation();
  const [isRead, setIsRead] = useState(false);

  if (!conversations) {
    return (
      <div className="wrapper--row mb-12">
        <UserAside />
        <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
          <div className="flex flex-col justify-center items-center h-full">
            <img src={noChats} className="no-courses" alt="no-courses-vector" />
            <h1 className="text-3xl text-custom-black">У вас пока нет чатов</h1>
          </div>
        </section>
      </div>
    );
  }

  return (
    <div className="wrapper--row mb-12">
      <UserAside />
      <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
        <h1 className="main-heading">Чаты</h1>
        {conversations.map((conversation: any) => {
          const initiator = conversation.initiator;
          return (
            <ChatBar
              key={initiator.id}
              image={initiator.photo}
              name={initiator.username}
              lastMessage={initiator.text}
              icon={isRead ? faCheckDouble : faCheck}
              isChecked={isRead ? "--checked" : ""}
              onClick={() => startConversation()}
            />
          );
        })}
      </section>
    </div>
  );
};
