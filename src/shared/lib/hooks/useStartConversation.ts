import axiosInstance from "@shared/lib/middleware";
import Cookies from "js-cookie";

function useStartConversation() {
  const token = Cookies.get("accessToken");

  async function startConversation(email: string) {
    try {
      const response = await axiosInstance.post(
        "/conversations/start/",
        email,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Conversation successfully started", response.data);
    } catch (error: any) {
      console.error("There was an error with conversation start:", error);
    }
  }

  return { startConversation };
}

export default useStartConversation;
