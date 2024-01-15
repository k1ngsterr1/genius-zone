import axios from "axios";
import Cookies from "js-cookie";

function useStartConversation() {
  const token = Cookies.get("accessToken");

  async function startConversation(email: string) {
    try {
      const response = await axios.post(
        "https://genzone.up.railway.app/api/conversations/start/",
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
