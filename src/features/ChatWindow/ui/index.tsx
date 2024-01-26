import { useEffect, useState, useRef } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowLeft,
  faPaperPlane,
  faPaperclip,
} from "@fortawesome/free-solid-svg-icons";
import { AttachmentMessage, Message } from "@shared/ui/Message";
import { useNavigate } from "react-router-dom";
import { useLoadUserData } from "@shared/lib/hooks/useLoadUserData";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "@shared/lib/redux/store";
import { ImageUploadModal } from "@entities/ImageUploadModal/ui";
import {
  turnOffModal,
  turnOnModal,
} from "@shared/lib/redux/store/modalImageSlice";

import TestExample from "@assets/cpp.jpg";

import useConnectWebSocket from "@shared/lib/hooks/useConnectWebSocket";

import moment from "moment";
import Cookies from "js-cookie";

import "./styles.scss";
import { Skeleton } from "@mui/material";

import basicUser from "@assets/basic_user.png";
import { UtilityButton } from "@shared/ui/UtilityButton";

interface ChatWindowProps {
  name: string;
  image: string;
  conversationID: number;
  receiverEmail: string;
  previousMessages: any[];
}

export const ChatWindow: React.FC<ChatWindowProps> = ({
  name,
  image,
  conversationID,
  previousMessages,
  receiverEmail,
}) => {
  const dispatch = useDispatch();
  const isModalImageShown = useSelector(
    (state: RootState) => state.imageModal.isShown
  );
  const navigate = useNavigate();
  const userID = Cookies.get("userID");
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [selectedImage, setSelectedImage] = useState(null);

  const {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    messages,
    newMessage,
  } = useConnectWebSocket(receiverEmail);

  const updatedMessages = previousMessages.concat(messages);

  const handleFileChange = (event) => {
    const file = event.target.files[0];
    if (file) {
      setSelectedImage(file);
      console.log("Image selected:", file);
      dispatch(turnOnModal());
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
        <span className="chat_window__upper__name">
          {name || (
            <Skeleton
              className="!w-[50%]"
              sx={{
                width: 210,
              }}
            />
          )}
        </span>
        {image === undefined
          ? (
              <img
                className="chat_window__upper__image"
                src={image}
                alt="user"
              />
            ) || <Skeleton />
          : (
              <img
                className="chat_window__upper__image"
                src={basicUser}
                alt="user"
              />
            ) || <Skeleton />}
      </div>
      <div className="chat_window__main">
        <UtilityButton
          text="Предыдущие сообщения"
          onClick={() => console.log("loaded")}
          className="utility-button__filled-btn w-[10%] !text-xs p-1 m-auto mt-4 rounded-full"
        />
        {updatedMessages.map((message, index) => {
          const isSender = message.sender == userID;
          return (
            <Message
              key={index}
              text={message.text || <Skeleton />}
              attachment={message.attachment || <Skeleton />}
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
          name="attachment"
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
          onClick={() => sendMessage(selectedImage)}
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
