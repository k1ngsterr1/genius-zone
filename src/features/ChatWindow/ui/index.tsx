import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { Message } from "@shared/ui/Message";
import { useNavigate } from "react-router-dom";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { ImageUploadModal } from "@entities/ImageUploadModal/ui";
import {
  turnOffModal,
  turnOnModal,
} from "@shared/lib/redux/store/modalImageSlice";

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
  const dispatch = useDispatch();
  const isModalImageShown = useSelector(
    (state: RootState) => state.imageModal.isShown
  );
  const navigate = useNavigate();
  const userID = Cookies.get("userID");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const { loadUserData, userData } = useLoadUserData();
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    messages,
    newMessage,
  } = useConnectWebSocket(receiverEmail);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      console.log("Image selected:", file);
      dispatch(turnOnModal());

      sendMessage(file);
    }
  };

  const handleClose = () => {
    dispatch(turnOffModal());
  };

  const handleButtonClick = () => {
    fileInputRef.current?.click();
  };

  function navigateBack() {
    navigate("/chats");
  }

  useEffect(() => {
    if (conversationID) {
      loadUserData();
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
          onChange={handleFileChange}
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
      {isModalImageShown && (
        <ImageUploadModal
          image={selectedImage}
          conversationID={conversationID}
          receiverEmail={receiverEmail}
          onClose={handleClose}
        />
      )}
    </div>
  );
};
