import React, { useState } from "react";
import { faClose, faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./styles.scss";

interface ImageUploadProps {
  image: any;
  onSend: () => void;
  onClose: () => void;
}

export const ImageUploadModal: React.FC<ImageUploadProps> = ({
  image,
  onClose,
  onSend,
}) => {
  const [caption, setCaption] = useState("");

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
              value={caption}
              onChange={(e) => setCaption(e.target.value)}
              className="image-upload-modal__content__lower__input"
            />
            <FontAwesomeIcon
              icon={faPaperPlane}
              onClick={onSend}
              className="image-upload-modal__content__lower__button"
            />
          </div>
        </div>
      </div>
    </div>
  );
};
