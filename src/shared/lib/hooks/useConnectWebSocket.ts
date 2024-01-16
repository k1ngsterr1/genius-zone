import { useState } from "react";

function useConnectWebSocket(receiverEmail: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [newMessage, setNewMessage] = useState("");

  const connectWebSocket = (conversationID: number) => {
    const ws = new WebSocket(
      `ws://genzone.up.railway.app/ws/chat/${conversationID}/`
    );
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket Connected");
    };
    ws.onmessage = (event: any) => {
      const message = event.data;
      setMessages((prevMessages) => [...prevMessages, message]);
      console.log(message, newMessage);
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
  };

  const sendMessage = () => {
    const mail = receiverEmail;

    if (socket && newMessage && mail) {
      const messageData = {
        type: "chat_message",
        message: newMessage,
        email: mail,
      };
      socket.send(JSON.stringify(messageData));
      setNewMessage("");
      console.log(messageData);
      console.log("Message has been sent successfully!");
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
