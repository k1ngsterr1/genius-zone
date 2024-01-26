import { useState } from "react";
import axiosInstance from "@shared/lib/middleware";

function useOpenConversation() {
  const [conversationData, setConversationData] = useState();
  const [lastPreviousMessages, setLastPreviousMessages] = useState([]);

  async function openConversation(id: number) {
    try {
      const response = await axiosInstance.get(`/conversations/${id}/`);
      const messagesResponse = await axiosInstance.get(`/conversations/${id}/`);
      setConversationData(response.data.results);
      setLastPreviousMessages(messagesResponse.data.results.messages);
      console.log(
        "Conversation has opened successfully",
        response.data,
        response.data.results.messages
      );
    } catch (error: any) {
      console.error("There was an error with chat open:", error);
    }
  }

  return { openConversation, conversationData, lastPreviousMessages };
}

export default useOpenConversation;
