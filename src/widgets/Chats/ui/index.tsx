import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { UserAside } from "@features/SidePanels/User/ui";
import { ChatBar } from "@widgets/ChatBar/ui";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";
import useLoadConversations from "@shared/lib/hooks/useLoadConversations";
import useOpenConversation from "@shared/lib/hooks/useOpenConversation";

import noChats from "@assets/no_courses.svg";
import { Loader } from "@shared/ui/Loader";
import { Skeleton } from "@mui/material";

export const ChatsScreen = () => {
  const navigate = useNavigate();
  const { conversations } = useLoadConversations();
  const { openConversation } = useOpenConversation();
  const [isRead, setIsRead] = useState(false);

  function openIndividualChat(conversationID: number) {
    navigate(`/chats/${conversationID}`);
  }

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

  if (conversations.length === 0) {
    <>
      <Loader />
    </>;
  }

  return (
    <div className="wrapper--row mb-12">
      <UserAside />
      <section className="w-[73%] new-courses-container flex flex-col max-[640px]:hidden">
        <h1 className="main-heading">Чаты</h1>
        {conversations.map((conversation: any, index: number) => {
          const initiator = conversation.initiator;
          const conversationID = index + 1;
          const lastMessage = conversation.last_message?.text;
          return (
            <ChatBar
              key={initiator.id}
              image={initiator.photo || <Skeleton />}
              name={initiator.username || <Skeleton />}
              lastMessage={lastMessage || <Skeleton />}
              icon={isRead ? faCheckDouble : faCheck}
              isChecked={isRead ? "--checked" : ""}
              onClick={() => openIndividualChat(conversationID)}
            />
          );
        })}
      </section>
    </div>
  );
};
