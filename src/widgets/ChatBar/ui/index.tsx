import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";
import { FontawesomeObject, IconProp } from "@fortawesome/fontawesome-svg-core";

import basicUser from "@assets/basic_user.png";

import "./styles.scss";

interface ChatBarProps {
  image: string;
  name: string;
  lastMessage: string;
  icon: IconProp;
  isChecked: string;
  onClick: () => void;
}

export const ChatBar: React.FC<ChatBarProps> = ({
  image,
  name,
  lastMessage,
  icon,
  isChecked,
  onClick,
}) => {
  return (
    <div className="chat_bar" onClick={onClick}>
      <div className="chat_bar__main">
        {image === undefined ? (
          <img src={image} className="chat_bar__main__image" alt={name} />
        ) : (
          <img src={basicUser} className="chat_bar__main__image" alt={name} />
        )}

        <div className="chat_bar__main__content">
          <span className="chat_bar__main__content__name">{name}</span>
          <span className="chat_bar__main__content__last_message">
            {lastMessage}
          </span>
        </div>
      </div>
      <div className="chat_bar__other">
        <span className="chat_bar__other__time">13:45</span>
        <FontAwesomeIcon
          icon={icon}
          className={`chat_bar__other__icon${isChecked}`}
        />
      </div>
    </div>
  );
};
