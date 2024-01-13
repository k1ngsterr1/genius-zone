import React from "react";
import {
  FontAwesomeIcon,
  FontAwesomeIconProps,
} from "@fortawesome/react-fontawesome";

import "./styles.scss";
import { FontawesomeObject, IconProp } from "@fortawesome/fontawesome-svg-core";

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
        <img src={image} className="chat_bar__main__image" alt={name} />
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
