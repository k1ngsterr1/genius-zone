import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCheck, faCheckDouble } from "@fortawesome/free-solid-svg-icons";

import "./styles.scss";

interface MessageProps {
  text: string;
  attachment?: any;
  time: string;
  isSender: boolean;
  isRead: boolean;
}

export const Message: React.FC<MessageProps> = ({
  text,
  isSender,
  isRead,
  time,
  attachment,
}) => {
  const messageClass = isSender ? "message--sender" : "message--recipient";

  return (
    <div className={`message ${messageClass}`}>
      {attachment && (
        <img
          className="message__attachment border-2"
          src={attachment}
          alt="attachment"
        />
      )}
      <span className="message__text">{text}</span>
      <div className="message__additional_data">
        {" "}
        <span className="message__additional_data__time">{time}</span>
        <FontAwesomeIcon
          className="message__additional_data__check"
          icon={isRead ? faCheckDouble : faCheck}
        />
      </div>
    </div>
  );
};
