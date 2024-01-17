import { useState } from "react";
import axiosInstance from "@shared/lib/middleware";
import Cookies from "js-cookie";

function useOpenConversation() {
  const token = Cookies.get("accessToken");
  const [conversationData, setConversationData] = useState();

  async function openConversation(id: number) {
    try {
      const response = await axiosInstance.get(`/conversations/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setConversationData(response.data.results);
      console.log("Conversation has opened successfully", response.data);
    } catch (error: any) {
      console.error("There was an error with chat open:", error);
    }
  }

  return { openConversation, conversationData };
}

export default useOpenConversation;
