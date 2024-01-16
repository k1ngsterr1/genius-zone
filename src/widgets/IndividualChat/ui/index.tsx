import { ChatWindow } from "@features/ChatWindow/ui";
import { UserAside } from "@features/SidePanels/User/ui";
import useOpenConversation from "@shared/lib/hooks/useOpenConversation";
import { useEffect } from "react";
import { useParams } from "react-router-dom";

export const IndividualChat = () => {
  const conversationID = useParams<{ conversationID: any }>();
  const { openConversation, conversationData } = useOpenConversation();

  useEffect(() => {
    if (conversationID.conversationID) {
      openConversation(conversationID.conversationID);
    }
  }, [conversationID.conversationID]);

  if (conversationData) {
    var name = conversationData.initiator.username;
    var photo = conversationData.initiator.photo;
    var receiverEmail = conversationData.receiver.email;
  }

  return (
    <div className="wrapper--row h-full mb-12">
      <UserAside />
      <section className="w-[73%] course-edit-container flex flex-col max-[640px]:hidden">
        <ChatWindow
          image={photo}
          name={name}
          receiverEmail={receiverEmail}
          conversationID={conversationID.conversationID}
        />
      </section>
    </div>
  );
};
