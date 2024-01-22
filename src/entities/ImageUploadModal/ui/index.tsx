import React, { useState } from "react";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface ImageUploadProps {
  image: any;
}

export const ImageUploadModal: React.FC<ImageUploadProps> = ({
  image,
  onClose,
}) => {
  const [caption, setCaption] = useState("");

  return (
    <div className="image-upload-modal">
      <div className="image-upload-modal__content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <img src={URL.createObjectURL(image)} alt="Preview" />
        <input
          type="text"
          placeholder="Add a caption..."
          value={caption}
          onChange={(e) => setCaption(e.target.value)}
        />
        <FontAwesomeIcon
          icon={faPaperPlane}
          className="image-upload-modal__content__button"
        />
      </div>
    </div>
  );
};
