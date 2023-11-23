import React from "react";

import "./styles.scss";

interface ErrorTabProps {
  text: string;
}

export const ErrorTab: React.FC<ErrorTabProps> = ({ text }) => {
  return (
    <div className="error-tab flex items-center justify-center mt-8">
      <span className="error-tab__text">{text}</span>
    </div>
  );
};
