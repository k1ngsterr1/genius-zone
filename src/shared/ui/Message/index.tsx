import React from "react";

import "./styles.module.scss";

interface MessageProps {
  text: string;
}

export const Message: React.FC<MessageProps> = ({ text }) => {
  return <div className="message">{text}</div>;
};
