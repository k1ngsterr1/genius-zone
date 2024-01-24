import { useState } from "react";

function useConnectWebSocket(receiverEmail: string) {
  const [socket, setSocket] = useState<WebSocket | null>(null);
  const [messages, setMessages] = useState<string[]>([]);
  const [attachment, setAttachment] = useState<any>();
  const [newMessage, setNewMessage] = useState("");

  const connectWebSocket = (conversationID: number) => {
    const ws = new WebSocket(
      `ws://genzone.up.railway.app/ws/chat/${conversationID}/`
    );
    setSocket(ws);

    ws.onopen = () => {
      console.log("WebSocket Connected");
    };

    ws.onmessage = (event) => {
      try {
        const messageObject = JSON.parse(event.data);
        setMessages((prevMessages) => {
          if (!prevMessages.some((msg) => msg.id === messageObject.id)) {
            return [...prevMessages, messageObject];
          }
          return prevMessages;
        });
      } catch (error) {
        console.error("Error parsing the incoming message", error);
      }
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

  const sendMessage = (attachmentFile) => {
    if (socket && (newMessage || attachmentFile)) {
      if (newMessage) {
        const messageData = {
          type: "chat_message",
          message: newMessage,
          email: receiverEmail,
        };
        socket.send(JSON.stringify(messageData));
        console.log("Text message has been sent successfully!");
      }

      if (attachmentFile) {
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          const attachmentData = {
            type: "chat_attachment",
            attachment: base64data,
            email: receiverEmail,
          };
          socket.send(JSON.stringify(attachmentData));
          console.log("Image has been sent successfully", attachmentData);
        };
        reader.readAsDataURL(attachmentFile);
        setAttachment(null);
      }

      setNewMessage("");
    }
  };

  const handleMessageChange = (event) => {
    setNewMessage(event.target.value);
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
      sendMessage(attachment);
    }
  };

  // Return statement should be here
  return {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    messages,
    newMessage,
    attachment,
    setAttachment,
  };
}

export default useConnectWebSocket;
