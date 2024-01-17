import axiosInstance from "@shared/lib/middleware";

function useStartConversation() {
  async function startConversation(email: string) {
    try {
      const response = await axiosInstance.post("/conversations/start/", email);
      console.log("Conversation successfully started", response.data);
    } catch (error: any) {
      console.error("There was an error with conversation start:", error);
    }
  }

  return { startConversation };
}

export default useStartConversation;
