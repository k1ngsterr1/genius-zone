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
        const messageObject: any = JSON.parse(event.data);
        setMessages((prevMessages) => {
          if (prevMessages.some((msg: any) => msg.id === messageObject.id)) {
            return prevMessages;
          } else {
            return [...prevMessages, messageObject];
          }
        });
        console.log(messageObject);
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

  const sendMessage = (attachmentFile: any) => {
    const mail = receiverEmail;

    if (socket && newMessage && mail) {
      const messageData = {
        type: "chat_message",
        message: newMessage,
        email: mail,
      };
      socket.send(JSON.stringify(messageData));
      console.log(messageData);
      setNewMessage("");
      console.log("Message has been sent successfully!");
      console.log(attachmentFile, attachment);
      if (attachmentFile) {
        console.log("attachment is here!");
        const reader = new FileReader();
        reader.onloadend = () => {
          const base64data = reader.result;
          const messageData = {
            type: "chat_message",
            message: newMessage,
            email: mail,
            attachment: base64data,
          };
          socket.send(JSON.stringify(messageData));
          console.log("Image has been sent successfully");
        };
        reader.readAsDataURL(attachmentFile);
      }
      setNewMessage("");
      setAttachment(null);
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
    attachment,
    setAttachment,
  };
}

export default useConnectWebSocket;
