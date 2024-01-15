import axios from "axios";
import Cookies from "js-cookie";

function useOpenConversation() {
  const token = Cookies.get("accessToken");

  async function openConversation(id: number) {
    try {
      const response = await axios.get(
        `https://genzone.up.railway.app/api/conversations/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      console.log("Conversation has opened successfully", response.data);
    } catch (error: any) {
      console.error("There was an error with chat open:", error);
    }
  }

  return { openConversation };
}

export default useOpenConversation;
