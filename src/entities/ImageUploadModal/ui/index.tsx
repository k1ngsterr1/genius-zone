import React, { useEffect } from "react";
import { faClose, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import useConnectWebSocket from "@shared/lib/hooks/useConnectWebSocket";

import "./styles.scss";

interface ImageUploadProps {
  image: any;
  receiverEmail: string;
  conversationID: any;
  onClose: () => void;
}

export const ImageUploadModal: React.FC<ImageUploadProps> = ({
  image,
  receiverEmail,
  conversationID,
  onClose,
}) => {
  const {
    connectWebSocket,
    sendMessage,
    handleMessageChange,
    handleKeyPress,
    newMessage,
  } = useConnectWebSocket(receiverEmail);

  useEffect(() => {
    if (conversationID) {
      connectWebSocket(conversationID);
      console.log("images");
    }
  }, [conversationID]);

  return (
    <div className="background_black">
      <div className="image-upload-modal">
        <div className="image-upload-modal__content">
          <div className="image-upload-modal__content__upper">
            <FontAwesomeIcon
              icon={faClose}
              onClick={onClose}
              className="image-upload-modal__content__upper__icon"
            />
            <span className="image-upload-modal__content__upper__text">
              Отправить фото
            </span>
          </div>
          <img
            className="image-upload-modal__content__preview"
            src={URL.createObjectURL(image)}
            alt="Preview"
          />
          <div className="image-upload-modal__content__lower">
            <input
              type="text"
              placeholder="Напишите сообщение..."
              value={newMessage}
              onChange={handleMessageChange}
              onKeyUp={handleKeyPress}
              className="image-upload-modal__content__lower__input"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              onClick={sendMessage}
              className="image-upload-modal__content__lower__button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
