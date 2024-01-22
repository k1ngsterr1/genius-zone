import { useEffect, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { Message } from "@shared/ui/Message";
import { useNavigate } from "react-router-dom";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import useConnectWebSocket from "@shared/lib/hooks/useConnectWebSocket";

import moment from "moment";
import Cookies from "js-cookie";

import "./styles.scss";

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
  const userID = Cookies.get("userID");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { loadUserData, userData } = useLoadUserData();

  const {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    messages,
    newMessage,
  } = useConnectWebSocket(receiverEmail);

  const handleButtonClick = () => {
    if (fileInputRef.current) {
      fileInputRef.current.click();
    }
  };

  function navigateBack() {
    navigate("/chats");
  }

  useEffect(() => {
    if (conversationID) {
      loadUserData(userID);
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
        {messages.map((message, index) => {
          const isSender = message.sender == userID;
          console.log(message.sender, userID);
          return (
            <Message
              key={index}
              text={message.text}
              time={moment(message.timestamp).format("LT")}
              isSender={isSender}
              isRead={true}
            />
          );
        })}
      </div>
      <div className="chat_window__textfield">
        <FontAwesomeIcon
          icon={faPaperclip}
          onClick={handleButtonClick}
          className="chat_window__textfield__attachment"
        />
        <input
          accept="image/*"
          style={{ display: "none" }}
          id="raised-button-file"
          multiple
          name="preview"
          className="regular-button blue"
          type="file"
          ref={fileInputRef}
        />
        <input
          type="text"
          placeholder="Напишите сообщение..."
          value={newMessage}
          onChange={handleMessageChange}
          onKeyUp={handleKeyPress}
          className="chat_window__textfield__input"
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          onClick={sendMessage}
          className="chat_window__textfield__send"
        />
      </div>
    </div>
  );
};
