import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { turnOffLoader, turnOnLoader } from "../redux/store/loaderSlice";
import axiosInstance from "@shared/lib/middleware";

function useLoadConversations() {
  const dispatch = useDispatch();
  const [conversations, setConversations] = useState([]);

  async function loadConversations() {
    try {
      dispatch(turnOnLoader());

      const response = await axiosInstance.get("/conversations/");

      setConversations(response.data.results);
      console;
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
