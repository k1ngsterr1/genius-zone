import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axios from "axios";
import Cookies from "js-cookie";

function useLoadConversations() {
  const token = Cookies.get("accessToken");
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([]);

  async function loadConversations() {
    try {
      dispatch(turnOnLoader());
      const response = await axios.get(
        "https://genzone.up.railway.app/api/conversations/",
        {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        }
      );
      setConversations(response.data);
      console.log("Conversations loaded successfully:", response.data);
    } catch (error: any) {
      console.log("There is an error with loading conversations:", error);
    } finally {
      dispatch(turnOffLoader());
    }
  }

  useEffect(() => {
    loadConversations();
  }, []);

  return { conversations, loadConversations };
}

export default useLoadConversations;
