import { useEffect, useState } from "react";

function useConnectWebSocket() {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const connectWebSocket = (conversationID: number) => {
    useEffect(() => {
      const ws = new WebSocket(
        `'wss://genzone.up.railway.app/ws/chat/${conversationID}/`
      );
      setSocket(ws);

      ws.onopen = () => {
        console.log("WebSocket Connected");
      };
      ws.onmessage = (event: any) => {
        const message = event.data;
        setMessages((prevMessages) => [...prevMessages, message]);
      };

      ws.onerror = (event) => {
        console.error("WebSocket Error", event);
      };

      ws.onclose = () => {
        console.log("WebSocket Disconnected");
        setSocket(null);
      };

      return () => {
        ws.close();
      };
    }, []);
  };

  const sendMessage = () => {
    if (socket && newMessage) {
      socket.send(newMessage);
      setNewMessage("");
    }
  };

  const handleMessageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setNewMessage(event.target.value);
  };

  const handleKeyPress = (event: React.KeyboardEvent) => {
    if (event.key === "Enter") {
      sendMessage();
    }
  };

  return {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    messages,
    newMessage,
  };
}

export default useConnectWebSocket;
