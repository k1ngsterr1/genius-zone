import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { Message } from "@shared/ui/Message";
import { useNavigate } from "react-router-dom";
import useConnectWebSocket from "@shared/lib/hooks/useConnectWebSocket";

import "./styles.scss";
import { useEffect } from "react";

interface ChatWindowProps {
  name: string;
  image: string;
  conversationID: number;
  receiverEmail: string;
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  name,
  image,
  conversationID,
  receiverEmail,
}) => {
  const navigate = useNavigate();

  const {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    messages,
    newMessage,
  } = useConnectWebSocket(receiverEmail);

  function navigateBack() {
    navigate("/chats");
  }

  useEffect(() => {
    if (conversationID) {
      connectWebSocket(conversationID);
    }
  }, [conversationID]);

  return (
    <div className="chat_window">
      <div className="chat_window__upper">
        <button
          className="chat_window__upper__back"
          onClick={() => navigateBack()}
        >
          <FontAwesomeIcon
            icon={faArrowLeft}
            className="chat_window__upper__back__left"
          />
          Назад
        </button>
        <span className="chat_window__upper__name">{name}</span>
        <img src={image} className="chat_window__upper__image" alt={name} />
      </div>
      <div className="chat_window__main">
        {messages.map((message, index) => (
          <Message key={index} text={message.text} isSender={true} />
        ))}
      </div>
      <div className="chat_window__textfield">
        <FontAwesomeIcon
          icon={faPaperclip}
          className="chat_window__textfield__attachment"
        />
        <input
          type="text"
          value={newMessage}
          onChange={handleMessageChange}
          onKeyUp={handleKeyPress}
          className="chat_window__textfield__input"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={() => sendMessage}
          className="chat_window__textfield__send"
        />
      </div>
    </div>
  );
};
